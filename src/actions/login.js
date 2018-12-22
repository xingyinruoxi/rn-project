import {LOGIN} from './../contans'

export const loginAction = (data) => dispatch => dispatch(doLogin(data));

/*export const loginAction = () => dispatch => {
    dispatch(doLogin()).then(
       /!* res => {
            console.log('erty',res)
            dispatch({type:LOGIN_SUCCESS})
        },
        err => {
            dispatch({type: LOGIN_FAIL})
            throw error
        }*!/
    ).catch(err => {
        throw err
    })
};*/
const doLogin = (data) => ({
    type: LOGIN,
    payload: {
        request: {
            url: '/auto/loginApp',
            // method: 'GET',
            data:{...data}
        }
    }
})
