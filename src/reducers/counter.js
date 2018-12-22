const ADDNUM='REDUCERS/VIEW/SIGNIN/递加数字';
const DELNUM='REDUCERS/VIEW/SIGNIN/递减数字';


const add=()=>({type:ADDNUM});
const del=()=>({type:DELNUM});
const async=()=>dispatch=>{
    setTimeout(()=>{
        dispatch({type:ADDNUM})
    },2000)
}

export default function counter(state=0,action){
    let {type}=action;
    switch(type){
        case ADDNUM:
            return ++state;
        case DELNUM:
            return --state;
        default:
            return state;
    }
}
export {
    add,
    del,
    async
}