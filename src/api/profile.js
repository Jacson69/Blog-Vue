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
