import request from '@/utils/request';

export const reqLogin = (data) =>
  request({
    url: '/auth/login',
    method: 'post',
    data,
  });

export const reqRegister = (data) =>
  request({
    url: '/auth/register',
    method: 'post',
    data,
  });
