import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    ScrollView,
    Text
} from 'react-native';
import Card from './../../component/card';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {listOrderAction} from './../../actions/listOrder'

@connect(
    state => ({listOrder: state.listOrder, userInfo: state.userInfo}),
    dispatch => bindActionCreators({listOrderAction}, dispatch)
)
export default class extends Component {
    componentDidMount() {
        console.log(444);
        let {listOrderAction, userInfo: {body}} = this.props;
        let {sessionId, userId: tid} = body;
        listOrderAction({tid, sessionId});
    }

    static navigationOptions = {
        headerTitle: '我的订单(29)'+40
    };

    render() {
        let {navigation,listOrder:{data}} = this.props;
        return (
            <FlatList
                data={data.body?data.body.list:[]}
                keyExtractor={(item) => item.tid.toString()}
                refreshing={false}
                // onRefresh={() => listMachineAction()}
                renderItem={({item}) => {
                    return (
                        <Card {...{item,navigation}}/>
                    )
                }}
            />

        );
    }
}

const styles = StyleSheet.create({});
