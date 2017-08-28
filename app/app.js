/***********************************************
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import React, {Component} from 'react'

import {
    View,
    Navigator,
    BackAndroid,
    Text,
    StatusBar,
    Platform,
    Dimensions,
    Alert
} from 'react-native'

import {Button, flexCenter} from "basic"
import {ZNavbar} from "domain/component"

import {COLOR_NAV_DARK, COLOR_TITLE} from "domain/def"
import {check_token} from "domain/api/apis"
import {Routes} from "domain/page"

import {NetworkError} from "domain/component"

import {connect} from "react-redux"


import SplashScreen from 'react-native-splash-screen'


class _App extends Component {

    constructor() {
        super()
        setTimeout(() => {
            SplashScreen.hide()
        }, 300)

        this.nextTimeExit = false
    }



    componentWillMount() {

        /**
         * 取本地token，并判断是否过期
         */
        // 读取
        global.storage.load({
            key: 'token',

            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: false,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            syncInBackground: true,
        }).then(async ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法

            // Alert.alert(ret)
            // console.log("token="+ret);
            global.token=ret
            //验证token
            let promise = await check_token(token)
            let result =  promise


            console.log("resultresultresultresultresultresultresultresultresultresultresult")
            console.log(result)



            if(result==''||result=="TOKENERR01"){
                alert("身份信息过期，需重新登录")
                this.refs.navigator.push({...Routes.Login})
            }else{
                alert("自动登录成功")
                global.logged="true"
            }

        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
            alert("初次使用，请先登录")
            this.refs.navigator.push({...Routes.Login})
        })


    }

    componentDidMount() {

        BackAndroid.addEventListener('hardwareBackPress', (() => {
            const navigator = this.refs.navigator
            if (!navigator) {
                return false
            }
            const routes = navigator.getCurrentRoutes()
            if (routes.length === 1) {

                if (this.nextTimeExit) {
                    return false
                } else {
                    this.nextTimeExit = true
                    alert("再按一次回退键退出通行宝")
                    setTimeout((() => {
                        this.nextTimeExit = false
                    }).bind(this), 5000)
                    return false
                }

                return
            } else if (routes.length > 1) {
                navigator.pop()
                return true
            }

        }).bind(this));
        

        // Alert.alert(
        //     '发现新版本',
        //     '是否现在升级？',
        //     [
        //         {text: '不再提醒', onPress: () => console.log('Ask me later pressed')},
        //         {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //         {text: '立即升级', onPress: () => this.refs.navigator.push({...Routes.NewVersion})},
        //     ],
        //     { cancelable: false }
        // )


    }


    _renderScene(route, navigator) {

        const {Component, noTitleBar} = route
        // console.log("route.passPropsroute.passPropsroute.passPropsroute.passPropsroute.passPropsroute.passProps")
        // console.log(route)
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    barStyle={route.Inverse ? "light-content" : "default"}
                />

                {/*{!noTitleBar &&*/}
                {/*<View style={{*/}
                    {/*backgroundColor: route.Inverse ? COLOR_NAV_DARK : "white",*/}
                    {/*height: Platform.OS === 'ios' ? 64 : 56*/}
                {/*}}>*/}
                {/*</View>*/}
                {/*}*/}
                <Component navigator={navigator} route={route} noTitleBar={noTitleBar}/>
            </View>

        )
    }

    _renderNavBar() {

        const titleStyle = {
            flex: 1, ...flexCenter
        }

        const routeMapper = {

            LeftButton(route, navigator, index, navState) {
                if (index === 0) {
                    return null
                }
                return <ZNavbar.Back route={route} navigator={navigator}/>
            },
            RightButton(route, navigator, index, navState) {
                return null
            },
            Title(route, navigator, index, navState) {
                const t_style = {...titleStyle}
                if (Platform.OS === 'android') {

                    t_style.width = Dimensions.get("window").width - 148
                }
                return (
                    <View style={{...t_style}}>
                        <Text style={{color: route.Inverse ? "white" : COLOR_TITLE, fontSize: 18}}>{route.Title}</Text>
                    </View>
                );
            },
        }



        return (
            <Navigator.NavigationBar
                routeMapper={routeMapper}
            />
        )
    }

    render() {

        // initialRoute 设置第一张页面
        // renderScene 绘制场景
        const {network} = this.props
        return <View style={{flex: 1}}>

            {network.error &&
            <NetworkError cache={network.cache}/>
            }

            <Navigator
                ref="navigator"
                initialRoute={Routes.Tabs}
                renderScene={this._renderScene}
                // navigationBar={this._renderNavBar()}
            />
        </View>
    }
}

const mapStateToProps = (state) => {
    return {
        network: state.network
    }

}



export let App = connect(mapStateToProps)(_App)
