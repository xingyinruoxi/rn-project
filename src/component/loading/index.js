/*
function loading(onOff){
    if(onOff){
        console.log('显示loading');
        return {
            loading:true
        }
    }else{
        console.log('隐藏loading');
        return {
            loading:false
        }
    }
}
export {
    loading
}
*/

import React, {Component} from 'react';
import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';

export default class extends Component {
    render() {
        return (
            <View style={{position:'absolute',zIndex:9999,left:'50%',top:'50%'}}>
                <ActivityIndicator
                    /* animating={this.state.animating}
                     style={[styles.centering, {height: 80}]}*/
                    size="large"
                    color="#000"
                />
            </View>

        );
    }
}

