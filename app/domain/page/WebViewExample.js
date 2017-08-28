import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Alert
} from 'react-native';
import NavBar from '../component/NavBar'
const {width, height} = Dimensions.get('window');

// const url = "http://www.58.com";
export class WebViewExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {info} = this.props.route

        // Alert.alert(JSON.stringify(info))

        // let location = info.tplurl.indexOf('http')
        // let url = info.tplurl.slice(location)

        let url=info.tplurl

        return (
            <View style={styles.container}>
                <NavBar
                    title=""
                    leftIcon="ios-arrow-back"
                    leftPress={()=>{this.props.navigator.pop()}}
                />
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'gray'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:0,
    },
});