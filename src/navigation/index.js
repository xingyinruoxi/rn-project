import {StackNavigator,SafeAreaView} from 'react-navigation';
import SignIn from './../view/userSign/signin'
import SignUp from './../view/userSign/signup'
import SignUpSuccess from './../view/userSign/signupsuccess'
import HomeTabBar from './homeTabBar'
import ListMachine from './../view/listmachine'
import DetailMachine from './../view/detailMachine'
import Service from './../view/service'
import Market from './../view/market'
import Network from './../view/network'
import Setting from './../view/setting'
import ImgZoomView from './../view/imgZoom'

import GesturePwd from './../view/gesturePwd'
import ListAddress from './../view/listAddress'
import SwiperAnimate from './../view/swiperAnimate'
import FormAddress from './../view/formAddress'
import OrderDetail from './../view/orderDetail'
import Serviceprocess from './../view/serviceprocess'
import WebView from './../view/webview'

const MainStack = StackNavigator(
    {

        SignUp: {
            screen: SignUp,
        },
        SignUpSuccess: {
            screen: SignUpSuccess,
        },
        Home: {
            screen: HomeTabBar,
            navigationOptions: {
                // header: null
                // headerTruncatedBackTitle:'666'
            }
        },
        ListMachine: {
            screen: ListMachine,
            headerBackground: '#000',
            navigationOptions: {
                title: '选择机器'
            }
        },
        DetailMachine: {
            screen: DetailMachine,
            navigationOptions: {
                title: '产品详情'
            }
        },
        //ImgZoomView
        ImgZoomView: {
            screen: ImgZoomView,
            navigationOptions: {
                title: '点击图片放大缩小'
            }
        },
        Service: {
            screen: Service,
            navigationOptions: {
                title: '维修服务'
            }
        },
        GesturePwd: {
            screen: GesturePwd,
            navigationOptions: {
                // title: '手势密码'
                header: null
            },
        },
        SwiperAnimate: {
            screen: SwiperAnimate,
            navigationOptions: {
                title: 'swiper'
                // header: null
            },
        },
        Market: {
            screen: Market,
            navigationOptions: {
                title: '配件列表'
            }
        },
        Network: {
            screen: Network,
            navigationOptions: {
                title: '网点服务'
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                title: '系统设置'
            }
        },
        ListAddress: {
            screen: ListAddress,
            navigationOptions: {
                title: '收货地址管理'
            }
        },
        FormAddress: {
            screen: FormAddress,
            navigationOptions: {
                title: '新增收货地址'
            }
        },
        OrderDetail: {
            screen: OrderDetail,
            navigationOptions: {
                title: '订单详情'
            }
        },
        Serviceprocess: {
            screen: Serviceprocess,
            navigationOptions: {
                title: '服务进度'
            }
        },
        WebView: {
            screen: WebView,
            navigationOptions: {
                title: 'webView页面'
            }
        },
    },
    {
        // headerMode: 'none',
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#fff',
                borderBottomColor: '#eee'
            },
            headerTitleStyle: {
                // color:'skyblue'
                fontSize: 17,
                fontWeight: '400',
                alignSelf: 'center'
            },
            headerBackTitleStyle: {
                color: '#333'
            }
        },
    }
);
export default StackNavigator(
    {

        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        },
        MainStack: {
            screen: MainStack
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: 'SignIn',
    }
)