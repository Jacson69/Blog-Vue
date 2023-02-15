// API进行统一管理
// import requests from "./request";
import requests from '@/utils/request';
// 三级联动的接口
// 如 /api/product/getBaseCategoryList  get 无参数
// 发请求：axios发请求结果返回Promise对象
export function reqCategoryList() {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
}

// export const reqLogin = (data) => requests({
//     url: '/auth/login',
//     method: 'post',
//     data: data,
// })

// export const reqGetArticlesByPage = (data) =>
//   requests({
//     url: '/auth/getArticlesByPage',
//     method: 'post',
//     data,
//   });

export const reqGetArticlesInfo = () =>
  requests({
    url: '/auth/getArticlesInfo',
    method: 'get',
  });

export const reqRegister = (data) =>
  requests({
    url: '/auth/register',
    method: 'post',
    data,
  });

export const reqAddTeamDiary = (data) =>
  requests({
    url: '/auth/addTeamDiary',
    method: 'post',
    data,
  });

export const reqAddTeamMemberByCode = (data) =>
  requests({
    url: '/auth/addTeamMemberByCode',
    method: 'post',
    data,
  });

export const reqGetDiariesByTeamName = (data) =>
  requests({
    url: '/auth/getDiariesByTeamName',
    method: 'post',
    data,
  });
export const reqGetResources = (data) =>
  requests({
    url: '/auth/getResources',
    method: 'post',
    data,
  });

export const reqGetMembersByTeamName = (data) =>
  requests({
    url: '/auth/getMembersByTeamName',
    method: 'post',
    data,
  });

export const reqCreateTeam = (data) =>
  requests({
    url: '/auth/createTeam',
    method: 'post',
    data,
  });

// export const reqEditUserInfo = (data) =>
//   requests({
//     url: '/auth/editUserInfo',
//     method: 'post',
//     data,
//   });

// export const reqInfo = () =>
//   requests({
//     url: '/auth/info',
//     method: 'get',
//   });

// export const reqSaveArticle = (data) =>
//   requests({
//     url: '/auth/saveArticle',
//     method: 'post',
//     data,
//   });

export const reqSavaResource = (data) =>
  requests({
    url: '/auth/savaResource',
    method: 'post',
    data,
  });

export const reqUpdateArticles = (data) =>
  requests({
    url: '/auth/updateArticles',
    method: 'post',
    data,
  });

export const reqSaveFile = (data) =>
  requests({
    url: '/auth/saveFile',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
