import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper-animated'

export default ()=> <Swiper
    style={styles.wrapper}
    smoothTransition
    loop={false}
    // index={1}
    // showToolbar={true}
>
    <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
    </View>
</Swiper>;

const styles = {
    wrapper: {
        backgroundColor: '#009688',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e91e63',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#673ab7',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f51b5',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
};
