import request from '@/utils/request'

export function getUsers() {
    return request({
        url: '/api/user',
        method: 'get',
    })
}

export function _login(data) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/api/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/api/user/logout',
        method: 'post'
    })
}

export function deleteUser(id){
    return request({
        url: `/api/user/${id}`,
        method: 'delete'
    })
}

export function updateUser(data){
    return request({
        url: `/api/user/${data._id}`,
        method: 'put',
        data
    })
}

export function addUser(data){
    return request({
        url: '/api/user',
        method: 'post',
        data
    })
}