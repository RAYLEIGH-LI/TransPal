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
    BackAndroid,
    Text,
    StatusBar,
    Platform,
    Alert
} from 'react-native'

import {Button, flexCenter} from "basic"
import {ZNavbar} from "domain/component"

import {COLOR_NAV_DARK, COLOR_TITLE} from "domain/def"

import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

import DeviceInfo from 'react-native-device-info'

import {get_token} from "domain/api/apis"

import {Provider} from 'react-redux'
import {init} from "domain/redux/init"

// 定义全局函数
import "domain/def/global.function.def"

import {App} from "./app"


export class Entry extends Component {

    constructor() {
        super()

        this.state = {
            store: null
        }
    }


    componentDidMount() {


        /**
         * 在全局范围内创建一个（且只有一个）storage实例
         */
        var storage = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size: 1000,

            // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend: AsyncStorage,

            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires: null,

            // 读写时在内存中缓存数据。默认启用。
            enableCache: true

            // 如果storage中没有相应数据，或数据已过期，
            // 则会调用相应的sync方法，无缝返回最新数据。
            // sync方法的具体说明会在后文提到
            // 你可以在构造函数这里就写好sync的方法
            // 或是在任何时候，直接对storage.sync进行赋值修改
            // 或是写到另一个文件里，这里require引入
            // sync: require('你可以另外写一个文件专门处理sync')

        })
        global.storage = storage;


        /**
         * 初始化Redux Store
         */
        init().then((__store => {
            /**
             * 设置Store全局可见,会增加副作用,但通常APP都属于中小型项目
             * 这样做会增强coding体验
             * 以后在任何地方,store就变成了一个全局变量
             * global.xxx的语法是react-native packager独有, 不要在react
             * 项目中使用
             */
            global.store = __store

            /**
             * 从服务端获取token,然后缓存在本地
             */
            this.setState({store: __store})

            // get_token()
            //     .then((() => {
            //         setTimeout((() => {
            //             this.setState({store: __store})
            //         }).bind(this), 0)
            //     }).bind(this))

        }).bind(this))



        global.uniqueID = DeviceInfo.getUniqueID()
        global.manufacturer = DeviceInfo.getManufacturer()
        global.brand = DeviceInfo.getBrand()
        global.model = DeviceInfo.getModel()
        global.deviceId = DeviceInfo.getDeviceId()
        global.systemName = DeviceInfo.getSystemName()
        global.systemVersion = DeviceInfo.getSystemVersion()
        global.bundleId = DeviceInfo.getBundleId()
        global.buildNumber = DeviceInfo.getBuildNumber()
        global.version = DeviceInfo.getVersion()
        global.readableVersion = DeviceInfo.getReadableVersion()
        global.deviceName = DeviceInfo.getDeviceName()
        global.userAgent = DeviceInfo.getUserAgent()
        global.deviceLocale = DeviceInfo.getDeviceLocale()
        global.deviceCountry = DeviceInfo.getDeviceCountry()
        global.timezone = DeviceInfo.getTimezone()
        global.instanceID = DeviceInfo.getInstanceID()
        global.isEmulator = DeviceInfo.isEmulator()
        global.isTablet = DeviceInfo.isTablet()
        global.isPinOrFingerprintSet = DeviceInfo.isPinOrFingerprintSet()

        global.deviceInfo = JSON.stringify({
            uniqueID: global.uniqueID,
            manufacturer: global.manufacturer,
            brand: global.brand,
            model: global.model,
            deviceId: global.deviceId,
            systemName: global.systemName,
            systemVersion: global.systemVersion,
            bundleId: global.bundleId,
            buildNumber: global.buildNumber,
            version: global.version,
            readableVersion: global.readableVersion,
            deviceName: global.deviceName,
            userAgent: global.userAgent,
            deviceLocale: global.deviceLocale,
            deviceCountry: global.deviceCountry,
            timezone: global.timezone,
            instanceID: global.instanceID,
            isEmulator: global.isEmulator,
            isTablet: global.isTablet,
            isPinOrFingerprintSet: global.isPinOrFingerprintSet
        })


    }


    render() {
        const {store} = this.state
        if (!store) {
            return null
        }

        return <Provider store={store}>
            <App />
        </Provider>

    }
}
