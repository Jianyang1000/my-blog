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

/*
*   获取垃圾箱文章数量
* */
export function getDeleteCount(){
    return request({
        url:'/api/dashboard/delete_count',
        method: 'get'
    })
}

/*
* 发布文章
* */

export function publishArticle(data){
    return request({
        url: '/api/publish_article',
        method: 'post',
        data: data
    })
}

/*
* 删除文章
* */

export function deleteArticle(id){
    return request({
        url: `/api/delete_article/${id}`,
        method: 'get'
    })
}

/*
* 获得文章详细信息
* */

export function articleDetail(id) {
    return request({
        url: `/api/article_detail/${id}`,
        method: 'get'
    })
}