import request from '@/utils/request'

export function getLatestArticle() {
    return request({
        url: '/api/dashboard',
        method: 'get',
    })
}



export function getManageArticleList() {
    return request({
        url: '/api/manage_article',
        method: 'get'
    })
}

export function getCardCount(){
    return request({
        url: '/api/dashboard/card_count',
        method: 'get'
    })
}



export function getDeleteArticleList() {
    return request({
        url: '/api/delete_article',
        method: 'get'
    })
}

export function getArticleCount(){
    return request({
        url:'/api/dashboard/article_count',
        method: 'get'
    })
}

export function getDeleteCount(){
    return request({
        url:'/api/dashboard/delete_count',
        method: 'get'
    })
}