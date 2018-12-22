import {combineReducers} from 'redux';
/*import machine from './../view/listmachine/reducer'
import detailMachine from './../view/detailMachine/reducer'
import network from './../view/network/reducer'*/
import counter from './counter'
import userInfo from './login'
import listMachine from './listMachine'
import listNetwork from './listNetwork'
import listService from './listService'
import listOrder from './listOrder'

/*
export default combineReducers({
    counter,
    userInfo,
    listMachine,
    listNetwork,
    listService,
    listOrder,
});*/
export default {
    counter,
    userInfo,
    listMachine,
    listNetwork,
    listService,
    listOrder,
};