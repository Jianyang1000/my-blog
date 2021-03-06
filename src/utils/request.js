import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store/index'
import { getToken } from '@/utils/auth'
import router from '@/router'


// create an axios instance
const service = axios.create({
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['authorization'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        // res.code !== 20000 && res.key !== ''  用来判断是否是在markdown中上传图片
        // if the custom code is 20000, it is judged as an success.
        if (res.code === 20000 || (res.code !== 20000 && res.key !== undefined)) {
            return res
        }
        else {
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                MessageBox.confirm('登陆失效，请重新登陆', '登陆失效', {
                    confirmButtonText: '重新登陆',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        router.replace({path:'/login'})
                    })
                })
            }
            return Promise.reject(res.message || 'Error')
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
