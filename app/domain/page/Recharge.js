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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity,Alert,DatePickerAndroid} from 'react-native'
import {SegmentedControl, flexCenter, format_currency} from 'basic'
import {COLOR_TITLE, COLOR_TEXT_LIGHT, COLOR_PRICE, COLOR_INFO} from "domain/def"
import screen from 'domain/def/screen'
const {width, height} = Dimensions.get('window')
const sliderItemStyle = {width, height : width * 0.523}
import {ZBottomButton,ZInput} from "domain/component"
import NavBar from '../component/NavBar'
import Icon from 'react-native-vector-icons/Entypo'
import {Routes} from "domain/page"
import {post_order} from "domain/api/apis"
import px2dp from '../util'
import Button from '../component/Button'
import ShopBar from '../component/ShopBar'
import Picker from 'react-native-picker'

export class Recharge extends Component {

    constructor(props){

        super()


        this.state = {
            tabIndex : 0
        }

    }

    componentDidMount(){

    }

    _change(event){
        this.setState({
            tabIndex: event.nativeEvent.selectedSegmentIndex
        })
    }


    _createDateData() {

        let cardList = []

        cardList.push("锐界 苏A8D61M")

        cardList.push("雅阁 苏F186CE")

        return cardList


    }

     _selectCard = () => {

        // return async ()=> {
        //     try {
        //         const {action, year, month, day} = await
        //         DatePickerAndroid.open({
        //             // Use `new Date()` for current date.
        //             // May 25 2020. Month 0 is January.
        //             date: new Date(2020, 4, 25),
        //             mode:"spinner"
        //         });
        //         if (action !== DatePickerAndroid.dismissedAction) {
        //             // Selected year, month (0-11), day
        //         }
        //     } catch ({code, message}) {
        //         console.warn('Cannot open date picker', message);
        //     }
        // }


            let data = [];
            for (var i = 0; i < 100; i++) {
                data.push(i);
            }


            Picker.init({
                pickerTitleText: '卡片选择',
                pickerConfirmBtnText: '确定',
                pickerCancelBtnText:'取消',
                pickerData: this._createDateData(),
                // pickerToolBarFontSize: 16,
                // pickerFontSize: 16,
                // pickerFontColor: [255, 0 ,0, 1],
                onPickerConfirm: (pickedValue, pickedIndex) => {
                    console.log('date', pickedValue, pickedIndex);
                },
                onPickerCancel: (pickedValue, pickedIndex) => {
                    console.log('date', pickedValue, pickedIndex);
                },
                onPickerSelect: (pickedValue, pickedIndex) => {
                    console.log('date', pickedValue, pickedIndex);
                }
            });
            Picker.show();





        // Alert.alert("12")
        // return () => {
        //     this.openDatePick()
        // }
    }

    async _buy(){
        const result = await post_order(this.props.route.course.id)
        if(assert_request(result)){
            const logined = await login_check(result, this.props.navigator, this.props.route)
            if(logined) {

                /// TODO
                const orderId = result.data
                const course = this.props.route.course
                const route = {...Routes.Pay, orderId, course}

                this.props.navigator.push(route)

            }
        }

    }

    back(){
        this.props.navigator.pop()
    }

    selectCardItem(){
        return (

            <Block>
                <TouchableOpacity key={1} onPress={this._selectCard}>
                    <View style={styles.address}>
                        <View>
                            <Text style={{
                                color: "#333",
                                fontSize: px2dp(14)
                            }}>肖涵 苏A8D61M</Text>
                            <View style={styles.ads1List}>
                                <Text
                                style={[styles.tag, {backgroundColor: "#0096ff",}]}>锐界</Text>
                                <Text style={{color: "#bbb", fontSize: px2dp(13)}}>32011401220000032126</Text>
                            </View>
                        </View>
                        <Icon name="retweet" size={22} color="#ccc"/>

                    </View>
                </TouchableOpacity>
            </Block>



        )

    }

    render(){

        return <View style={{flex : 1}}>
            <NavBar
                title="充值"
                leftIcon="ios-arrow-back"
                leftPress={this.back.bind(this)}
            />
            <ScrollView style={{flex : 1}}>

                <View>

                    {this.selectCardItem()}
                    {/*<Block>*/}
                        {/*<TouchableOpacity key={1} onPress={this.selectCard().bind(this)}>*/}
                        {/*<View style={styles.address}>*/}
                            {/*<View>*/}
                                {/*<Text style={{*/}
                                    {/*color: "#333",*/}
                                    {/*fontSize: px2dp(14)*/}
                                {/*}}></Text>*/}
                                {/*<View style={styles.ads1List}>*/}
                                    {/*/!*<Text*!/*/}
                                        {/*/!*style={[styles.tag, {backgroundColor: "#0096ff",}]}></Text>*!/*/}
                                    {/*<Text style={{color: "#bbb", fontSize: px2dp(13)}}>选择卡片</Text>*/}
                                {/*</View>*/}
                            {/*</View>*/}
                                {/*<Icon name="md-create" size={22} color="#ccc"/>*/}

                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*</Block>*/}

                    <Block>
                        <IconLabel>充值金额</IconLabel>
                        {/*<LabelValue label="金额"></LabelValue>*/}
                        <View style={[styles.item, {alignItems: "center"}]}>
                            {/*<Text style={{fontSize: px2dp(13), color:"#222", minWidth: 45}}>{"标签"}</Text>*/}
                            <View style={{flexDirection:"row", flex: 1}}>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:500})}}>
                                    <Text style={[styles.radio, this.state.tag===500?styles.active:null]}>{"￥500"}</Text>
                                </Button>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:1000})}}>
                                    <Text style={[styles.radio, this.state.tag===1000?styles.active:null]}>{"￥1000"}</Text>
                                </Button>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:2000})}}>
                                    <Text style={[styles.radio, this.state.tag===2000?styles.active:null]}>{"￥2000"}</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={[styles.item, {alignItems: "center"}]}>
                            <View style={{flexDirection:"row", flex: 1}}>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:5000})}}>
                                    <Text style={[styles.radio, this.state.tag===5000?styles.active:null]}>{"￥5000"}</Text>
                                </Button>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:10000})}}>
                                    <Text style={[styles.radio, this.state.tag===10000?styles.active:null]}>{"￥10000"}</Text>
                                </Button>
                                <Button style={{marginLeft: 10}} onPress={()=>{this.setState({tag:20000})}}>
                                    <Text style={[styles.radio, this.state.tag===20000?styles.active:null]}>{"自定义"}</Text>
                                </Button>
                            </View>
                        </View>
                        {/*</LabelValue>*/}
                        <ZInput placeholder="充值金额" keyboardType="phone-pad">{this.state.tag}</ZInput>
                    </Block>


                </View>



            </ScrollView>

            <ShopBar ref={"shopbar"} lens={{maxPrice:this.state.tag,length:(this.state.tag?1:null)}}/>

            {/*<View style={{height : 42}}>*/}
                {/*<ZBottomButton onPress={this._buy.bind(this)}>购买</ZBottomButton>*/}
            {/*</View>*/}

        </View>
    }
}

const Paragraph = {
    paddingLeft : 20,
    paddingRight : 20,

}

const styles = StyleSheet.create({
    address: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#fbfbfb",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        paddingVertical: 8
    },
    tag: {
        color: "#fff",
        fontSize: px2dp(12),
        minWidth: px2dp(30),
        textAlign: "center",
        paddingVertical: 1,
        paddingHorizontal: 2,
        borderRadius: 5,
        marginRight: 5
    },
    ads1List: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5
    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor: "#f8f8f8",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    active: {
        borderColor: "#81c2ff",
        color: "#0096ff"
    },
    radio: {
        width: (width-40) / 3 ,
        height: width / 4,
        textAlign:"center",
        textAlignVertical:"center",
        color: "#666",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        fontSize: px2dp(15),
        backgroundColor: "#fff"
    }
})

const Block = ({children}) => {


    return <View>
        <View style={{marginLeft : 20, marginRight : 20, borderTopWidth : 1, borderColor : "#ccc", marginTop : 20, marginBottom : 20}}></View>
        {children}
    </View>

}


const Title = ({children}) => {
    return <Text style={{...Paragraph, color : COLOR_TITLE, fontSize : 18, fontWeight : 'bold'}}>{children}</Text>
}

const Label = ({children, style}) => {
    return <View style={{backgroundColor : COLOR_INFO, borderRadius : 5, padding : 3, ...flexCenter, ...style}}>
        <Text style={{color : "white"}}>{children}</Text>
    </View>
}

const LabelValue = ({children, label}) => {

    return <View style={{...Paragraph, marginTop : 5, flexDirection : 'row', alignItems: 'center', justifyContent : "flex-start"}}>
        <Label style={{width : 70}}>{label}</Label>
        {children}
    </View>
}


const IconLabel = ({icon, children}) => {
    return (
        <View style={{...Paragraph, flexDirection: "row", paddingTop : 5, paddingBottom : 5}}>
            <Image style={{width : 20, height : 20}} source={icon} />
            <Text style={{fontSize : 16, fontWeight : 'bold'}}>{children}</Text>
        </View>
    )
}

const Author = ({label, children}) => {
    return <Text style={{...Paragraph, color : COLOR_TEXT_LIGHT}}>{label}:{children}</Text>
}


const Description = ({children}) => {
    return <Text style={{...Paragraph, color : COLOR_TEXT_LIGHT}}>{children}</Text>
}


const Price = ({children}) => {
    return <Text style={{...Paragraph, color : COLOR_PRICE,fontSize : 18, fontWeight : 'bold'}}>￥{format_currency(children)}</Text>
}
