import request from '@/utils/request';

export const reqGetArticlesByPage = (data) =>
  request({
    url: '/auth/getArticlesByPage',
    method: 'post',
    // data,
    param: data,
  });
