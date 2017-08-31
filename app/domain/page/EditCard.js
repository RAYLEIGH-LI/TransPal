/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Alert,
    ScrollView,
    TextInput
} from 'react-native'
import px2dp from '../util'
import NavBar from '../component/NavBar'
import {ZButton} from "domain/component"
import Button from '../component/Button'
import Icon from 'react-native-vector-icons/Ionicons'
//FontAwesome
export class EditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busy: false,
            name: "",
            carno: "",
            tag: null,
            color: null,
            cardno: ""
        }
    }

    componentDidMount() {

    console.log(this.props)

        if (this.props.route.pageType == 1) {
            let obj = {};
            ["name", "carno", "tag", "color", "cardno"].forEach((item) => {
                obj[item] = this.props.route.data[item]
            })

            console.log(obj)
            this.setState(obj)
        }
        this.refs.remark.focus()
    }

    submit() {

        Alert.alert("1")

    }

    back() {
        this.props.navigator.pop()
    }

    render() {

        const{busy,carno,tag}=this.state


        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar
                    title={this.props.route.title}
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                />
                <ScrollView>
                    <View style={{marginTop: 10, backgroundColor: "#fff", paddingLeft: 16}}>
                        <View style={styles.item}>
                            <Text style={styles.label}>{"备注"}</Text>
                            <View style={{flex: 1}}>
                                <TextInput ref={"remark"} underlineColorAndroid="transparent" keyboardType={"default"}
                                           style={styles.textInput} defaultValue={tag} placeholderTextColor="#aaa"/>
                            </View>
                        </View>


                    </View>

                    <View style={{flex: 1, alignItems: 'center', marginTop: 20, height: 150}}>
                        <ZButton onPress={this.submit.bind(this)} loading={busy} >提交</ZButton>
                    </View>

                    {/*<Button style={{marginTop: 20, marginHorizontal: 16, borderRadius: 6, overflow: "hidden"}}*/}
                            {/*onPress={this.submit.bind(this)}>*/}
                        {/*<View style={{*/}
                            {/*flex: 1,*/}
                            {/*height: 40,*/}
                            {/*backgroundColor: "#56d176",*/}
                            {/*alignItems: "center",*/}
                            {/*justifyContent: "center"*/}
                        {/*}}>*/}
                            {/*<Text style={{color: "#fff"}}>{"确定"}</Text>*/}
                        {/*</View>*/}
                    {/*</Button>*/}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
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
    label: {
        minWidth: 45,
        fontSize: px2dp(13),
        color: "#222",
        paddingTop: 8
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        height: 30,
        fontSize: 13,
        paddingHorizontal: 10
    },
    radio: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: "#666",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        fontSize: px2dp(13),
        backgroundColor: "#fff"
    }
})
