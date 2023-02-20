import request from '@/utils/request';

export const reqGetDiariesByTeamName = (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  return request({
    url: '/auth/getDiariesByTeamName',
    method: 'post',
    data: param,
  });
};
export const reqGetMembersByTeamName = (data) => {
  const param = new URLSearchParams();
  param.append('PageSize', data.PageSize);
  param.append('PageNo', data.PageNo);
  return request({
    url: '/auth/getMembersByTeamName',
    method: 'post',
    data,
  });
};

export const reqGetArticlesByTeam = (data) =>
  request({
    url: '/auth/getArticlesByTeam',
    method: 'post',
    data,
  });

export const reqAddTeamDiary = (data) =>
  request({
    url: '/auth/addTeamDiary',
    method: 'post',
    data,
  });
