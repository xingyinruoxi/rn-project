import React, {Component} from 'react';
import {
    View,
    Image,
    ScrollView,
    FlatList,
    Text,
    Modal
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer'

const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        headers: 'wertyui'
    }
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970939',
    props: {
        // Or you can set source directory.
        // source: require('../../common/img/arrow.png')
    }
},{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        // headers: ...
        source:require('./../../common/img/pic0.jpg')
    }
}]
export default class extends Component {
    render() {
        return (
            <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={images}/>
            </Modal>
        );
    }
}

