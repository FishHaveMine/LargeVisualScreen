/**
 * 对象说明
 * @BaseUrl 全局websockUrl配置，url已废置，启用websockUrl
 *
 */
window.BaseHost = {
  websockUrl: '', // 默认socket路径
  host: '100.26.6.82:8080',
  dailyhost: '100.26.6.82:8080',
  ZBQhost: '100.26.6.82:8080',
  method: 'get' // 废置属性
}
window.BaseUrl = {
  leftHeader: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItLeftTopwebSocket/admin'
  },
  leftCenter: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItLeftMiddleWebSocket/admin'
  },
  leftBottom: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItLeftBottomWebSocket/admin'
  },

  centerMap: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItMiddlesWebSocket/admin'
  },

  rightHeader: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItRightTopWebSocket/admin'
  },
  rightCenter: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItRightMiddleWebSocket/admin'
  },
  rightBottom: {
    websockUrl: 'ws://' + window.BaseHost.host + '/wukangscreen/ItRightBottomWebSocket/admin'
  },

  dailyLeftHeader: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daLeftTopWebSocket/admin'
  },
  dailyLeftCenter: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daLeftMiddlesWebSocket/admin'
  },
  dailyLeftBottom: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daLeftBottomWebSocket/admin'
  },
  dailyCenterHeader: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreLeftWebSocket/admin'
  },
  dailyCenterCenter: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreMiddleWebSocket/admin'
  },
  dailyCenterBottom: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreRightWebSocket/admin'
  },
  dailyRightHeader: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daRightTopWebSocket/admin'
  },
  dailyRightCenter: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daRightMiddlesWebSocket/admin'
  },
  dailyRightBottom: {
    websockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daRightBottomWebSocket/admin'
  },

  dailyCenterMain: {
    ListWebsockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreTopListViewWebSocket/admin',
    MapWebsockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/ItMiddlesWebSocket/admin',
    TuoPuWebsockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreTopFengGTopoWebSocket/',
    JingFangWebsockUrl: 'ws://' + window.BaseHost.dailyhost + '',
    JiGuiWebsockUrl: 'ws://' + window.BaseHost.dailyhost + '/wukangscreen/daCentreTopRoomFaceUpWebSocket/admin'
  },
  zaibeiUrl: {
    leftWebsockUrl: 'ws://' + window.BaseHost.ZBQhost + '/wukangscreen/DiLeftWebSocket/admin',
    rightWebsockUrl: 'ws://' + window.BaseHost.ZBQhost + '/wukangscreen/DiRightWebSocket/admin',
    centerWebsockUrl: 'ws://' + window.BaseHost.ZBQhost + ''
  }
}

/**
 * @Object 五矿大屏项目_IT综合运行视图，全局对象 ------ start
 */

/**
 * 对象说明
 * @footerCharts 地图下图表数据对象，可修改匹配对应指标、展示标题
 *  title: 图表标题,
 *  type: 图表类型( interval:柱状图,  line:折线图 )
 *  indicateNameList: 匹配接口指标名
 *  result: 数据存款对象  不能删除
 */
window.footerCharts = [
  {
    title: '委托笔数top5营业部', // 图表标题
    type: 'interval', // 图表类型
    indicateNameList: ['委托笔数top5营业部'], // 匹配接口指标名
    result: []
  },
  {
    title: '当日委托笔数',
    type: 'line',
    indicateNameList: ['当日委托笔数'],
    result: []
  },
  {
    title: '成交金额top5营业部',
    type: 'interval',
    indicateNameList: ['成交金额top5营业部'],
    result: []
  },
  {
    title: '当日成交笔数',
    type: 'line',
    indicateNameList: ['当日成交笔数'],
    result: []
  },
  {
    title: '当日证转银笔数，银转证笔数',
    type: 'line',
    indicateNameList: ['证转银银转证笔数'],
    result: []
  },
  {
    title: '当日各个银行转入金额',
    type: 'interval',
    indicateNameList: ['各银行转入金额'],
    result: []
  },
  {
    title: '当日证转银金额，银转证金额',
    type: 'line',
    indicateNameList: ['证转银银转证金额'],
    result: []
  },
  {
    title: '当日成交总金额',
    type: 'line',
    indicateNameList: ['当日成交总金额'],
    result: []
  },
  {
    title: '银证开户数排名',
    type: 'interval',
    indicateNameList: ['银证开户数排名'],
    result: []
  }
]

/**
 * 对象说明
 * @ObjectOrder 左下角金字塔指标排序
 *
 */
window.ObjectOrder = {
  leftBottom: ['外围系统在线人数', '外围系统登录人次', '当日连接数峰值', '站点连接数']
}

/**
 * 对象说明
 * @righHeader 右上角第一版指标展示
 *  chartsIndicate: 饼状图匹配指标名称
 *  bottomLeft: 机房托盘图表匹配接口对象
 *  bottomCenter: 虚拟机3D柱子匹配接口对象
 *  bottomRight: 系统托盘图表匹配接口对象
 */
window.righHeader = {
  chartsIndicate: ['网络设备类型', '数据库类型', '网络设备厂商'],
  bottomLeft: {
    indicateName: '机房主机数量', // 匹配接口指标
    showIndicateName: ['深圳后海', '东莞凤岗', '上海金桥'] // 匹配指标属性
  },
  bottomCenter: {
    indicateName: '虚机实机',
    showIndicateName: ['虚拟机', '实体机']
  },
  bottomRight: {
    indicateName: '操作系统类型',
    showIndicateName: ['linux', 'windows', 'unix']
  }
}

/**
 * 对象说明
 * @righBottom 右上角第三版指标展示
 *  runningBor只支持6个类型
 */
window.righBottom = {
  headerIndicate: ['核心交易系统客户总量', '两融系统客户总量'],
  runningBor: {
    indicateName: '业务系统统计',
    showType: ['外围交易', '基础支撑', '员工服务', '交易服务', '核心交易', '客户服务']
  }
}

/**
 * @Object 五矿大屏项目_IT综合运行视图，全局对象 ------ end
 */

/**
 * @Object 五矿证券大屏项目_日常运维大屏，全局对象 ------ start
 */
window.dailyLeftHeader = {
  title: '容量折线图-零售',
  order: ['线路', '外围', 'FS网关', 'KCXP', 'KCBP', '数据库']
}
window.dailyLeftCenter = [
  {
    title: '容量折线图-机构-恒生pb',
    order: ['中间件ar', 'as', '算法服务', '数据库']
  },
  {
    title: '容量折线图-机构-迅投pb',
    order: ['前置机', '算法服务器', '数据库']
  }, {
    title: '容量折线图-机构-络町pb',
    order: ['分仓报盘', '行情交易', '数据库']
  }
]
window.dailyLeftBottom = [
  {
    title: '容量折线图-机构-量化家',
    order: ['行情、报盘1', '行情、报盘2', '行情、报盘3', '行情、报盘4', '数据库3', '数据库4', 'nginx接入', '消息总线', '中台服务器', '行情、报盘', '数据库']
  },
  {
    title: '容量折线-自营',
    order: ['数据库', '交易、行情转换机', 'as', '恒生O32中间件ar']
  }
]

window.dailyCenterHeader = {
  cloudList: [
    {
      title: '私有云总览',
      group: '私有云总览',
      privateOrder: ['CPU总量', 'CPU用量', '内存总量', '集群', '宿主机', '内存使用', '产品']
    },
    {
      title: '费用展示（元）',
      group: '费用展示'
    },
    {
      title: '告警信息',
      group: '告警信息'
    },
    {
      title: '生产云',
      group: '生产云',
      order: ['集群', '宿主机', 'cpu总量', 'cpu用量', '内存总量', '内存使用']
    },
    {
      title: '开发云',
      group: '开发云',
      order: ['集群', '宿主机', 'cpu总量', 'cpu用量', '内存总量', '内存使用']
    },
    {
      title: '灾备云',
      group: '灾备云',
      order: ['集群', '宿主机', 'cpu总量', 'cpu用量', '内存总量', '内存使用']
    },
    {
      title: '测试云',
      group: '测试云',
      order: ['集群', '宿主机', 'cpu总量', 'cpu用量', '内存总量', '内存使用']
    },
    {
      title: '虚拟机创建趋势',
      group: '虚拟机创建趋势'
    },
    {
      title: '订单申请趋势',
      group: '订单申请趋势'
    },
    {
      title: '虚拟机CPU TOP5',
      group: '虚拟机CPUTOP5'
    },
    {
      title: '内存利用率 TOP5',
      group: '内存利用率TOP5'
    }
  ],
  centerTableMax: 20,
  centerList: [
    {
      title: '19F测试机房',
      group: '19F测试机房'
    },
    {
      title: '19F测试机房',
      group: '19F测试机房电柜'
    },
    {
      title: '19F门禁空调运行状态',
      group: '19F门禁空调运行状态'
    },
    {
      title: '19F-25F配线间',
      group: '19F至25F配线间'
    },
    {
      title: '19F-25F配线间',
      group: '19F至25F配线间电柜'
    },
    {
      title: '19F-25F门禁、抽风机运行状态',
      group: '19F至25F门禁抽风机运行状态'
    }
  ]
}

window.dailyCenterBottom = {
  title: '6F机房监控',
  groupOrder: [
    '6F机房监控left',
    '6F机房监控电压left',
    '6F机房监控用电量left',
    '6F机房监控门禁left',

    '6F机房监控right',
    '6F机房监控电压left',
    '6F机房监控用电量right',
    '6F机房监控门禁right'
  ]
}
/**
 * @Object 五矿证券大屏项目_日常运维大屏，全局对象 ------ end
 */
