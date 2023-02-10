import request from '@/utils/request';

export const reqGetArticlesByPage = (data) =>
  request({
    url: '/auth/getArticlesByPage',
    method: 'post',
    data,
    // param: data,
  });

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
