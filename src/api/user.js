import requests from "@/utils/request";


export const reqLogin = (data) => requests({
    url: '/auth/login',
    method: 'post',
    data: data,
})

export const reqRegister = (data) => requests({
    url: '/auth/register',
    method: 'post',
    data: data,
})