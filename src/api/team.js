import request from '@/utils/request';

export const reqGetDiariesByTeamName = (data) =>
  request({
    url: '/auth/getDiariesByTeamName',
    method: 'post',
    data,
  });

export const reqGetMembersByTeamName = (data) =>
  request({
    url: '/auth/getMembersByTeamName',
    method: 'post',
    data,
  });

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
