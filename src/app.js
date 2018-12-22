import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import Navigator from './navigation'
import Loading from './component/loading'
import FileManager from 'react-native-filesystem';
const filePath='http://10.20.6.50:8089/static/files/url.json';
/*读取文件*/
/*function readFile(filePath){
    console.log('ertyui');
    FileManager.readFile(filePath)
        .then((data)=>{
            //字符串转json
            console.log('读取成功', JSON.parse(data)); // data 为 txt 文件里面的内容
        })
        .catch((data)=>{
            console.log('读取失败', data);
        });
}
readFile(filePath);*/
export default class extends Component {
    componentWillMount(){
        // this.readFile1()
    }
   /* readFile=(filePath)=>{
        console.log('ertyui');
        FileManager.readFile(filePath)
            .then((data)=>{
                //字符串转json
                console.log('读取成功', JSON.parse(data)); // data 为 txt 文件里面的内容
            })
            .catch((data)=>{
                console.log('读取失败', data);
            });
    }*/
    async  readFile1() {
        console.log(34567);
        const fileContents = await FileManager.readFile('https://api-upgrade.etongdai.com/static/service-upgrade-tip/status.txt');
        console.log(`read from file: ${fileContents}`);
    }
    componentDidMount(){
        this.readFile1()
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    barStyle="dark-content"
                    translucent={true}
                />
                {/*<Loading/>*/}
                <Navigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    fon12: {
        fontSize: 12
    }
});
