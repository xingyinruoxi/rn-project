import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import bg from './img/bg.png'

export default function (props) {
    let {noFooter, noHeader, navigation, item} = props;
    let {firstPayRatio, goodsName, goodsPrice,orderNo, goodsVersion, imgUrl, leaseTerm, tid,goodsInfo,totalAmount,totalCount} = item;
    return (
        <View style={[styles.card, noFooter ? null : ({marginBottom: 10})]}>
            {
                noHeader ? null : (
                    <View style={styles.cardHeader}>
                        <Text style={styles.fon12}>订单号：{orderNo}</Text>
                        <Text style={[styles.fon12, styles.colorRed]}>已发货</Text>
                    </View>
                )
            }
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailMachine',{tid})}
                activeOpacity={0.8}
                style={styles.cardContent}
            >
                <View style={styles.imgWrap}>
                    {
                        goodsInfo[0]||imgUrl ? (
                            <Image source={{url: goodsInfo[0].attchUrl||imgUrl}} style={{width: 120, height: 110}}/>
                        ) : (
                            <Image source={bg} style={{width: 44, height: 34}}/>
                        )
                    }
                </View>
                <View style={styles.inner}>
                    <Text style={styles.title}>{goodsInfo[0].goodsName||goodsName}</Text>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>{goodsInfo[0].goodsVersion||goodsVersion}</Text>
                    </View>
                    <Text style={styles.subtitle}>指导价：¥{goodsInfo[0].orderPrice||goodsPrice}/件</Text>
                    <Text style={styles.desc}>首付比例：{goodsInfo[0].firstPayRatio||firstPayRatio} &emsp;租期：{goodsInfo[0].leaseTerm||leaseTerm}</Text>
                </View>
            </TouchableOpacity>
            {
                noFooter ? null : (
                    <View style={styles.cardFooter}>
                        <Text style={styles.fon12}>共{totalCount}件</Text>
                        <Text style={styles.fon12}>合计：
                            <Text style={styles.money}>¥{totalAmount}</Text></Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    fon12: {
        fontSize: 12
    },
    colorRed: {
        color: '#ef2f46',
    },
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        // marginBottom: 10,
        /*  borderRadius:10,
          marginHorizontal:15*/
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        height: 36,
        alignItems: 'center'
    },
    cardContent: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    imgWrap: {
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        width: 120,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: '#333',
        marginVertical: 6
    },
    labelWrap: {
        borderRadius: 3,
        backgroundColor: '#ccc',
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 1
    },
    label: {
        color: '#fff',
        fontSize: 12
    },
    subtitle: {
        fontSize: 13,
        color: '#333',
        paddingVertical: 10,
        marginTop: 6
    },
    desc: {
        fontSize: 12,
        color: '#666'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 36,
        alignItems: 'center'
    },
    money: {
        color: '#ef2f46',
        fontSize: 15,
        fontWeight: '700'
    }
});
