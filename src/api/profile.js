import request from '@/utils/request';

export const reqInfo = () =>
  request({
    url: '/auth/info',
    method: 'get',
  });

export const reqEditUserInfo = (data) =>
  request({
    url: '/auth/editUserInfo',
    method: 'post',
    data,
  });

export const reqGetArticlesByUser = (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  return request({
    url: '/auth/getArticlesByUser',
    method: 'post',
    data: param,
  });
};
