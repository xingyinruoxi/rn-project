import {LISTMACHINE} from './../contans'

export const listMachineAction = (data) => dispatch =>dispatch(getListMachine(data));
const getListMachine = (data) => ({
    type: LISTMACHINE,
    payload: {
        request: {
            url: '/f/app/goods/list',
            data:{...data}
        }
    }
});