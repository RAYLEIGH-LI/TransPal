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


// export {Example1} from "./Example1"
// export {Example2} from "./Example2"
// export {Example3} from "./Example3"


// 路由的元数据
export const Routes = {
    Invest: {
        name: "Invest",
        Title: "绑卡测试",
        Inverse: true, // 深色的NavBar
        // 用了get的语法避免循环引用
        get Component() {
            return require("./Invest").Invest
        }
    },
    Example0: {
        name: "Example0",
        Title: "Example0",
        // 用了get的语法避免循环引用
        get Component() {
            return require("./Example0").Example0
        }
    },
    Example1: {
        name: "Example1",
        Title: "Example1",
        Inverse: true, // 深色的NavBar
        get Component() {
            return require("./Example1").Example1
        }
    },
    Example2: {
        name: "Example2",
        Title: "Example2",
        get Component() {
            return require("./Example2").Example2
        }
    },
    Example3: {
        name: "Example3",
        Title: "Example3",
        get Component() {
            return require("./Example3").Example3
        }
    },
    WebViewExample: {
        name: "WebViewExample",
        // Title: "WebViewExample",
        get Component() {
            return require("./WebViewExample").WebViewExample
        }
    },
    Example4: {
        name: "Example4",
        Title: "Example4",
        get Component() {
            return require("./Example4").Example4
        }
    },

    /** Flexbox 示例 **/
    ExampleFlexbox: {

        name: "ExampleFlexbox",
        Title: "Flexbox示例",
        get Component() {
            return require("./ExampleFlexbox").ExampleFlexbox
        }

    },

    /** 视频播放示例 **/
    ExamplePlayer: {
        name: "ExamplePlayer",
        Title: "视频播放示例",
        get Component() {
            return require("./ExamplePlayer").ExamplePlayer
        }
    },


    /* 首页 */
    Tabs: {
        name: "Tabs",
        noTitleBar: true,
        Inverse: true,
        get Component() {
            return require("./Tabs").Tabs
        }
    },


    /* 课程详情 */
    Course: {

        name: "Course",
        Inverse: true,
        Title: "文章详情",
        get Component() {
            return require("./Course").Course
        }

    },

    FormExample: {
        name: "FormExample",
        Inverse: true,
        Title: "表单例子",
        get Component() {
            return require("./FormExample").FormExample
        }
    },

    Pay: {
        name: "Pay",
        Inverse: true,
        Title: "课程支付",
        get Component() {
            return require("./Pay").Pay
        }

    },
    /** 注册 **/
    Register: {
        name: "Register",
        Inverse: true,
        Title: "注册",
        get Component() {
            return require("./Register").Register
        }
    },

    /** 登录 **/
    Login: {
        name: "Login",
        Inverse: true,
        Title: "登录",
        get Component() {
            return require("./Login").Login
        }
    },

    /** 重置密码 **/
    ResetPassword: {
        name: "ResetPassword",
        Inverse: true,
        Title: "忘记密码",

        get Component() {
            return require("./ResetPassword").ResetPassword
        }
    },
    /** 关于珠峰 **/
    About: {
        name: "About",
        Inverse: true,
        Title: "关于我们",

        get Component() {
            return require("./About").About
        }
    },
    /** 版本信息 **/
    NewVersion: {
        name: "NewVersion",
        Inverse: true,
        Title: "版本介绍",

        get Component() {
            return require("./NewVersion").NewVersion
        }
    },
    /** 充值 **/
    Recharge: {
        name: "Recharge",
        Inverse: true,
        Title: "充值",

        get Component() {
            return require("./Recharge").Recharge
        }
    },
    /** 用户中心（老版测试） **/
    UserCenter: {
        name: "UserCenter",
        Inverse: true,
        Title: "测试",

        get Component() {
            return require("./UserCenter").UserCenter
        }
    },
    /** 账户信息 **/
    UserProfile: {
        name: "UserProfile",
        noTitleBar: "true",
        Inverse: false,
        Title: "账户信息",

        get Component() {
            return require("./UserProfile").UserProfile
        }
    },
    /** 设置 **/
    Setting: {
        name: "Setting",
        Inverse: true,
        Title: "设置",

        get Component() {
            return require("./Setting").Setting
        }
    },
    /** 地址 **/
    MyCard: {
        name: "MyCard",
        Inverse: true,
        Title: "我的卡片",

        get Component() {
            return require("./MyCard").MyCard
        }
    },
    /** 修改卡片信息 **/
    EditCard: {
        name: "EditCard",
        Inverse: true,
        Title: "修改信息",

        get Component() {
            return require("./EditCard").EditCard
        }
    },
    /** 开户协议 **/
    AccountAgreement: {
        name: "AccountAgreement",
        Inverse: true,
        Title: "开户协议",

        get Component() {
            return require("./AccountAgreement").AccountAgreement
        }
    }


}
