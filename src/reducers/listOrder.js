import {LISTORDER} from './../contans'
const initState = {
    data: {}
};
export default function listOrder(state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case LISTORDER:
            return {
                ...initState,
            };
        case LISTORDER + '_SUCCESS':
            return {
                ...initState,
                data: payload.data,
            };
        case LISTORDER + '_FAIL':
            return {
                info: '获取订单列表失败'
            };
        default:
            return state
    }
}