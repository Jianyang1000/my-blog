import request from '@/utils/request'

export function getTag() {
    return request({
        url: '/api/tag',
        method: 'get',
    })
}

export function getCategory(){
    return request({
        url: '/api/category',
        method: 'get'
    })
}

export function addTag(data){
    return request({
        url: '/api/tag',
        method: 'post',
        data
    })
}

export function addCategory(data){
    return request({
        url: '/api/category',
        method: 'post',
        data
    })
}

export function deleteTag(id){
    return request({
        url: `/api/tag/${id}`,
        method: 'delete'
    })
}

export function deleteCategory(id){
    return request({
        url: `/api/category/${id}`,
        method: 'delete'
    })
}

export function updateTag(data){
    return request({
        url: `api/tag/${data._id}`,
        method: 'put',
        data: data
    })
}

export function updateCategory(data){
    return request({
        url: `api/category/${data._id}`,
        method: 'put',
        data: data
    })
}

export function getTagCount(){
    return request({
        url:'/api/dashboard/tag_count',
        method: 'get'
    })
}

export function getCategoryCount(){
    return request({
        url:'/api/dashboard/category_count',
        method: 'get'
    })
}