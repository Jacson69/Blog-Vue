import request from '@/utils/request';
import moment from 'moment';

export const reqGetArticlesByPage = async (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  // const param = `PageSize=${data.PageSize}&PageNo=${data.PageNo}`;
  const result = await request({
    url: '/auth/getArticlesByPage',
    method: 'post',
    data: param,
    // param: data,
  });
  result.articles = result.articles.map((value) => ({
    ...value,
    CreatedAt: moment(value.CreatedAt).format('YYYY年MM月DD日 h:mm:ss'),
  }));
  return result;
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
