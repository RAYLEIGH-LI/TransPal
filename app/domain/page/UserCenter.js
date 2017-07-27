/***********************************************
 *
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
 * OUT OF OR IN CONNCTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import React, {Component} from 'react'

import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'

const {width, height} = Dimensions.get('window')
const sliderItemStyle = {width, height: width * 0.6}

import {Routes} from "domain/page"
import {connect} from 'react-redux'
class _UserCenter extends Component {

    _Login() {
        this.props.navigator.push({...Routes.Login})
    }

    _Register() {
        this.props.navigator.push({...Routes.Register})
    }

    _about() {
        this.props.navigator.push({...Routes.About})
    }

    _NewVersion() {
        this.props.navigator.push({...Routes.NewVersion})
    }

    _reset() {
        this.props.navigator.push({...Routes.ResetPassword})
    }

    _logout() {

        store.dispatch({type: "LOGOUT"})

        this.props.switch_to("home")
    }

    _Invest() {
        this.props.navigator.push({...Routes.Invest})
    }

    _Example0() {
        this.props.navigator.push({...Routes.Example0})
    }

    _Example1() {
        this.props.navigator.push({...Routes.Example1})
    }

    _Example2() {
        this.props.navigator.push({...Routes.Example2})
    }

    _Example3() {
        this.props.navigator.push({...Routes.Example3})
    }

    _Example4() {
        this.props.navigator.push({...Routes.Example4})
    }

    _ExampleFlexbox() {
        this.props.navigator.push({...Routes.ExampleFlexbox})
    }

    _ExamplePlayer() {
        this.props.navigator.push({...Routes.ExamplePlayer})
    }

    _FormExample() {
        this.props.navigator.push({...Routes.FormExample})
    }

    _Pay() {
        this.props.navigator.push({...Routes.Pay})
    }

    _MeiTuan() {
        this.props.navigator.push({...Routes.MeiTuan})
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "white"}}>
                <View style={{backgroundColor: "white"}}>
                    <Image source={require("./images/usercenter.png")} style={sliderItemStyle}>
                    </Image>
                    <View style={{
                        position: "absolute",
                        top: sliderItemStyle.height * 0.7,
                        backgroundColor: "rgba(0,0,0,0)",
                        width: Dimensions.get("window").width,
                        alignItems: 'center'
                    }}>
                        <Text style={{color: 'white', fontSize: 16}}>{this.props.name}</Text>
                    </View>
                </View>

                <View style={{marginTop: 10}}>
                    {/*<StripedButton icon={require("./images/uc/question.png")}>常见问题</StripedButton>*/}
                    <StripedButton onPress={this._Login.bind(this)}
                                   icon={require("./images/uc/user.png")}>登录</StripedButton>
                    <StripedButton onPress={this._Register.bind(this)}
                                   icon={require("./images/uc/user.png")}>注册</StripedButton>
                    <StripedButton onPress={this._about.bind(this)}
                                   icon={require("./images/uc/user.png")}>关于</StripedButton>
                    <StripedButton onPress={this._reset.bind(this)}
                                   icon={require("./images/uc/password.png")}>修改密码</StripedButton>
                    <StripedButton onPress={this._logout.bind(this)}
                                   icon={require("./images/uc/password.png")}>登出</StripedButton>
                    <StripedButton onPress={this._NewVersion.bind(this)}
                                   icon={require("./images/uc/password.png")}>检查更新</StripedButton>
                    <StripedButton onPress={this._Invest.bind(this)} icon={require("./images/uc/password.png")}>绑卡测试</StripedButton>
                    <StripedButton onPress={this._Example0.bind(this)} icon={require("./images/uc/password.png")}>设备信息</StripedButton>
                    <StripedButton onPress={this._Example1.bind(this)} icon={require("./images/uc/password.png")}>Example1</StripedButton>
                    <StripedButton onPress={this._Example2.bind(this)} icon={require("./images/uc/password.png")}>Example2</StripedButton>
                    <StripedButton onPress={this._Example3.bind(this)} icon={require("./images/uc/password.png")}>Example3</StripedButton>
                    <StripedButton onPress={this._Example4.bind(this)} icon={require("./images/uc/password.png")}>Example4</StripedButton>
                    <StripedButton onPress={this._ExampleFlexbox.bind(this)} icon={require("./images/uc/password.png")}>ExampleFlexbox</StripedButton>
                    <StripedButton onPress={this._ExamplePlayer.bind(this)} icon={require("./images/uc/password.png")}>ExamplePlayer</StripedButton>
                    <StripedButton onPress={this._FormExample.bind(this)} icon={require("./images/uc/password.png")}>FormExample</StripedButton>
                    <StripedButton onPress={this._Pay.bind(this)}
                                   icon={require("./images/uc/password.png")}>Pay</StripedButton>
                    <StripedButton onPress={this._MeiTuan.bind(this)}
                                   icon={require("./images/uc/password.png")}>MeiTuan</StripedButton>
                </View>
            </ScrollView>
        )
    }
}

const StripedButton = ({icon, children, onPress}) => {

    return <TouchableOpacity onPress={onPress} style={styles.stripedButton}>
        <Image source={icon} style={styles.icon}/>
        <View style={{flex: 1, marginLeft: 10}}>
            <Text>{children}</Text>
        </View>
        <Image style={styles.iconR} source={require("./images/right-arrow.png")}></Image>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    stripedButton: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f3f4'
    },
    icon: {
        width: 18,
        height: 22,
        marginLeft: 20
    },
    iconR: {
        width: 12,
        height: 12,
        marginRight: 20
    }

})

const map = (state) => {

    return {
        name: state.user.name
    }

}

export let UserCenter = connect(map)(_UserCenter)
