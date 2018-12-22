import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import Card from './../../component/card';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {listMachineAction} from './../../actions/listMachine'

@connect(
    state => ({listMachine: state.listMachine}),
    dispatch => bindActionCreators({listMachineAction}, dispatch)
)
export default class extends Component {
    componentDidMount() {
        let {listMachineAction} = this.props;
        listMachineAction({pageNum: 1, pageSize: 8});
    }

    render() {
        let {navigation, listMachine, listMachineAction} = this.props;
        // console.log(loading(),'[[====')
        return (
            <FlatList
                data={listMachine.data.body}
                keyExtractor={(item) => item.tid.toString()}
                refreshing={false}
                onRefresh={() => listMachineAction()}
                renderItem={({item}) => {
                    return (
                        <Card noFooter={true} noHeader={true} {...{navigation, item}}/>
                    )
                }}
            />
        )
    }
}

