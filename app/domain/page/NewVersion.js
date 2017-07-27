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
import {flexCenter} from 'basic'
import {Dimensions, View, Text, StyleSheet, ScrollView, Link, Alert, Image, Platform} from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'

import {ZButton} from "domain/component"


const text = "版本v0.0.1：\n" +
    "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介\n"

export class NewVersion extends Component {

    constructor(){
        super()
        this.state = {
            filePath : '' // 处理中
        }


    }


    _onPress() {
        // Alert.alert("111")

        // RNFetchBlob
        //     .config({
        //         fileCache : true,
        //         // android only options, these options be a no-op on IOS
        //         addAndroidDownloads : {
        //             // Show notification when response data transmitted
        //             notification : true,
        //             // Title of download notification
        //             title : 'Great ! Download Success ! :O ',
        //             // File description (not notification description)
        //             description : 'An image file.',
        //             mime : 'image/png',
        //             // Make the file scannable  by media scanner
        //             mediaScannable : true,
        //         }
        //     })
        //     .fetch('GET', 'http://114.215.203.138:8180/img/news2.jpg', {
        //         //some headers ..
        //     })
        //     .then((res) => {
        //         // the temp file path
        //         console.log('The file saved to ', res.path())
        //
        //         this.setState({filePath : res.path()})
        //
        //     })

        const android = RNFetchBlob.android
        RNFetchBlob
            .config({
                addAndroidDownloads : {
                    useDownloadManager : true,
                    title : 'transpal.apk',
                    description : 'An APK that will be installed',
                    mime : 'application/vnd.android.package-archive',
                    mediaScannable : true,
                    notification : true,
                }
            })
            .fetch('GET', 'http://10.0.2.2:8180/file/com.ss.android.article.news_032207.apk', {
                //some headers ..
            })
            .then((res) => {
                // the temp file path
                console.log('The file saved to ', res.path())

                android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')

            })


    }


    render() {

        const W = Dimensions.get("window").width

        const {filePath} = this.state

        return <ScrollView style={{flex: 1, paddingTop: 20}}>

            {text.split("\n").map((para, i) => {

                return <View key={i} style={styles.para}><Text style={styles.text}>{para}</Text></View>
            })}

            <View style={{...flexCenter, marginTop: 20}}>
                <ZButton onPress={this._onPress.bind(this)}>下载</ZButton>
            </View>

            <Image source={{ uri : Platform.OS === 'android' ? 'file://' + filePath  : '' + filePath }} style={{width : W - 22, height : (W - 20) * 0.3}}/>

        </ScrollView>

    }
}
const styles = StyleSheet.create({
    para: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,

    },
    text: {
        fontSize: 15
    }
})
