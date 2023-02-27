import request from '../utils/request.js';

export function loginApi(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    data,
  });
}

export function getUserList(params) {
  console.log('232333333');

  return request({
    method: 'GET',
    url: '/sys/user',
    params,
  });
}

export function delEmployeesApi(id) {
  return request({
    method: 'DELETE',
    url: `/sys/user/${id}`
  })
}

/** *
 *
 * 保存员工的基本信息
 * **/
export function saveUserDetailById(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}

export function updateAvatar(file) {
  return request({
    url: '/upload',
    method: 'post',
    data: file
  })
}
