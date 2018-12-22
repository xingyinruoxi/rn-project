import {LOGIN} from './../contans'

export default function userInfo(state = {}, action) {
    let {type, payload} = action;
    switch (type) {
        case LOGIN + '_SUCCESS':
            return payload.data;
        case LOGIN + '_FAIL':
            return {
                info: '登录失败'
            }
        default:
            return state
    }
}