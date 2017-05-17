/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

export default {
  recommend: 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',
  discount: 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7',

  menuInfo: [
    {
      title: '充值',
      icon: require('./img/Home/icon_homepage_shoppingCategory.png'),
    },
    {
      title: '圈存',
      icon: require('./img/Home/icon_homepage_movieCategory.png')},
    {
      title: '账单查询',
      icon: require('./img/Home/icon_homepage_default.png')},
    {
      title: '行程查询',
      icon: require('./img/Home/icon_homepage_foottreatCategory.png',
    )},
    {
      title: '网点',
      icon: require('./img/Home/icon_homepage_lifeServiceCategory.png',
    )},
    {
      title: '绑卡',
      icon: require('./img/Home/icon_homepage_beautyCategory.png',
    )},
    {
      title: '金融',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
    {
      title: '测试2',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
    {
      title: '测试3',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
    {
      title: '测试4',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
    {
      title: '测试5',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
    {
      title: '测试6',
      icon: require('./img/Home/icon_homepage_foodCategory.png',
    )},
  ],

  // { title: '周边游', icon: require('./img/Home/icon_homepage_foottreatCategory.png') },
  // { title: '生活服务', icon: require('./img/Home/icon_homepage_lifeServiceCategory.png') },
  // { title: '休闲娱乐', icon: require('./img/Home/icon_homepage_entertainmentCategory.png') },
  // { title: '丽人/美发', icon: require('./img/Home/icon_homepage_beautyCategory.png') },
  // { title: '购物', icon: require('./img/Home/icon_homepage_shoppingCategory.png') },
  //
  // { title: '丽人/美发', icon: require('./img/Home/icon_homepage_beautyCategory.png') },
  // { title: '电影', icon: require('./img/Home/icon_homepage_movieCategory.png') },
  // { title: '周边游', icon: require('./img/Home/icon_homepage_foottreatCategory.png') },
  // { title: '酒店', icon: require('./img/Home/icon_homepage_hotelCategory.png') },
  // { title: '优惠买单', icon: require('./img/Home/icon_homepage_default.png') },
  // { title: '休闲娱乐', icon: require('./img/Home/icon_homepage_entertainmentCategory.png') },
  // { title: 'KTV', icon: require('./img/Home/icon_homepage_KTVCategory.png') },

  orderInfo: {
    'code': 0,
    'data': {
      'total': 2,
      'orderInfos': [
        {
          'id': '5910094858e8d96ff8b23593',
          'title': '宁靖盐公司“巾帼英雄”展风采',
          'author': '江苏通行宝智慧交通科技有限公司',
          'description': '提供一个基础课程和一个开源的项目，一边学基础一边实战项目。',
          'price': 0.01,
          'start': '2016-10-30T00:00:00.000Z',
          'address': '珠峰',
          'image': 'http://114.215.203.138:8180/img/news2.jpg',
        },
        {
          'id': '591008f458e8d96ff8b23592',
          'title': '一路三方深研究共谋划  部署应对大流量工作',
          'author': '江苏通行宝智慧交通科技有限公司',
          'description': '提供一个基础课程和一个开源的项目，一边学基础一边实战项目。',
          'price': 0.01,
          'start': '2016-10-30T00:00:00.000Z',
          'address': '珠峰',
          'image': ''
        },
        {
          'id': '591008f458e8d96ff8b23592',
          'title': '联网中心组织召开2017年网站信息工作会议',
          'author': '江苏通行宝智慧交通科技有限公司',
          'description': '提供一个基础课程和一个开源的项目，一边学基础一边实战项目。',
          'price': 0.01,
          'start': '2016-10-30T00:00:00.000Z',
          'address': '珠峰',
          'image': 'http://114.215.203.138:8180/img/news1.jpg'
        },

      ],
    },
  },
  orderInfoNone:{
    'code': 201,
  },
  courseInfoNone:{
    'code': 201,
  },
  courseInfo: {
    'code': 0,
    'data': {
      'total': 6,
      'courses': [
        // {
        //   '_id': '5880fcd1fb829056066e8f5e',
        //   'id': '5880fcd1fb829056066e8f5e',
        //   'title': '联网中心组织召开2017年网站信息工作会议',
        //   'author': 'Ramroll',
        //   'author_profile': '完成《珠峰课堂》开发的神秘大牛，3年以上React/ReactNative架构经验，带过10人以上React/ReactNative前端团队。算法和大数据专家。',
        //   'start': '2016-02-10 00:00:00',
        //   'address': '珠峰',
        //   'image': 'http://114.215.203.138:8180/img/news1.jpg',
        //   'hours': 24,
        //   'price': 2000,
        //   'description': '为进一步加强江苏省高速公路联网营运管理中心网站建设，推进路网营运管理信息交流，提升高速公路公共服务水平，2017年4月28日，联网中心组织召开2017年度网站信息工作会议，全路网23家成员单位及联网中心各部门信息员参加了会议。',
        //   '__v': 0,
        //   'weight': 1,
        //   'contents': ['第一部分：IOS和Android环境', '第二部分：React/ReactNative相关基础知识', '第三部分: 《珠峰课堂》实战教学', '第四部分: 《珠峰课堂》架构解读'],
        // },
        {
          '_id': '58c7c8d13b8f8c37e90d8ce3',
          'id': '58c7c8d13b8f8c37e90d8ce3',
          'title': '关于关闭苏通卡阳澄西湖便利点的公告',
          'author': '江苏通行宝智慧交通科技有限公司',
          'start': '2016-10-30 00:00:00',
          'address': '珠峰',
          'image': 'http://114.215.203.138:8180/img/info1.jpg',
          'hours': 24,
          'price': 3000,
          'description': '根据业务调整，我司拟于2017年5月3日起关闭阳澄西湖便利点（G15W常台高速），为满足用户充值需求，目前已在阳澄西湖服务区（东区）大厅内放置自助圈存机。由此给您带来的不便敬请谅解！特此公告。',
          '__v': 0,
          'weight': 0,
          'contents': [' '],
        },
        {
          '_id': '5906933058e8d96ff8b2352b',
          'id': '5906933058e8d96ff8b2352b',
          'title': '关于2017年五一劳动节期间苏通卡客服中心（网点）营业时间安排的公告',
          'author': '江苏通行宝智慧交通科技有限公司',
          'start': '2016-10-30 00:00:00',
          'address': '珠峰',
          'image': '',
          'hours': 24,
          'price': 3000,
          'description': '尊敬的用户：\n您好！\n2017年五一劳动节期间苏通卡客服中心（网点）营业时间安排如下：一、苏通卡客服中心、苏通卡便利点4月29日、4月30日正常营业, 5月1日暂停营业。二、因合署办公，苏通卡太仓（车管所）客服中心4月29日-5月1日暂停营业；苏通卡宜兴（建行）客服中心4月30日正常营业，4月29日、5月1日暂停营业。三、苏通卡充值点仍按其各自营业时间正常营业。四、苏通卡光大银行一站式服务网点、苏通卡建设银行一站式服务网点、苏通卡中信银行一站式服务网点劳动节期间营业时间以银行网点店堂公告为准。特此公告。江苏通行宝智慧交通科技有限公司2017年4月28日',
          '__v': 0,
          'weight': 0,
          'contents': [' '],
        },
        {
          '_id': '5906933058e8d96ff8b2352c',
          'id': '5906933058e8d96ff8b2352c',
          'title': 'nodejs实战',
          'author': '',
          'start': '2016-10-30T00:00:00.000Z',
          'address': '珠峰',
          'image': '',
          'hours': 24,
          'price': 3000,
          'description': '',
          '__v': 0,
          'weight': 0,
          'contents': [' '],
        },
        {
          '_id': '5881048ae947fa55b671beb4',
          'id': '5881048ae947fa55b671beb4',
          'title': 'nodejs实战(测试）',
          'author': 'A老师',
          'start': '2016-10-30T00:00:00.000Z',
          'address': '珠峰',
          'image': 'http://ketang.zhufengpeixun.cn/static/nodejs.jpg',
          'hours': 24,
          'price': 0.01,
          'description': '提供一个基础课程和一个开源的项目，一边学基础一边实战项目。',
          '__v': 0,
          'weight': 0,
          'contents': [' 课程内容'],
        },
      ],
    },
  },
};
export function recommendUrlWithId(id) {
  return 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';
}
export function groupPurchaseDetailWithId(id) {
  return 'http://api.meituan.com/group/v1/deal/list/id/' + id + '?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=4NDQ%2BojQ%2BZGArOWQCEgWI19Pzus%3D&__skno=803C28CE-8BA8-4831-B2DE-7BCD484348D9&__skts=1435888257.411030&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-03-09-14430&userid=10086&utm_campaign=AgroupBgroupC1080988208017226240_c0_e68cafa9e104898bb8bfcd78b64aef671D100Fab_i_group_5_3_poidetaildeallist__a__b___ab_chunceshishuju__a__a___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___b1junglehomepagecatesort__b__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';
}
