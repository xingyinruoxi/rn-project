/*
let opts = {
    method:"POST",
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
};
fetch('http://10.10.3.55:8080/jxtech-app/f/app/goods/list',opts)
    .then((response) => response.json())
    .then((res) => {
        console.log(888,res)

        //return responseJson.movies;
    })
    .catch((error) => {
        console.error(error);
    });
*/

let common_url = 'http://10.10.3.55:8080';  //服务器地址
// let token = '';
/**
 * @param {string} url 接口地址
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function fetchRequest(url, params = '') {
    let header = {
        // "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        // "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    // console.log('request url:',url,params);  //打印请求参数
    if (params === '') {   //如果网络请求中没有参数
        return new Promise(function (resolve, reject) {
            fetch(common_url+'/jxtech-app/' + url, {
                method: 'POST',
                headers: header
            }).then((response) => response.json())
                .then((responseData) => {
                    // console.log('请求成功(没参数):', url, responseData);  //网络请求成功返回的数据
                    resolve(responseData);

                })
                .catch((err) => {
                    // console.log('请求失败(没参数):', url, err);     //网络请求失败返回的数据
                    reject(err);
                });
        });
    } else {   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            fetch(common_url + url, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('请求成功(有参数):', url, responseData);   //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('请求错误(有参数):', url, err);   //网络请求失败返回的数据
                    reject(err);
                });
        });
    }
}




/*
fetchRequest('f/app/goods/list').then(res=>{
    console.log('====',res);
}).catch(err=>{
    console.log('++++',err)
})
*/
