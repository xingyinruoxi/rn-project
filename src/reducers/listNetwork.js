import {LISTNETWORK} from './../contans'
const initState = {
    isLoading: true,
    data: []
};
export default function listNetwork(state = initState, action) {
    let {type, payload} = action;
    switch (type) {
        case LISTNETWORK:
            return {
                ...initState,
                isLoading: true
            };
        case LISTNETWORK + '_SUCCESS':
            return {
                ...initState,
                data: payload.data,
                isLoading: false
            };
        case LISTNETWORK + '_FAIL':
            return {
                info: '获取网点列表失败'
            };
        default:
            return state
    }
}