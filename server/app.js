const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// 启用CORS，允许所有来源的请求
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 解析JSON请求体
app.use(bodyParser.json());

// 添加请求日志中间件
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('请求头:', JSON.stringify(req.headers));
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('请求体:', JSON.stringify(req.body));
  }
  next();
});

// 连接远程数据库
const db = mysql.createConnection({
  host: 'weapp.tmzpw.net',
  user: 'root',
  password: 'zamcAp001!#@',
  database: 'weapp_hr_form'
});

db.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err);
    return;
  }
  console.log('已连接到远程数据库');
});

// 测试API
app.get('/api/test', (req, res) => {
  console.log('收到测试请求');
  res.json({ message: 'API服务器运行正常', time: new Date().toISOString() });
});

// 企业信息提交API
app.post('/api/enterprise/add', (req, res) => {
  console.log('收到企业信息提交请求');
  console.log('请求体:', JSON.stringify(req.body));
  
  try {
    const {
      name,
      town,
      industry,
      contact_person,
      contact_phone,
      current_employees,
      current_month_new_recruits,
      urgent_need_general_workers,
      urgent_need_skilled_workers,
      urgent_need_management,
      urgent_need_sales,
      status_remark
    } = req.body;

    // 基本验证
    if (!name) {
      console.log('验证失败: 企业名称不能为空');
      return res.status(400).json({
        code: 1,
        message: '企业名称不能为空'
      });
    }

    // 打印每个字段的值和类型
    console.log('字段值和类型:');
    console.log('name:', name, typeof name);
    console.log('town:', town, typeof town);
    console.log('industry:', industry, typeof industry);
    console.log('contact_person:', contact_person, typeof contact_person);
    console.log('contact_phone:', contact_phone, typeof contact_phone);
    console.log('current_employees:', current_employees, typeof current_employees);
    console.log('current_month_new_recruits:', current_month_new_recruits, typeof current_month_new_recruits);
    console.log('urgent_need_general_workers:', urgent_need_general_workers, typeof urgent_need_general_workers);
    console.log('urgent_need_skilled_workers:', urgent_need_skilled_workers, typeof urgent_need_skilled_workers);
    console.log('urgent_need_management:', urgent_need_management, typeof urgent_need_management);
    console.log('urgent_need_sales:', urgent_need_sales, typeof urgent_need_sales);
    console.log('status_remark:', status_remark, typeof status_remark);

    const query = `
      INSERT INTO enterprises (
        name,
        town,
        industry,
        contact_person,
        contact_phone,
        current_employees,
        current_month_new_recruits,
        urgent_need_general_workers,
        urgent_need_skilled_workers,
        urgent_need_management,
        urgent_need_sales,
        status_remark
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      town || null,
      industry || null,
      contact_person || null,
      contact_phone || null,
      current_employees !== undefined && current_employees !== '' ? parseInt(current_employees) : null,
      current_month_new_recruits !== undefined && current_month_new_recruits !== '' ? parseInt(current_month_new_recruits) : null,
      urgent_need_general_workers !== undefined && urgent_need_general_workers !== '' ? parseInt(urgent_need_general_workers) : null,
      urgent_need_skilled_workers !== undefined && urgent_need_skilled_workers !== '' ? parseInt(urgent_need_skilled_workers) : null,
      urgent_need_management !== undefined && urgent_need_management !== '' ? parseInt(urgent_need_management) : null,
      urgent_need_sales !== undefined && urgent_need_sales !== '' ? parseInt(urgent_need_sales) : null,
      status_remark || null
    ];

    console.log('执行SQL查询:', query);
    console.log('参数值:', values);

    db.query(query, values, (err, result) => {
      if (err) {
        console.error('插入数据失败:', err);
        return res.status(500).json({
          code: 2,
          message: '保存数据失败: ' + err.message,
          error: err
        });
      }

      console.log('数据插入成功, ID:', result.insertId);
      return res.status(200).json({
        code: 0,
        message: '数据提交成功',
        data: {
          id: result.insertId
        }
      });
    });
  } catch (error) {
    console.error('处理请求时发生异常:', error);
    return res.status(500).json({
      code: 3,
      message: '服务器内部错误: ' + error.message,
      error: error.stack
    });
  }
});


// 读取SSL证书
const sslOptions = {
  key: fs.readFileSync(path.join('/Users/zizi/Documents/HBuilderProjects/weapp-hr-form/', 'ssl/server.key')),
  cert: fs.readFileSync(path.join('/Users/zizi/Documents/HBuilderProjects/weapp-hr-form/', 'ssl/server.cert'))
};

// 启动HTTPS服务器
const PORT = 3000;
const server = https.createServer(sslOptions, app);

server.listen(PORT, () => {
  console.log(`HTTPS服务器运行在 https://localhost:${PORT}`);
  console.log('请确保在微信开发者工具中关闭了域名和SSL校验');
});

// 处理未捕获的异常
process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的Promise拒绝:', reason);
});