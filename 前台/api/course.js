import request from '@/utils/request'
export default {
  getCourseList(current,limit,catagoryid,conditions) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${current}/${limit}/${catagoryid}`,
      method: 'post',
      data: conditions
    })
  },
  // 查询所有分类
  getAllSubject(){
    return request({
      url: `/eduservice/edu-subject/getAll`,
      method: 'get',
    })
  },
  getCourseInfo(id){
    return request({
      url:`/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method:'get',
    })
  }
}
