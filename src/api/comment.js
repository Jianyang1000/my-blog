import request from '@/utils/request'

export function getCommentCount(){
    return request({
        url:'/api/dashboard/comment_count',
        method: 'get'
    })
}