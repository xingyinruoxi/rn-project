import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default class extends Component {
    render() {
        let {navigation}=this.props;
        return (
            <View style={styles.signIn}>
                <Text
                    style={styles.title}
                >设置密码</Text>
                <View
                    style={styles.inputWrap}
                >
                    <TextInput
                        style={styles.formInput}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        autoFocus={true}
                        keyboardType={'numeric'}
                        maxLength={11}
                        clearButtonMode={'while-editing'}
                        placeholder={'请输入图片验证码'}/>
                </View>
                <View
                    style={styles.inputWrap}
                >
                    <TextInput
                        style={styles.formInput}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        autoFocus={true}
                        keyboardType={'numeric'}
                        maxLength={11}
                        clearButtonMode={'while-editing'}
                        placeholder={'请输入短信验证码'}/>
                </View>
                <View
                    style={styles.inputWrap}
                >
                    <TextInput
                        style={styles.formInput}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        autoFocus={true}
                        maxLength={11}
                        secureTextEntry={true}
                        clearButtonMode={'while-editing'}
                        placeholder={'设置新密码'}/>
                </View>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('SignIn')}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#fd6b7d', '#ef2f46']}
                        style={styles.btnSubmit}>
                        <Text

                            style={styles.btnText}
                        >
                            完成
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    signIn: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        flex: 1,
    },
    title: {
        color: '#333',
        fontSize: 20,
        lineHeight: 40,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 40
    },
    inputWrap: {
        marginBottom: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        alignItems: 'center'
    },
    formInput: {
        padding: 0,
        fontSize: 14,
        height: 40,
        flex: 1,
    },
    btnSubmit: {
        // backgroundColor:'#ef2f46',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    btnText: {
        color: '#fff',
        fontSize: 18
    },
});
