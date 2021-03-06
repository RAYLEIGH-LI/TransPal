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


import {http_get, http_post, http_put, url_mapper} from "domain/api/http"

import RNFetchBlob from 'react-native-fetch-blob'
import {get_local_token} from "domain/store/storage"

/**
 * 请求获取token,并缓存在本地
 */
export const get_token = async (force) => {
    if (!force && store.getState().user.token) {
        return
    }
    return '123456'
    // return await http_get("/token")
}

function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

/**
 *  去支付宝拿签名
 */

export const get_sign_alipay = (orderId) => {
    return http_get('/order/sign/alipay', {orderId})
}

/**
 * 验证token
 */
export const check_token = (token) => {

    console.log("@check_token[验证token] ")

    const param = JSON.stringify({
        sysName: 'txb-userRun',
        token
    })

    return http_get('/m/token-check', {param})
}


/**
 * 获取验证码图片
 * @return 图片base64字符串
 */
export const get_image = async () => {

    console.log("@get_image[图片验证码] ")

    const param = JSON.stringify({
        width: 100,
        height: 42,
        codeCount: 4,
        imageType: 'png'
    })

    return http_get('/m/vcode-query', {param})

    // return "data:image/png;base64," + result


}

/**
 * 发送短信验证码
 */
export const get_user_vcode = (mobile) => {

    console.log("@get_user_vcode[获取短信验证码] with mobile " + mobile)

    const param = JSON.stringify({
        pkgCmd: 'sms.send',
        phoneNbr: mobile,
        smsType: 'validate'
    })

    // return '{"errCode":"0000","errMsg":""}'
    return http_get("/m/sms-send", {param})


}


/**
 * 用户注册
 */
export const register = (data) => {
    console.log("@register[用户注册] with data "+data)

    const param = JSON.stringify({
        pkgCmd: 'user.register',
        phoneNbr: data.mobile,
        smsID:data.smsId,
        valiCode:data.vcode
        // userName:data.name,
        // loginPwd: data.password
    })

    // return '{"errCode":"0000","errMsg":"","token":"o3061+dpIeKGWgjmy+cg95g2jbG04hmb0hzyp/anXLI="}'

    return http_get("/m/user-register", {param})
}


/**
 * 重置密码
 */
export const reset = (data) => {
    console.log("@reset password")
}

/**
 * 登录
 */
export const login = (data) => {

    console.log("@login[用户登录] with data "+data)

    const param = JSON.stringify({
        pkgCmd: 'user.login',
        phoneNbr: data.mobile,
        smsID:data.smsId,
        valiCode:data.vcode
        // userName:data.name,
        // loginPwd: data.password
    })

    // return '{"errCode":"0000","errMsg":"","token":"o3061+dpIeKGWgjmy+cg95g2jbG04hmb0hzyp/anXLI="}'

    return http_get("/m/user-login", {param})

}

/**
 * 获取课程
 */
export const get_courses = (start, take) => {
    console.log("@get_courses")
    return http_get("/course", {start, take})
}


/**
 * 获取订单
 */
export const get_orders = (start, take) => {
    console.log("@get_ourder")
    return http_get("/order", {start, take})
}


/**
 * 创建订单
 * @param courseId
 */
export const post_order = (courseId) => {
    console.log("@post_order")
    return http_post(`/order/${courseId}`)

}


export const put_user = (data) => {
    console.log("@put_user")
    return http_put(`/user`, data)
}
