import React, {Component} from 'react';
import {
    ScrollView,
    FlatList
} from 'react-native';
import ItemService from './../../component/card/itemService'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {listServiceAction} from './../../actions/listService'

@connect(
    state => ({listService: state.listService,userInfo:state.userInfo}),
    dispatch => bindActionCreators({listServiceAction}, dispatch)
)
export default class extends Component {
    async componentDidMount() {
        let {listServiceAction,userInfo:{body}} = this.props;
        let {sessionId,userId:tid}=body;
        let {payload: {data}} = await listServiceAction({tid, sessionId});
    }
    render() {
        let {listService}=this.props;
        console.log(333,listService);
        return (
           <FlatList
                data={listService.data.body}
                keyExtractor={(item) => item.orderNo.toString()}
                refreshing={false}
                // onRefresh={() => listMachineAction()}
                renderItem={({item}) => {
                    return (
                        <ItemService {...item}/>
                    )
                }}
            />
        );
    }
}
