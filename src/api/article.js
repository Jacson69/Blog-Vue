import request from '@/utils/request';

export const reqGetArticlesByPage = (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  // const param = `PageSize=${data.PageSize}&PageNo=${data.PageNo}`;
  return request({
    url: '/auth/getArticlesByPage',
    method: 'post',
    data: param,
    // param: data,
  });
};

export const reqGetArticlesHot = (data) =>
  request({
    url: '/auth/getArticlesHot',
    method: 'post',
    data,
  });

export const reqGetUsersHot = (data) =>
  request({
    url: '/auth/getUsersHot',
    method: 'post',
    data,
  });

export const reqGetTeamsHot = (data) =>
  request({
    url: '/auth/getTeamsHot',
    method: 'post',
    data,
  });

export const reqSaveArticle = (data) =>
  request({
    url: '/auth/saveArticle',
    method: 'post',
    data,
  });
