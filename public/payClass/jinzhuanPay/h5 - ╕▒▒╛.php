<?php
/**
 * 扫码
 * http://120.77.255.230:8080/payType/haoPay/scan.php?uid=183&price=20&typeid=1&scanType=alipay&bid=160
 */
include 'phpqrcode.php';
include 'config.php';

$param = $Db->param();

// 商户号
$dataArray['partner'] = MERCHANTCODE;
// 支付金额
$dataArray['amount'] = $param['price'];
// 时间戳
$dataArray['request_time'] = time();
// 订单号
$param['orderNumber'] = 'C'.time();
$dataArray['trade_no'] = $param['orderNumber'].'U'.$param['uid'];
// 方式
$dataArray['pay_type'] = 'h5';
// 服务器异步通知地址
$dataArray['notify_url'] = NOTIFYURL;
// 签名
$dataArray['sign'] = sign_src($dataArray, MD5KEY);

//数据验证
$param['paytype'] = FOLDER.'-'.$dataArray['partner'];
$verifyRes = $Db->verifyScan($param);
if ($verifyRes != 'Y') $Db->ajaxReturn($verifyRes);

$res = $Db->curl_post('https://api.tfzf2.com/payCenter/aliPay2', $dataArray);
$resArray = json_decode($res, true);

if ($resArray['is_success'] != 'T') {
	$rdata['code'] = 5;
	$rdata['code_dec'] = $resArray['fail_msg'];
	$Db->ajaxReturn($rdata,'JSON',JSON_UNESCAPED_UNICODE);
}

// $TimeStr = preg_replace('/\.?/','',microtime(true));
// if(!file_exists('./img')) mkdir('./img');

// $pic = './img/'.$TimeStr.'.png';
// if(file_exists($pic)) unlink($pic);

// $qrcode = $resArray['qrCode'];
// QRcode::png ( $qrcode, $pic, 'L', 10, 2 );

header("Location:".$resArray['result']);

// $rdata['code'] = 0;
// $rdata['img_path'] = 'http://'.$_SERVER['HTTP_HOST'].'/payType/tudouPay'.ltrim($pic, '.');
// $Db->ajaxReturn($rdata);