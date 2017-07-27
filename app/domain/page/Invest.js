'use strict';
import React, {Component} from 'react';
import {
    View,
    Alert,
    Text,
    ListView,
    TouchableOpacity,
    RefreshControl,
    StyleSheet,
    Image,
    Dimensions,
    InteractionManager
} from 'react-native'

import api from './src/api'

// import {connect} from 'react-redux';
// import {investFetch} from '../api/investAction';
// import InvestmentSingle from './InvestmentSingle';

const {height, width} = Dimensions.get('window');

export class Invest extends Component {

    constructor(props) {
        super(props);
        this.onPressItem = this
            .onPressItem
            .bind(this);
        this.renderItem = this
            .renderItem
            .bind(this);
        this.onScrollDown = this
            .onScrollDown
            .bind(this);
        this.state = {
            // dataSource: new ListView.DataSource({
            //     rowHasChanged: (row1, row2) => row1 !== row2
            // }),
            initialized:false,
            investList : null
        }

    }

    componentWillMount() {

        // this.props.investList=[null]

        return this.onScrollDown()

    }

    //下拉刷新
    onScrollDown() {

        console.log("请求获取产品列表")

        const data = api.investInfo

        console.log(data)

        this.setState({
            investList:data.data
        })

        this.setState({
            initialized: true
        })

        // const {dispatch} = this.props;
        // dispatch(investFetch())
    }

    //点击列表每一项响应按钮
    onPressItem(order) {

        Alert.alert("1");

        // const {navigator} = this.props;
        // InteractionManager.runAfterInteractions(() => {
        //     navigator.push({component: InvestmentSingle, name: 'InvestmentSingle', order});
        //     Alert.alert("1");
        // });
    }

    //进行渲染数据
    renderContent(dataSource) {
        const {initialized} = this.state;
        console.log("1111111111111111111")
        console.log(dataSource)
        return (
            <ListView
                initialListSize={1}
                dataSource={dataSource}
                renderRow={this.renderItem}
                style={{
                    backgroundColor: '#f5f5f5',
                    flex: 1
                }}
                onEndReachedThreshold={10}
                enableEmptySections={true}
                refreshControl={
                    < RefreshControl
                        refreshing = {!initialized}
                        onRefresh = {() => this.onScrollDown()}
                        title = "正在加载中……" color = "#ccc" />}
                showsVerticalScrollIndicator={false}/>
        );
    }

    renderButton(status) {
        if (status == 2) {
            return (
                <View style={styles.item_view_bottom_btn_prepare}>
                    <Text style={styles.item_view_bottom_again}>立即预约</Text>
                </View>
            )
        } else if (status == 1) {
            return (
                <View style={styles.item_view_bottom_btn}>
                    <Text style={styles.item_view_bottom_again}>设为默认卡</Text>
                </View>

            )
        } else {
            return (
                <View style={styles.item_view_bottom_btn_stop}>
                    <Text style={styles.item_view_bottom_again}>默认卡</Text>
                </View>
            )
        }
    }

    //渲染每一项的数据
    renderItem(order) {

        console.log("22222222222222")
        console.log(order)

        return (
            <View>
                <View style={styles.item_view_zhanwei}></View>

                <View
                    style={{
                        backgroundColor: 'white'
                    }}>
                    <View style={styles.item_view_top}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 16
                            }}>{order.name}</Text>
                        <View style={styles.item_view_center_status}>
                            <Image
                                source={require('./images/order/ic_order_status.png')}
                                style={styles.item_view_center_status_tv_img}>
                                <Text style={styles.item_view_center_status_tv}>{order.tag === '1'
                                    ? '普通储值卡'
                                    : '农行信用卡'}</Text>
                            </Image>
                        </View>
                    </View>
                    <View style={styles.item_view_center_msg}>
                        <View style={styles.item_view_center_title_img}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-end'
                                }}>
                                <Text style={styles.item_view_center_title}>{order.yield}</Text>
                                <Text
                                    style={{
                                        color: 'red',
                                        fontSize: 14,
                                        marginLeft: 2,
                                        marginBottom: 5
                                    }}></Text>
                            </View>
                            <Text style={styles.item_view_center_time}>{order.tag === '1'
                                ? '账户余额'
                                : '本期账单'}</Text>
                        </View>
                        <View style={styles.item_view_center_info}>
                            <Text style={styles.item_view_center_info_top}>{order.quit}</Text>
                            <Text style={styles.item_view_center_time}>{order.time}</Text>
                        </View>
                    </View>
                    <Image
                        source={require('./images/order/ic_order_heng_shi.png')}
                        style={{
                            width: width
                        }}/>
                    <View style={styles.item_view_bottom}>
                        <View style={styles.item_view_bottom_price_v}>
                            <Text style={styles.item_view_bottom_price}>设置</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                this.onPressItem(order)
                            }}>
                            <View style={styles.item_view_bottom_again_v}>
                                {this.renderButton(order.status)}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </TouchableOpacity> */}
            </View>
        );
    }

    render() {
        const {investList} = this.state;
        console.log("333333333333")
        console.log(investList)
        return (
            <View
                style={{
                    backgroundColor: '#f5f5f5',
                    flex: 1
                }}>
                {/*<View*/}
                    {/*style={{*/}
                        {/*height: 60,*/}
                        {/*backgroundColor: '#389e7f',*/}
                        {/*flexDirection: 'column',*/}
                        {/*paddingTop: 10*/}
                    {/*}}>*/}
                    {/*<View*/}
                        {/*style={{*/}
                            {/*flex: 1,*/}
                            {/*alignItems: 'center',*/}
                            {/*justifyContent: 'center'*/}
                        {/*}}>*/}
                        {/*<Text*/}
                            {/*style={{*/}
                                {/*fontSize: 18,*/}
                                {/*color: 'white',*/}
                                {/*alignSelf: 'center'*/}
                            {/*}}>投资</Text>*/}
                    {/*</View>*/}
                {/*</View>*/}
                <View style={{
                    flex: 1
                }}>
                    {this.renderContent(new ListView.DataSource({
                        rowHasChanged: (row1, row2) => row1 !== row2
                    }).cloneWithRows(investList))}
                    {/*{this.renderContent(this.state.dataSource.cloneWithRows(investList))}*/}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item_view_zhanwei: {
        backgroundColor: '#f5f5f5',
        height: 8
    },
    item_view_top: {
        flexDirection: 'row',
        height: 35,
        marginLeft: 20,
        alignItems: 'flex-end'
    },
    item_view_icon: {
        width: 10,
        height: 15,
        marginLeft: 5
    },
    item_view_center_status: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 10
    },
    item_view_center_status_tv_img: {
        height: 20,
        width: 62,
        justifyContent: 'center',
        alignItems: "center"
    },
    item_view_center_status_tv: {
        color: 'white',
        fontSize: 10,
        backgroundColor: '#00000000'
    },
    item_view_center_msg: {
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        alignItems: 'flex-end'
    },
    item_view_center_icon: {
        width: 50,
        height: 50,
        marginLeft: 10
    },
    item_view_center_title_img: {
        flex: 1,
        marginLeft: 20,
        marginTop: 5
    },
    item_view_center_info: {
        marginRight: 20
    },
    item_view_center_info_top: {
        fontSize: 20,
        paddingBottom: 5,
        color: '#000000',
        textAlign: 'right'
    },
    item_view_center_title: {
        fontSize: 33,
        color: 'red'
    },
    item_view_center_time: {
        color: '#777',
        fontSize: 12
    },
    item_view_bottom: {
        flexDirection: 'row',
        height: 40
    },
    item_view_bottom_price_v: {
        flex: 1.5,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    item_view_bottom_price: {
        color: '#aaa',
        fontSize: 14
    },
    item_view_bottom_again_v: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item_view_bottom_btn: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#389e7f',
        borderRadius: 4
    },
    item_view_bottom_btn_prepare: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#ff8848',
        borderRadius: 4
    },
    item_view_bottom_btn_stop: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#dddddd',
        borderRadius: 4
    },
    item_view_bottom_again: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ffffff'
    }
});

// export default connect((state) => {
//     const {Invest} = state;
//     return {Invest}
// })(Invest);
