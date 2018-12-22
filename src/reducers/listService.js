import {LISTSERVICE} from './../contans'
const initState = {
    data: []
};
export default function listService(state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case LISTSERVICE:
            return {
                ...initState,
            };
        case LISTSERVICE + '_SUCCESS':
            return {
                ...initState,
                data: payload.data,
            };
        case LISTSERVICE + '_FAIL':
            return {
                info: '获取维修服务列表失败'
            };
        default:
            return state
    }
}