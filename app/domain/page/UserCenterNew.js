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

import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    Alert,
    Platform,
    AlertIOS,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    RefreshControl
} from 'react-native'
import {Routes} from "domain/page"
import LocalImg from './images'
import Item from '../component/Item'
import NavBar from '../component/NavBar'
import Setting from './Setting'
import UserProfile from './UserProfile'
import Address from './MyCard'
import px2dp from '../util'

import Icon from 'react-native-vector-icons/Ionicons'
let {width, height} = Dimensions.get('window')

export class UserCenterNew extends Component {

    constructor(props){
        super(props)
        this.state = {
            isRefreshing: false
        }
    }

    componentWillMount() {


    }




    goPage(key, data = {}){

        let pages = {
            "mycard": Routes.MyCard,
            "login": Routes.Login,
            "new-version":Routes.NewVersion,
            "about":Routes.About,
            "test":Routes.UserCenter
        }
        if(pages[key]){
            this.props.navigator.push({...pages[key]})
        }

        // this.props.navigator.push({...Routes.Address})
    }

    goProfile(){
        this.props.navigator.push({...Routes.UserProfile})
    }
    componentDidMount(){
        this._onRefresh()
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 1500)
    }
    _renderListItem(){
        return this.config.map((item, i) => {
            // if(i%3==0){
            //     item.first = true
            // }
            return (<Item key={i} {...item}/>)
        })
    }
    leftPress(){
        Alert.alert("暂无提醒")
    }
    rightPress(){
        this.props.navigator.push({...Routes.UserProfile})
    }

    back(){
      Alert.alert("1")
    }

    render(){

        if(global.logged){
            this.config = [
                // {first:true, font:"Entypo", icon:"login", name:"登录/注册", onPress:this.goPage.bind(this,"login")},
                {first:true, font:"Entypo",icon:"newsletter", name:"我的卡片", onPress:this.goPage.bind(this,"mycard"), color:"#f90"},
                {first:true, font:"Entypo", icon:"download", name:"检查更新", subName:"发现新版本", color:"#94d94a",onPress:this.goPage.bind(this,"new-version")},
                {font:"Entypo",icon:"info", name:"关于", onPress:this.goPage.bind(this,"about")},

                {first:true, font:"Entypo",icon:"bug", name:"测试", onPress:this.goPage.bind(this,"test")},
            ]
        }else{
            this.config = [
                {first:true, font:"Entypo", icon:"login", name:"登录/注册", onPress:this.goPage.bind(this,"login")},
                // {first:true, font:"Entypo",icon:"newsletter", name:"我的卡片", onPress:this.goPage.bind(this,"mycard"), color:"#f90"},
                {first:true, font:"Entypo", icon:"download", name:"检查更新", subName:"发现新版本", color:"#94d94a",onPress:this.goPage.bind(this,"new-version")},
                {font:"Entypo",icon:"info", name:"关于", onPress:this.goPage.bind(this,"about")},

                {first:true, font:"Entypo",icon:"bug", name:"测试", onPress:this.goPage.bind(this,"test")},
            ]
        }

        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3",height:height}}>
                <NavBar
                    title="个人中心"
                    leftIcon="ios-notifications-outline"
                    leftPress={this.leftPress.bind(this)}
                    rightIcon="ios-settings-outline"
                    rightPress={this.rightPress.bind(this)}
                />
                <ScrollView
                    style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#fff"
                            colors={['#ddd', '#0398ff']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                >

                    <View style={{minHeight: height , paddingBottom: 100, backgroundColor: "#f3f3f3"}}>
                        <TouchableWithoutFeedback onPress={this.goProfile.bind(this)}>
                            <View style={styles.userHead}>
                                <View style={{flex: 1,flexDirection: "row"}}>
                                    <Image source={LocalImg.avatar} style={{width: px2dp(60), height: px2dp(60), borderRadius: px2dp(30)}}/>
                                    <View style={{flex: 1, marginLeft: 10, paddingVertical: 5}}>
                                        <Text style={{color: "#fff", fontSize: px2dp(18)}}>_平行时空</Text>
                                        <View style={{marginTop: px2dp(10), flexDirection: "row"}}>
                                            <Icon name="ios-phone-portrait-outline" size={px2dp(14)} color="#fff" />
                                            <Text style={{color: "#fff", fontSize: 13, paddingLeft: 5}}>135****0418</Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="ios-arrow-forward-outline" size={px2dp(22)} color="#fff" />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.numbers}>
                            <TouchableWithoutFeedback>
                                <View style={styles.numItem}>
                                    <Text style={{color: "#f90", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999.0元"}</Text>
                                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"余额"}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={[styles.numItem,{borderLeftWidth: 1, borderLeftColor: "#f5f5f5",borderRightWidth: 1, borderRightColor: "#f5f5f5"}]}>
                                    <Text style={{color: "#ff5f3e", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"1940个"}</Text>
                                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"优惠"}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.numItem}>
                                    <Text style={{color: "#6ac20b", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999分"}</Text>
                                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"积分"}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View>
                            {this._renderListItem()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 0,
        backgroundColor: "#0398ff"
    },
    userHead: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#0398ff"
    },
    numbers: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 74
    },
    numItem: {
        flex: 1,
        height: 74,
        justifyContent: "center",
        alignItems: "center"
    }
})

