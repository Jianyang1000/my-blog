import request from '@/utils/request'

export function getQiniuToken() {
    return request({
        url: '/api/qiniu_token',
        method: 'get',
    })
}
