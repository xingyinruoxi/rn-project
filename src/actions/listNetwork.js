import {LISTNETWORK} from './../contans'

export const listNetworkAction = (data) => dispatch =>dispatch(getListNetwork(data));
const getListNetwork = (data) => ({
    type: LISTNETWORK,
    payload: {
        request: {
            url: '/f/app/dot/list',
            data:{...data}
        }
    }
});