<?php
namespace app\api\model;

use think\Model;

class YuebaoModel extends Model{
	//表名
	protected $table = 'ly_yuebao_list';

	/**
	 * [getNotice 获取列表]
	 * @return [type] [description]
	 */
	public function getYuebaoList(){
		//每页显示记录
		$pageSize	= input('post.page_size/d');
		$pageSize	= (empty($pageSize)) ? 10 : $pageSize;
		
		//当前的页号
		$pageNo		= input('post.page_no/d');
		$pageNo		= (empty($pageNo)) ? 1 : $pageNo;
		
		//总页数
		$yuebaoList	= $this->select();	// 获取活动列表
		
		$yuebaoList	= $yuebaoList->toArray();			// 转换为数组
		
		$yuebaoNum	= count($yuebaoList);				// 统计活动数量
		
		$pageTotal		= ceil($yuebaoNum / $pageSize);	//当前页数大于最后页数，取最后	
		
		$limitOffset	= ($pageNo - 1) * $pageSize;		// 偏移量
		
		// 分页读取
		$yuebaoData	= $this->order('id','DESC')
							->limit($limitOffset, $pageSize)
							->select()->toArray();
		
		$data['code'] 				= 1;
		$data['data_total_nums'] 	= $yuebaoNum;
		$data['data_total_page'] 	= $pageTotal;
		$data['data_current_page'] 	= $pageNo;		
		foreach ($yuebaoData as $key => $value) {
			$activityData[$key]['id']    	= $value['id'];
			$activityData[$key]['title']    = $value['title'];			// 活动标题
			$activityData[$key]['lilv']		= $value['lilv'];			// 活动简述
			$activityData[$key]['time']	= $value['time'];	// 活动封面图
		}
		
		$data['info'] = $yuebaoData;
		
		return $data;
	}
	
	
	/**
	 * [getNotice 获取用户活动记录列表]
	 * @return [type] [description]
	 */
	public function getUserActivityList(){
		$token		=	input('post.token/s');
		$userArr	=	explode(',',auth_code($token,'DECODE'));
		$uid		=	$userArr[0];
		$username	=	$userArr[1];
		
		$is_user	= model('Users')->where(['id'=>$uid,'username'=>$username])->count();
		if(!$is_user){
			$data	= [
				'code'		=> 0,
				'code_dec'	=> '用户不存在'
			];
			return $data;
		}
		
		//每页显示记录
		$pageSize	= input('post.page_size/d');
		$pageSize	= (empty($pageSize)) ? 10 : $pageSize;
		
		//当前的页号
		$pageNo		= input('post.page_no/d');
		$pageNo		= (empty($pageNo)) ? 1 : $pageNo;
		
		//总记录数量
		$activityList	= model('UserActivity')->where(['uid'=>$uid,'state'=>1])->select();	// 获取用户未领取的活动列表
		
		if(!$activityList){
			$data	= [
				'code'		=> 0,
				'code_dec'	=> '用户无活动记录'
			];
			return $data;
		}		
		$activityList	= $activityList->toArray();			// 转换为数组
		
		$activityNum	= count($activityList);				// 统计活动数量
		
		$pageTotal		= ceil($activityNum / $pageSize);	//当前页数大于最后页数，取最后	
		
		$limitOffset	= ($pageNo - 1) * $pageSize;		// 偏移量
		
		// 分页读取
		$activityData	= model('UserActivity')->where(['uid'=>$uid,'state'=>1])	// 未领取的活动
							->order('date','DESC')									// 按日期降序排列
							->limit($limitOffset, $pageSize)
							->select()->toArray();
		
		if(!$activityData){
			$data	= [
				'code'		=> 0,
				'code_dec'	=> '用户无活动记录'
			];
			return $data;
		}
		
		$data['code'] 				= 1;
		$data['data_total_nums'] 	= $activityNum;
		$data['data_total_page'] 	= $pageTotal;
		$data['data_current_page'] 	= $pageNo;
		foreach ($activityData as $key => $value) {
			$activityData[$key]['id']    	= $value['id'];
			$activityData[$key]['date']		= date('Y-m-d H:i:s',$value['date']);
			$activityData[$key]['orderNum']	= $value['order_number'];
			$activityData[$key]['betTotal']	= $value['bet_total'];
			$activityData[$key]['rebate']	= $value['rebate'];
			$activityData[$key]['price']	= $value['price'];
		}
		
		$data['info'] = $activityData;
		
		return $data;
	}

}