const baseUrl = '/api';
const login = baseUrl + '/login'; //登录
const find = baseUrl + '/findManage'  //查询
const add = baseUrl + '/addManage'  //添加
const updateManage = baseUrl + '/updateManage'   //更新
const del = baseUrl + '/delManage'  //删除
const pass = baseUrl + '/changePassManage'
const banner = baseUrl + '/banner'
const addBanner = baseUrl + '/addBanner'//添加banner
const delBanner = baseUrl + '/delBanner'//删除banner
const addTeacherType = baseUrl + '/addTeacherType'//添加家教
const teacherType = baseUrl + '/teacherType'//获取
const delTeacherType = baseUrl + '/delTeacherType'//删除
const addTeacherBanner = baseUrl + '/addTeacherBanner'//添加家教
const teacherBanner = baseUrl + '/teacherBanner'//获取
const delTeacherBanner = baseUrl + '/delTeacherBanner'//删除
const addTeacherTop = baseUrl + '/addTeacherTop'//添加排行
const teacherTop = baseUrl + '/teacherTop'//获取
const delTeacherTop = baseUrl + '/delTeacherTop'//删除
const findWater = baseUrl + '/findWater'//获取水站
const updateWater = baseUrl + '/updateWater'//更新水站
const delWater = baseUrl + '/delWater'//删除水站
const addWater = baseUrl + '/addWater'//添加水站
const findComment = baseUrl + '/findComment'//获取水站评论
const delComment = baseUrl + '/delComment'//删除水站评论
const findRepair = baseUrl + '/findRepair'//获取维修
const updateRepair = baseUrl + '/updateRepair'//更新维修
const delRepair = baseUrl + '/delRepair'//删除维修
const addRepair = baseUrl + '/addRepair'//添加维修
const delRepairComment = baseUrl + '/delRepairComment'//删除维修
const findRepairComment = baseUrl + '/findRepairComment'//获取维修评论

const homeBanner = baseUrl + '/homeBanner'//获取轮播
const addHomeBanner = baseUrl + '/addHomeBanner'//添加轮播
const delHomeBanner = baseUrl + '/delHomeBanner'//删除维修

const findHomeWorker = baseUrl + '/findHomeWorker'//获取员工
const addHomeWorker = baseUrl + '/addHomeWorker'//添加员工
const delHomeWorker = baseUrl + '/delHomeWorker'//删除员工
const updateHomeWorker = baseUrl + '/updateHomeWorker'//删除员工
const changePassManage  = baseUrl + '/changePassManage '//删除员工
const exit  = baseUrl + '/exit '//删除员工
export default {
     login,
     find,
     add,
     updateManage,
     del,
     pass,
     banner,
     delBanner,
     addBanner,
     addTeacherType,
     teacherType,
     delTeacherType,
     delTeacherBanner,
     addTeacherBanner,
     teacherBanner,
     delTeacherTop,
     addTeacherTop,
     teacherTop,
     findWater,
     updateWater,
     delWater,
     addWater,
     findRepair,
     updateRepair,
     delRepair,
     addRepair,
     homeBanner,
     addHomeBanner,
     delHomeBanner,
     findHomeWorker,
     addHomeWorker,
     delHomeWorker,
     findComment,
     delComment,
     findRepairComment,
     delRepairComment,
     updateHomeWorker,
     changePassManage,
     exit,
}