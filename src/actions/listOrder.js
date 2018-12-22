import {LISTORDER} from './../contans'

export const listOrderAction = (data) => dispatch =>dispatch(getListOrder(data));
const getListOrder = (data) => ({
    type: LISTORDER,
    payload: {
        request: {
            url: '/f/app/jxorder/list',
            data:{...data}
        }
    }
});