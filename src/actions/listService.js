import {LISTSERVICE} from './../contans'

export const listServiceAction = (data) => dispatch =>dispatch(getListService(data));
const getListService = (data) => ({
    type: LISTSERVICE,
    payload: {
        request: {
            url: '/f/app/jxrepair/list',
            data:{...data}
        }
    }
});