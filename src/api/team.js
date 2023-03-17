import request from '@/utils/request';
import moment from 'moment';
export const reqGetDiariesByTeamName = async (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  const result = await request({
    url: '/auth/getDiariesByTeamName',
    method: 'post',
    data: param,
  });
  result.diaries = result.diaries.map((value) => ({
    ...value,
    Employed: moment(value.Employed).format('YYYY-MM-DD'),
  }));
  return result;
};
export const reqGetMembersByTeamName = async (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  const result = await request({
    url: '/auth/getMembersByTeamName',
    method: 'post',
    data: param,
  });
  result.members = result.members.map((value) => ({
    ...value,
    UpdatedAt: moment(value.UpdatedAt).format('YYYY-MM-DD'),
  }));
  return result;
};

export const reqGetArticlesByTeam = async (data) => {
  const result = await request({
    url: '/auth/getArticlesByTeam',
    method: 'post',
    data,
  });
  result.articles = result.articles.map((value) => ({
    ...value,
    CreatedAt: moment(value.CreatedAt).format('YYYY-MM-DD h:mm'),
  }));
  return result;
};

export const reqAddTeamDiary = (data) =>
  request({
    url: '/auth/addTeamDiary',
    method: 'post',
    data,
  });

export const reqAddTeamMemberByCode = (data) =>
  request({
    url: '/auth/addTeamMemberByCode',
    method: 'post',
    data,
  });

export const reqCreateTeam = (data) =>
  request({
    url: '/auth/createTeam',
    method: 'post',
    data,
  });
export const reqGetResources = (data) =>
  request({
    url: '/auth/getResources',
    method: 'post',
    data,
  });
