import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import queryString from 'querystringify'
import Loading from './../component/loading'
const client = axios.create({
    // baseURL: 'https://api.douban.com/v2',
    baseURL: 'http://10.10.3.55:8080/jxtech-app',
    timeout:4000,
    method: 'POST',
    responseType: 'json',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    transformRequest: [function (data) {
        console.log('发送请求',data)
        // loading(true);
        return queryString.stringify(data);
    }],
    transformResponse: [function (data) {
        // console.log('请求成功',data)
        // 对 data 进行任意转换处理
        // data.aa=true;
        setTimeout(()=>{
            // loading(false);

        },4000);
        return data;

    }]
});
export default axiosMiddleware(client)