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
import NavBar from '../component/NavBar'
import {View, Text, StyleSheet, ScrollView, Link} from 'react-native'

const text = "开户协议：\n"+
"开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议开户协议\n"+
"©2017 招商银行股份有限公司南京分行\n"

export class AccountAgreement extends Component{

  render(){

    return <ScrollView style={{flex : 1, paddingTop : 0}}>

      <NavBar
          title="用户协议"
          leftIcon="ios-arrow-back"
          leftPress={()=>{this.props.navigator.pop()}}
      />

      {text.split("\n").map((para, i) => {

        return <View key={i} style={styles.para}><Text style={styles.text}>{para}</Text></View>
      })}

    </ScrollView>
  }
}
const styles = StyleSheet.create({
  para : {
    paddingLeft : 20,
    paddingRight : 20,
    marginBottom : 20,

  },
  text : {
    fontSize : 15
  }
})
