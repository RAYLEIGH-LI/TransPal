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
import Address from './Address'
import px2dp from '../util'

import Icon from 'react-native-vector-icons/Ionicons'
let {width, height} = Dimensions.get('window')

export class UserCenterNew extends Component {

    constructor(props){
        super(props)
        this.state = {
            isRefreshing: false
        }
        this.config = [

            {icon:"ios-pin", name:"收货地址", onPress:this.goPage.bind(this,"address")},
            {icon:"ios-heart", name:"我的收藏", color:"#fc7b53"},
            {icon:"md-images", name:"美食相册"},
            {icon:"logo-usd", name:"推荐有奖", subName:"5元现金", color:"#fc7b53"},
            {icon:"ios-cart", name:"积分商城", subName:"0元好物在这里", color:"#94d94a"},
            {icon:"ios-medal", name:"饿了吗会员卡", subName:"未开通", color:"#ffc636"},
            {icon:"md-flower", name:"服务中心"},
            {icon:"ios-outlet", name:"欢迎评分"},
            {icon:"md-contacts", name:"加盟合作"},
        ]
    }


    goPage(key, data = {}){

        let pages = {
            "address": Routes.Address
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
            if(i%3==0){
                item.first = true
            }
            return (<Item key={i} {...item}/>)
        })
    }
    back(){
      Alert.alert("1")
    }

    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3",height:height}}>
                {/*<NavBar*/}
                    {/*title="个人中心"*/}
                    {/*leftIcon="ios-notifications-outline"*/}
                    {/*leftPress={this.leftPress.bind(this)}*/}
                    {/*rightIcon="ios-settings-outline"*/}
                    {/*rightPress={()=>{Alert.alert("yes")}}*/}
                {/*/>*/}
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
