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
  Text,
  Dimensions,
  StyleSheet,
  Alert
} from 'react-native'

import {
  flexCenter,
} from "basic"

import DeviceInfo from 'react-native-device-info'

import {
  ZButton
} from 'domain/component'

export class Example0 extends Component {
  
  onPress() {
    
    this.setState({
      loading : true
    })
    setTimeout( (() => {
      this.setState({
        loading : false
      })
      Alert.alert("Hello", "world")
    }).bind(this), 3000)
    
  }
  
  constructor(){
    super() // 必须

    // 设置初始状态
    this.state = {
      loading : false  
    }
  }
  
  render() {
    const {loading} = this.state
      console.log(111111111111111111)
      console.log("getUniqueID:"+DeviceInfo.getUniqueID())
      console.log("getManufacturer:"+DeviceInfo.getManufacturer())
      console.log("getBrand:"+DeviceInfo.getBrand())
      console.log("getModel:"+DeviceInfo.getModel())
      console.log("getDeviceId:"+DeviceInfo.getDeviceId())
      console.log("getSystemName:"+DeviceInfo.getSystemName())
      console.log("getSystemVersion:"+DeviceInfo.getSystemVersion())
      console.log("getBundleId:"+DeviceInfo.getBundleId())
      console.log("getBuildNumber:"+DeviceInfo.getBuildNumber())
      console.log("getVersion:"+DeviceInfo.getVersion())
      console.log("getReadableVersion:"+DeviceInfo.getReadableVersion())
      console.log("getDeviceName:"+DeviceInfo.getDeviceName())
      console.log("getUserAgent:"+DeviceInfo.getUserAgent())
      console.log("getDeviceLocale:"+DeviceInfo.getDeviceLocale())
      console.log("getDeviceCountry:"+DeviceInfo.getDeviceCountry())
      console.log("getTimezone:"+DeviceInfo.getTimezone())
      console.log("getInstanceID:"+DeviceInfo.getInstanceID())
      console.log("isEmulator:"+DeviceInfo.isEmulator())
      console.log("isTablet:"+DeviceInfo.isTablet())
      console.log("isPinOrFingerprintSet:"+DeviceInfo.isPinOrFingerprintSet())


      console.log(JSON.stringify(DeviceInfo))


      return (
      <View style={styles.container}>

        <Text>
          getUniqueID：{DeviceInfo.getUniqueID()}
        </Text>
        <Text>
          getManufacturer：{DeviceInfo.getManufacturer()}
        </Text>
        <Text>
          getBrand：{DeviceInfo.getBrand()}
        </Text>
        <Text>
          getModel：{DeviceInfo.getModel()}
        </Text>
        <Text>
          getDeviceId：{DeviceInfo.getDeviceId()}
        </Text>
        <Text>
          getSystemName：{DeviceInfo.getSystemName()}
        </Text>
        <Text>
          getSystemVersion：{DeviceInfo.getSystemVersion()}
        </Text>
        <Text>
          getBundleId：{DeviceInfo.getBundleId()}
        </Text>
        <Text>
          getBuildNumber：{DeviceInfo.getBuildNumber()}
        </Text>
        <Text>
          getVersion：{DeviceInfo.getVersion()}
        </Text>
        <Text>
          getReadableVersion：{DeviceInfo.getReadableVersion()}
        </Text>
        <Text>
          getDeviceName：{DeviceInfo.getDeviceName()}
        </Text>
        <Text>
          getUserAgent：{DeviceInfo.getUserAgent()}
        </Text>
        <Text>
          getDeviceLocale：{DeviceInfo.getDeviceLocale()}
        </Text>
        <Text>
          getDeviceCountry：{DeviceInfo.getDeviceCountry()}
        </Text>
        <Text>
          getTimezone：{DeviceInfo.getTimezone()}
        </Text>
        <Text>
          getInstanceID：{DeviceInfo.getInstanceID()}
        </Text>
        <Text>
          isEmulator：{DeviceInfo.isEmulator()}
        </Text>
        <Text>
          isTablet：{DeviceInfo.isTablet()}
        </Text>
        <Text>
          isPinOrFingerprintSet：{DeviceInfo.isPinOrFingerprintSet()}
        </Text>



        
        {/*<View style={{height : 50,width : 100, flexDirection : 'row'}}>*/}
          {/*<View style={{flex:1, backgroundColor : 'red'}}></View>*/}
          {/*<View style={{flex:2, backgroundColor : "blue"}}></View>*/}
          {/*<View style={{flex:1, backgroundColor : "green"}}></View>*/}
        {/*</View>*/}


        {/*<ZButton loading={loading} onPress={this.onPress.bind(this)} >登录</ZButton>*/}

      </View>
    )
  }
}


const styles = StyleSheet.create({
  
  container : {
    flexDirection : 'column', ...flexCenter, flex : 1 ,
  }
})
