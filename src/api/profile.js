import request from '@/utils/request';
import moment from 'moment';
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

export const reqGetArticlesByUser = async (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  const result = await request({
    url: '/auth/getArticlesByUser',
    method: 'post',
    data: param,
  });
  result.articles = result.articles.map((value) => ({
    ...value,
    CreatedAt: moment(value.CreatedAt).format('YYYY-MM-DD h:mm'),
  }));
  return result;
};
