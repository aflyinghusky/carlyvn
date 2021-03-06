<?php
namespace app\admin\controller;

use app\admin\controller\Common;

class EverydayController extends CommonController{
	/**
	 * 空操作处理
	 */
	public function _empty(){
		return $this->index();
	}
	/**
	 * 订单明细
	 * @return [type] [description]
	 */
	public function index(){
		$data = model('MerchantDaily')->everyday();

		return view('', [
			'data' => $data,
		]);
	}
}