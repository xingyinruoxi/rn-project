import React, {Component} from 'react';
import {
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import ItemNetwork from './component/itemNetwork'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {listNetworkAction} from './../../actions/listNetwork'

@connect(
    state => ({listNetwork: state.listNetwork}),
    dispatch => bindActionCreators({listNetworkAction}, dispatch)
)


export default class extends Component {
    componentDidMount() {
        let {listNetworkAction} = this.props;
        listNetworkAction();
    }
    render() {
        let {navigation,listNetwork:{data}}=this.props;
        return (
            <View>
                <Image source={require('./img/banner.png')} style={{width: '100%'}}/>
                <FlatList
                    data={data.body}
                    keyExtractor={(item) => item.tid.toString()}
                    renderItem={({item}) => {
                        return (
                            <ItemNetwork {...{navigation, item}}/>
                        )
                    }}
                />
            </View>
        );
    }
}

