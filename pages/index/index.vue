<template>
	<view class="container">
	  <view class="header">
		<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
		<view class="title-container">
		  <text class="title">企业用工信息收集</text>
		  <view class="subtitle-wrapper">
			<text class="subtitle">高效收集与管理企业用工需求</text>
		  </view>
		</view>
	  </view>
	  
	  <view class="content">
		<view class="card">
		  <view class="card-icon">
			<text class="icon-text">收</text>
		  </view>
		  <view class="card-content">
			<text class="card-title">全面的数据收集</text>
			<text class="card-desc">收集企业基本信息、员工情况和招聘需求等多维度数据</text>
		  </view>
		</view>
		
		<view class="card">
		  <view class="card-icon">
			<text class="icon-text">析</text>
		  </view>
		  <view class="card-content">
			<text class="card-title">精准的需求分析</text>
			<text class="card-desc">帮助企业清晰了解自身用工状况和招聘需求</text>
		  </view>
		</view>
		
		<view class="card">
		  <view class="card-icon">
			<text class="icon-text">报</text>
		  </view>
		  <view class="card-content">
			<text class="card-title">便捷的填报体验</text>
			<text class="card-desc">简洁直观的表单设计，随时随地轻松填报</text>
		  </view>
		</view>
	  </view>
	  
	  <view class="action-area">
		<button class="action-btn" @click="goToForm">
		  <text class="btn-text">开始填写</text>
		  <text class="btn-icon">→</text>
		</button>
	  </view>
	  
	  <view class="footer">
		<text class="footer-text">企业用工信息收集平台 © 2024</text>
	  </view>
	</view>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		title: '企业用工信息收集'
	  }
	},
	methods: {
	  goToForm() {
		uni.navigateTo({
		  url: '/pages/company-form/index'
		})
	  }
	}
  }
  </script>
  
  <style>
  page {
	background-color: #f5f7fa;
  }
  
  .container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 40rpx;
  }
  
  .header {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 60rpx;
	padding-top: 60rpx;
  }
  
  .logo {
	width: 180rpx;
	height: 180rpx;
	margin-bottom: 40rpx;
  }
  
  .title-container {
	text-align: center;
	width: 100%;
  }
  
  .title {
	font-size: 44rpx;
	font-weight: bold;
	color: #2C5697;
	margin-bottom: 24rpx;
	display: block;
	line-height: 1.3;
  }
  
  .subtitle-wrapper {
	padding: 0 30rpx;
	margin-bottom: 10rpx;
  }
  
  .subtitle {
	font-size: 28rpx;
	color: #666;
	line-height: 1.5;
  }
  
  .content {
	flex: 1;
	margin-bottom: 60rpx;
  }
  
  .card {
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 12rpx;
	padding: 30rpx;
	margin-bottom: 30rpx;
	box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  }
  
  .card-icon {
	width: 60rpx;
	height: 60rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8rpx;
	margin-right: 30rpx;
	flex-shrink: 0;
	background-color: #2C5697;
  }
  
  .icon-text {
	color: #fff;
	font-weight: bold;
	font-size: 28rpx;
  }
  
  .card-content {
	flex: 1;
  }
  
  .card-title {
	font-size: 32rpx;
	font-weight: bold;
	color: #333;
	margin-bottom: 10rpx;
	display: block;
  }
  
  .card-desc {
	font-size: 26rpx;
	color: #666;
	line-height: 1.5;
  }
  
  .action-area {
	margin-bottom: 60rpx;
  }
  
  .action-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100rpx;
	background-color: #2C5697;
	border-radius: 8rpx;
	box-shadow: 0 4rpx 10rpx rgba(44, 86, 151, 0.2);
  }
  
  .btn-text {
	font-size: 32rpx;
	font-weight: bold;
	color: #fff;
  }
  
  .btn-icon {
	font-size: 32rpx;
	color: #fff;
	margin-left: 10rpx;
  }
  
  .footer {
	text-align: center;
	padding: 30rpx 0;
  }
  
  .footer-text {
	font-size: 24rpx;
	color: #999;
  }
  </style>