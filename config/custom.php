<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 自定义公共配置
// +----------------------------------------------------------------------

return [
	// +----------------------------------------------------------------------
	// | 公用
	// +----------------------------------------------------------------------

	// 账户状态
	'userState'	=>	[
		'全部',		// 0
		'正常',		// 1
		'锁定',		// 2
		'冻结',		// 3
		'踢下线',	// 4
	],

	// 账户会员状态
	'userVipState'	=>	[
		'全部',		// 0
		'正常',		// 1
		'锁定',		// 2
		'过期',		// 3
	],

	'lang'=>[
		'cn'=>'简体中文',
		'en'=>'英文',
		'ft'=>'繁体中文',
		'ja'=>'日语',
		'id'=>'印尼语',
		'vi'=>'越南语',
		'es'=>'西班牙语',
		'th'=>'泰语',
	],

	'taskType' => ['所有','供应信息','需求信息'],

	// 任务分类
	'taskClass' => [
		'所有',
		'砍价专区',
		'转发专区',
		'点赞专区',
		'下载专区',
		'关注专区',
		'评论专区',
		'投票',
		'注册',
		'调查问卷',
		'辅助相关',
	],

	// 任务状态
	'taskStatus' => [
		'所有',
		'审核中',//1
		'未通过',//2
		'进行中',//3
		'已完成',//4
		'已撤销',//5
	],

	// 任务状态
	'entaskStatus' => [
		'All',
		'Reviewing',
		'Fail',
		'Ongoing',
		'Completed',
		'Abandoned',
	],

	// 任务订单状态
	'cntaskOrderStatus' => [
		'所有',
		'进行中',//1
		'审核中',//2
		'已完成',//3
		'已失败',//4
		'恶意',//5
		'已放弃',//6
	],
	// 任务订单状态
	'entaskOrderStatus' => [
		'All',
		'Ongoing',
		'Reviewing',
		'Completed',
		'Failed',
		'Malice',
	],

	// +----------------------------------------------------------------------
	// | 状态、类型
	// +----------------------------------------------------------------------

	// 订单状态
	'orderStates'	=>	[
		'全部',	 // 0
		'已创建',	// 1
		'已支付',	// 2
		'已完成',	// 3
		'已关闭',	// 4
		'已过期',	// 5
		'已锁定',	// 6
		'待支付',	// 7
		'已失败',	// 8
	],

	// 交易类型
	'transactionType'	=>	[
		'全部',	 //0
		'用户充值',	//1 recharge
		'用户提现',	//2 withdrawal
		'发布任务',	//3 task
		'平台抽水',	//4 pump
		'下级返点',	//5 rebate
		'Hoàn thành nhiệm vụ',	//6 commission
		'注册奖励',	//7 regment
		'推广奖励',	//8 spread
		'购买会员',	//9 buymembers
		'撤销任务',	//10 revoke
		'转账转出',	//11 transfer_c
		'转账转入',	//12 transfer_r
		'其他',	 	//13 其他
		'发放红包',	//14
		'领取红包',	//15
	],

	// 交易类型代号
	'userTotal' => [
		'',
		'total_recharge',
		'total_withdrawals',
		'balance_investment',
		'total_fee',
		'total_rebate',
		'total_commission',
	],

	// 前端显示交易类型
	'front_type'	=>	[
		'全部',	// 0
		'转入',	//1
		'转出',	//2
		'冻结',	//3
		'解冻',	//4
	],

	//充值状态
	'rechargeStatus'	=>	[
		'全部',			// 0
		'Chi tiết',		// 1
		'失败',		// 2
		'待付款',		// 3
		'已关闭',		// 4
		'匹配中',		// 5
		'已取消',		// 6
	],

	//买卖状态
	'transactionStatus'	=>	[
		'全部',			// 0
		'已完成',		// 1
		'已付款',		// 2
		'待付款',		// 3
		'已关闭',		// 4
		'匹配中',		// 5
		'已取消',		// 6
	],

	// 流水状态
	'tradedetailsStatus' =>[
		'全部',		// 0
		'成功',		// 1
		'失败',		// 2
		'审核中',	// 3
	],

	//提现状态
	'withdrawalsState' => [
		'全部',			// 0
		'已支付',		// 1
		'拒绝支付',		// 2
		'未支付',		// 3
		'银行处理中',	// 4
		'失败'	,		// 5
		'出款成功',		// 6 第三方自动出款
	],

	//支付类型
	'payway' => [
		''					=>	'',
		'AliPay'			=> '支付宝',
		'WechatPay'			=> '微信',
		'BankPay'			=> '银联',
		'WechatPayFixed'	=> '固定微信',
		'AliPayFixed'		=> '固定支付宝',

	],

	// 充值渠道类型
	'rechargeType' => [
		'online'      => '在线网银',
		'scan'        => '扫码',
		'quick'       => '快捷',
		'wap'         => 'WAP',
		'turn'        => '网银转账',
		'turn_alipay' => '支付宝转账',
		'turn_wx'     => '微信转账',
		'alipay_scan' => '支付宝扫码',
		'wechat_scan' => '微信扫码',
		'qpay_scan'   => 'QQ钱包扫码',
	],

	// +----------------------------------------------------------------------
	// | 用户
	// +----------------------------------------------------------------------

	//账户类型
	'userType'	=>	[
		'全部',	// 0
		'代理',	// 1
		'会员',	// 2
		'测试',	// 3
		'推广',	// 4
	],

	//账户级别
	'vipLevel'	=>	[
		'全部',	// 0
		'顶级',	// 1
		'主管',	// 2
		'招商',	// 3
		'直属',	// 4
		'代理',	// 5
		'会员',	// 6
	],

	// +----------------------------------------------------------------------
	// | 商户
	// +----------------------------------------------------------------------

	// 商户资质状态
	'merchantType' => [
		'全部',
		'代理商户',
		'基本商户',
	],

	// 商户资质状态
	'merchantVerify' => [
		'全部',
		'正常',
		'审核中',
		'未认证',
		'审核失败',
	],

	// +----------------------------------------------------------------------
	// | 其他
	// +----------------------------------------------------------------------

	// 会员支付方式返点
	'paywayrebate' => [
		'AliPay'    => 1.3,	// 支付宝
		'WechatPay' => 0.9,	// 微信
	],
	//商户支付方式手续费
	'mpaywayrebate' => [
		'AliPay'    => 1.3,	// 支付宝
		'WechatPay' => 0.9,	// 微信
	],
	//用户额度配置
	'userbalance' => [
		'limit_balance'      =>	1000.00,//接单最小金额
		'activation_balance' =>	200.00,//激活最小金额
		'min_recharge'       =>	3000.00,//最小充值金额
		'max_recharge'       =>	20000.00,//最大充值金额
		'recharge_fee'       =>	0.1,//充值费率
		'min_selling'        =>	900.00,//最小卖币
		'max_selling'        =>	10000.00,//最大卖币
		'selling_fee'        =>	0.5,//卖币费率
		'min_withdrawal'     =>	200.00,//最小提现金额
		'max_withdrawal'     =>	20000.00,//最大提现金额
		'withdrawal_fee'     =>	0.1,//提现费率
	],
];
