<template>
  <view class="form-container">
    <view class="form-header">
      <text class="form-title">企业用工信息收集表</text>
      <view class="subtitle-wrapper">
        <text class="form-subtitle">请填写以下信息，帮助我们更好地了解您的用工需求</text>
      </view>
    </view>
    
    <form @submit="submitForm">
      <!-- 基本信息 -->
      <view class="form-section">
        <view class="section-header">
          <view class="section-icon section-icon-basic">
            <text class="icon-text">基</text>
          </view>
          <view class="section-title">基本信息</view>
        </view>
        
        <view class="form-item">
          <text class="form-label">企业名称</text>
          <input class="form-input" name="companyName" placeholder="请输入企业名称" />
        </view>
        
        <view class="form-item">
          <text class="form-label">所在乡镇</text>
          <input class="form-input" name="town" placeholder="请输入所在乡镇" />
        </view>
        
        <view class="form-item">
          <text class="form-label">所属行业</text>
          <picker @change="bindIndustryChange" :value="industryIndex" :range="industries" name="industry">
            <view class="picker-input">
              <text>{{ industries[industryIndex] || '请选择所属行业' }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>
        
        <view class="form-item">
          <text class="form-label">联系人</text>
          <input class="form-input" name="contactPerson" placeholder="请输入联系人姓名" />
        </view>
        
        <view class="form-item">
          <text class="form-label">联系电话</text>
          <input class="form-input" name="contactPhone" placeholder="请输入联系电话" />
        </view>
      </view>
      
      <!-- 员工情况 -->
      <view class="form-section">
        <view class="section-header">
          <view class="section-icon section-icon-employee">
            <text class="icon-text">员</text>
          </view>
          <view class="section-title">员工情况</view>
        </view>
        
        <view class="form-grid">
          <view class="form-item grid-item">
            <text class="form-label">现有员工数</text>
            <input class="form-input" type="number" name="currentEmployees" placeholder="请输入" />
          </view>
          
          <view class="form-item grid-item">
            <text class="form-label">上月员工数</text>
            <input class="form-input" type="number" name="lastMonthEmployees" placeholder="请输入" />
          </view>
        </view>
        
        <view class="form-grid">
          <view class="form-item grid-item">
            <text class="form-label">1-10月新招人数</text>
            <input class="form-input" type="number" name="newHiredJanToOct" placeholder="请输入" />
          </view>
          
          <view class="form-item grid-item">
            <text class="form-label">本月新招人数</text>
            <input class="form-input" type="number" name="newHiredThisMonth" placeholder="请输入" />
          </view>
        </view>
        
        <view class="form-grid">
          <view class="form-item grid-item">
            <text class="form-label">1-10月流失人数</text>
            <input class="form-input" type="number" name="lostJanToOct" placeholder="请输入" />
          </view>
          
          <view class="form-item grid-item">
            <text class="form-label">本月流失人数</text>
            <input class="form-input" type="number" name="lostThisMonth" placeholder="请输入" />
          </view>
        </view>
      </view>
      
      <!-- 招聘需求 -->
      <view class="form-section">
        <view class="section-header">
          <view class="section-icon section-icon-recruit">
            <text class="icon-text">招</text>
          </view>
          <view class="section-title">招聘需求</view>
        </view>
        
        <view class="form-grid">
          <view class="form-item grid-item">
            <text class="form-label">计划招聘人数</text>
            <input class="form-input" type="number" name="plannedHiring" placeholder="请输入" />
          </view>
          
          <view class="form-item grid-item">
            <text class="form-label">收到简历数</text>
            <input class="form-input" type="number" name="resumesReceived" placeholder="请输入" />
          </view>
        </view>
        
        <view class="form-item">
          <text class="form-label">现急缺员工人数</text>
          <input class="form-input" type="number" name="urgentNeeded" placeholder="请输入现急缺员工人数" />
        </view>
        
        <view class="position-needs">
          <text class="position-title">岗位需求明细</text>
          
          <view class="form-grid">
            <view class="form-item grid-item">
              <text class="form-label">普工</text>
              <input class="form-input" type="number" name="generalWorkers" placeholder="请输入" />
            </view>
            
            <view class="form-item grid-item">
              <text class="form-label">技工</text>
              <input class="form-input" type="number" name="skilledWorkers" placeholder="请输入" />
            </view>
          </view>
          
          <view class="form-grid">
            <view class="form-item grid-item">
              <text class="form-label">管理岗位</text>
              <input class="form-input" type="number" name="management" placeholder="请输入" />
            </view>
            
            <view class="form-item grid-item">
              <text class="form-label">销售岗位</text>
              <input class="form-input" type="number" name="sales" placeholder="请输入" />
            </view>
          </view>
        </view>
        
        <view class="form-item switch-item">
          <text class="form-label">是否开通VIP服务</text>
          <switch name="isVIP" @change="switchVIPChange" :checked="isVIP" color="#2C5697" />
        </view>
        
        <view class="form-item">
          <text class="form-label">备注</text>
          <textarea class="form-textarea" name="remarks" placeholder="请输入备注信息"></textarea>
        </view>
      </view>
      
      <view class="form-actions">
        <button class="reset-btn" @click="resetForm">重置</button>
        <button class="submit-btn" type="primary" form-type="submit">提交</button>
      </view>
      
      <view class="form-footer">
        <text class="footer-text">本表单由政府人力资源部门提供</text>
        <text class="footer-text">数据仅用于政府决策参考，严格保密</text>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      industries: ['装备制造', '生物医药化工', '纺织服装', '电子信息', '食品加工', '其他'],
      industryIndex: 0,
      isVIP: false
    }
  },
  methods: {
    bindIndustryChange(e) {
      this.industryIndex = e.detail.value
    },
    switchVIPChange(e) {
      this.isVIP = e.detail.value
    },
    submitForm(e) {
      const formData = e.detail.value
      console.log('表单数据：', formData)
      
      // 表单验证
      if (!formData.companyName) {
        uni.showToast({
          title: '请输入企业名称',
          icon: 'none'
        })
        return
      }
      
      // 提交表单数据
      uni.showLoading({
        title: '提交中...'
      })
      
      // 这里可以添加提交表单数据到服务器的逻辑
      setTimeout(() => {
        uni.hideLoading()
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        })
        
        // 提交成功后重置表单
        this.resetForm()
      }, 1500)
    },
    resetForm() {
      this.industryIndex = 0
      this.isVIP = false
      
      // 重置表单
      uni.showToast({
        title: '表单已重置',
        icon: 'none'
      })
    }
  }
}
</script>

<style>
page {
  background-color: #f5f7fa;
}

.form-container {
  padding: 30rpx;
}

.form-header {
  text-align: center;
  margin-bottom: 50rpx;
  padding: 40rpx 0;
}

.form-title {
  font-size: 40rpx;
  font-weight: bold;
  color: #2C5697;
  margin-bottom: 24rpx;
  display: block;
  line-height: 1.3;
}

.subtitle-wrapper {
  padding: 0 40rpx;
}

.form-subtitle {
  font-size: 26rpx;
  color: #666;
  line-height: 1.6;
}

.form-section {
  margin-bottom: 40rpx;
  background-color: #fff;
  border-radius: 12rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  border-left: 4rpx solid #2C5697;
}

.form-section:nth-child(1) {
  border-left-color: #2C5697;
}

.form-section:nth-child(2) {
  border-left-color: #3A7CA5;
}

.form-section:nth-child(3) {
  border-left-color: #16697A;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  border-bottom: 1px solid #eaedf2;
  padding-bottom: 16rpx;
}

.section-icon {
  width: 50rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8rpx;
  margin-right: 16rpx;
  font-size: 28rpx;
}

.icon-text {
  color: #fff;
  font-weight: bold;
}

.section-icon-basic {
  background-color: #2C5697;
}

.section-icon-employee {
  background-color: #3A7CA5;
}

.section-icon-recruit {
  background-color: #16697A;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  position: relative;
}

.form-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rpx;
}

.grid-item {
  width: 48%;
}

.form-item {
  margin-bottom: 30rpx;
}

.form-label {
  display: block;
  font-size: 28rpx;
  color: #333;
  margin-bottom: 12rpx;
  font-weight: 500;
}

.form-input, .picker-input {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  border: 1px solid #dce0e6;
  border-radius: 8rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 28rpx;
  color: #333;
  transition: all 0.3s;
}

.form-input:focus, .picker-input:active {
  border-color: #2C5697;
  box-shadow: 0 0 0 2px rgba(44, 86, 151, 0.1);
}

.picker-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.picker-arrow {
  font-size: 24rpx;
  color: #999;
}

.form-textarea {
  width: 100%;
  height: 200rpx;
  border: 1px solid #dce0e6;
  border-radius: 8rpx;
  padding: 20rpx;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 28rpx;
  color: #333;
}

.position-needs {
  margin-top: 30rpx;
  margin-bottom: 30rpx;
  padding-top: 20rpx;
  border-top: 1px solid #eaedf2;
}

.position-title {
  display: block;
  font-size: 28rpx;
  color: #666;
  margin-bottom: 20rpx;
  font-weight: 500;
}

.switch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 60rpx;
  padding: 0 40rpx;
}

.submit-btn, .reset-btn {
  width: 45%;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 8rpx;
  font-size: 32rpx;
  font-weight: 500;
}

.submit-btn {
  background-color: #2C5697;
}

.reset-btn {
  background-color: #f5f7fa;
  color: #666;
  border: 1px solid #dce0e6;
}

.form-footer {
  text-align: center;
  margin-top: 60rpx;
  padding-bottom: 100rpx;
}

.footer-text {
  font-size: 24rpx;
  color: #999;
  display: block;
  line-height: 1.8;
}
</style> 