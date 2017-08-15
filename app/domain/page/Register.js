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

import {

    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Alert


} from 'react-native'

import {FormScrollView, FormConnector, ValidateMethods, flexCenter} from 'basic'
import {ZButton, ZInput, ZSwitch, ZVCode, ZImgCode} from "domain/component"

import {get_user_vcode, register} from "domain/api/apis"
import {Routes} from "domain/page"

const fields = ["name", "password", "certificate", "mobile", "agree", "vcode", "imgcode", "smsId"]

const validate = (assert, fields) => {
    // assert("name", ValidateMethods.required(), '请输入用户名')
    // assert("mobile", ValidateMethods.required(), '请输入手机号')
    // assert("mobile", ValidateMethods.length(11), '手机号格式不正确')
    // assert("certificate", ValidateMethods.required(), '请输入身份证')
    // assert("certificate", ValidateMethods.length(18), '身份证格式不正确')
    // assert("password", ValidateMethods.required(), '请输入密码')
    // assert("agree", ValidateMethods.required(true), '请同意用户协议')
}


export class Register extends Component {

    constructor() {
        super()

        this.state = {
            busy: false
        }
    }









    async _submit(data, errors) {

        if (errors.length > 0) {
            alert(errors[0])
            return
        }
        this.setState({busy: true})

        const resultStr = await register(data)
        // Alert.alert(resultStr)

        const result=JSON.parse(resultStr)

        if(result.errCode!="0000"){
            Alert.alert("错误", result.errMsg)
            this.setState({busy:false})
            return false
        }
        Alert.alert(result.token)
        global.token=result.token
        global.logged="true"

        global.storage.save({
            key: 'token',   // Note: Do not use underscore("_") in key!
            data: result.token
        });

        // console.log(result)
        this.setState({busy: false}, (() => {

            this.props.navigator.pop()
        }).bind(this))


    }

    render() {
        return (
            <FormScrollView>
                <FormConnector
                    data={{agree: true}}
                    fields={fields}
                    validate={validate}
                    submit={this._submit.bind(this)}>
                    <RegisterForm
                        busy={this.state.busy}
                        navigator={this.props.navigator}/>
                </FormConnector>

            </FormScrollView>
        )
    }
}


/**
 * 注册表单子组件
 * @param form 表单类
 * @param fields 表单上的所有字段
 * @param submit 提交方法
 * @returns {XML}
 * @constructor
 */
const RegisterForm = ({form, fields, submit, busy, navigator}) => {


    const {name, certificate, mobile, password, vcode, agree, imgcode, smsId} = fields
    const send = async () => {
        console.log("@send @RegisterForm")

        console.log(imgcode)
        console.log(this.zImgCode.state.code)

        const certificateNumber = certificate.value
        // if (!(certificateNumber && certificateNumber.length === 18 )) {
        //     Alert.alert("错误", "请输入身份证号")
        //     return false
        // }
        //
        const mobileNumber = mobile.value
        // if (!(mobileNumber && mobileNumber.length === 11 )) {
        //     Alert.alert("错误", "请输入手机号")
        //     return false
        // }
        //
        // if (!imgcode.value) {
        //     Alert.alert("错误", "请输入图片验证码")
        //     return false
        // }
        //
        // if (imgcode.value.toUpperCase() != this.zImgCode.state.code.toUpperCase()) {
        //     Alert.alert("错误", "请输入正确的图片验证码")
        //     return false
        // }
        /// TODO 发送请求
        // Alert.alert('1')
        const resultStr = await get_user_vcode(mobileNumber)
        const result=JSON.parse(resultStr)
        if(result.errCode!="0000"){
            Alert.alert("错误", result.errMsg)
            return false
        }

        fields.smsId.value=result.smsID


        return true
    }
    return (
        <View>
            <ZInput placeholder="姓名" keyboardType="phone-pad" {...name} />
            <ZInput placeholder="身份证号" keyboardType="phone-pad" {...certificate} />
            <ZInput placeholder="手机号" keyboardType="phone-pad" {...mobile} />
            <ZInput placeholder="密码"  {...password} secureTextEntry={true}/>
            <ZImgCode {...imgcode} send={send.bind(this)} ref={zImgCode => this.zImgCode = zImgCode}/>
            <ZVCode {...vcode} send={send}/>
            <ZSwitch label="同意注册协议" {...agree} onPress={() => navigator.push({...Routes.AccountAgreement})}/>

            <View style={{flex: 1, alignItems: 'center', marginTop: 20, height: 150}}>
                <ZButton onPress={submit} loading={busy}>提交</ZButton>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#eee",
        width: 200,
        height: 40

    }
})
