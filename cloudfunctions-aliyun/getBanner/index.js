'use strict';
// exports.main = async (event, context) => {
// 	//event为客户端上传的参数
// 	console.log('event : ', event)
	
// 	//返回数据给客户端
// 	return event
// };
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let db = uniCloud.database();
	let res = await db.collection("banner").get()
	console.log('res-banner',res)
	//返回数据给客户端
	return {
		data:res.data
	}
};