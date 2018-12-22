import {LISTMACHINE} from './../contans'

const initState = {
    isLoading: true,
    data: []
};
export default function listMachine(state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case LISTMACHINE:
            return {
                ...initState,
                isLoading: true
            };
        case LISTMACHINE + '_SUCCESS':
            return {
                ...initState,
                data: payload.data,
                isLoading: false
            };
        case LISTMACHINE + '_FAIL':
            return {
                info: '获取机器列表失败'
            };
        default:
            return state
    }
}