import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PasswordGestrue from 'react-native-gesture-password'
export default class extends Component {
    state={
        password:''
    };
    componentDidMount(){
        this.getInitialState();
    }
    onStart=()=>{
      this.setState({
          status:'normal',
          message:'请输入密码'
      })
    };
    onReset=()=>{
      this.setState({
          status:'normal',
          message:'请再次输入密码'
      })
    };
    onEnd=(password)=>{
        if(password==='123'){
            this.setState({
                status:'right',
                message:'密码设置成功'
            })
        }else{
            this.setState({
                status:'wrong',
                message:'密码设置错误，请重新设置'
            })
        }
    };
    getInitialState=()=>{
        this.setState( {
            message: '请输入密码',
            status: 'normal'
        })
    };
    render() {
        console.log(333,this.state);
        return (
            <PasswordGestrue
                style={{backgroundColor:'#f3f3f3'}}
                message={this.state.message}
                status={this.state.status}
                normalColor={'#ddd'}
                interval={1000}
                ref={'pg'}
                textStyle={{fontSize:16,marginTop:40}}
                onStart={()=>this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
}

const styles = {

};