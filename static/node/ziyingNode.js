/**
 * 拓扑图--自营
 */
const toX = -80
const toY = 10
const ziyingNode = [
  /**
   * 行情落地报盘层
   */
  {
    x: 1030,
    y: 1105,
    name: '行情落地报盘层',
    type: 'frame'
  },
  {
    x: toX + 225,
    y: toY + 980,
    name: '行情落地',
    type: '行情',
    status: 0
  },
  {
    x: toX + 375,
    y: toY + 980,
    name: '北京报盘',
    type: '报盘',
    status: 0,
    line: [
      {
        target: '交易转换机',
        status: 0,
        value: [
          [toX + 375, toY + 825],
          [toX + 575, toY + 825]
        ]
      }
    ]
  },
  {
    x: toX + 525,
    y: toY + 980,
    name: '上海报盘1',
    type: '报盘',
    status: 0,
    line: [
      {
        target: '交易转换机',
        status: 0,
        value: [
          [toX + 525, toY + 825],
          [toX + 575, toY + 825]
        ]
      }
    ]
  },
  {
    x: toX + 675,
    y: toY + 980,
    name: '上海报盘2',
    type: '报盘',
    status: 0,
    line: [
      {
        target: '交易转换机',
        status: 0,
        value: [
          [toX + 675, toY + 825],
          [toX + 575, toY + 825]
        ]
      }
    ]
  },
  {
    x: toX + 825,
    y: toY + 980,
    name: '深圳报盘',
    type: '报盘',
    status: 0,
    line: [
      {
        target: '交易转换机',
        status: 0,
        value: [
          [toX + 825, toY + 825],
          [toX + 575, toY + 825]
        ]
      }
    ]
  },
  {
    x: toX + 1000,
    y: toY + 980,
    name: '二级KCXP',
    type: 'KCXP',
    status: 0
  },
  /**
   * 交易行情转换层
   */
  {
    x: 1030,
    y: 803,
    name: '交易行情转换层',
    type: 'frame'
  },
  {
    x: toX + 575,
    y: toY + 675,
    name: '交易转换机',
    type: '交换机',
    status: 0,
    line: [
      {
        target: '北京报盘',
        status: 0,
        value: [
          [toX + 575, toY + 825],
          [toX + 375, toY + 825]
        ]
      },
      {
        target: '上海报盘1',
        status: 0,
        value: [
          [toX + 575, toY + 825],
          [toX + 525, toY + 825]
        ]
      },
      {
        target: '上海报盘2',
        status: 0,
        value: [
          [toX + 575, toY + 825],
          [toX + 675, toY + 825]
        ]
      },
      {
        target: '深圳报盘',
        status: 0,
        value: [
          [toX + 575, toY + 825],
          [toX + 825, toY + 825]
        ]
      },
      {
        target: '中间件as、ar',
        status: 0,
        value: [
          [toX + 575, toY + 525],
          [toX + 375, toY + 525]
        ]
      }
      // {
      //   target: '中间件as、ar2',
      //   status: 0,
      //   value: [
      //     [toX + 575, toY + 525],
      //     [toX + 775, toY + 525]
      //   ]
      // }
    ]
  },
  {
    x: toX + 225,
    y: toY + 675,
    name: '行情转换机',
    type: '交换机',
    status: 0,
    line: [
      {
        target: '行情落地',
        status: 0,
        value: []
      },
      {
        target: '中间件as、ar',
        status: 0,
        value: [
          [toX + 225, toY + 525],
          [toX + 375, toY + 525]
        ]
      },
      // {
      //   target: '中间件as、ar2',
      //   status: 0,
      //   value: [
      //     [toX + 225, toY + 525],
      //     [toX + 775, toY + 525]
      //   ]
      // },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 135, toY + 675],
          [toX + 135, toY + 75]
        ]
      }
    ]
  },
  {
    x: toX + 1000,
    y: toY + 675,
    name: '分仓报盘',
    type: '报盘',
    status: 0,
    line: [
      {
        target: '二级KCXP',
        status: 0,
        value: []
      },
      {
        target: '中间件as、ar',
        status: 0,
        value: [
          [toX + 1000, toY + 525],
          [toX + 375, toY + 525]
        ]
      }
      // {
      //   target: '中间件as、ar2',
      //   status: 0,
      //   value: [
      //     [toX + 1000, toY + 525],
      //     [toX + 775, toY + 525]
      //   ]
      // }
    ]
  },
  /**
   * 恒生中间件层
   */
  {
    x: 1030,
    y: 500,
    name: '恒生中间件层',
    type: 'frame'
  },
  {
    x: toX + 375,
    y: toY + 375,
    name: '中间件as、ar',
    type: '中间件',
    status: 0,
    line: [
      {
        target: 'DB1',
        status: 0,
        value: [ ]
      },
      // {
      //   target: '中间件as、ar2',
      //   status: 0,
      //   value: [ ]
      // },
      {
        target: '行情转换机',
        status: 0,
        value: [
          [toX + 375, toY + 525],
          [toX + 225, toY + 525]
        ]
      },
      {
        target: '交易转换机',
        status: 0,
        value: [
          [toX + 375, toY + 525],
          [toX + 575, toY + 525]
        ]
      },
      {
        target: '分仓报盘',
        status: 0,
        value: [
          [toX + 375, toY + 525],
          [toX + 1000, toY + 525]
        ]
      }
    ]
  },
  // {
  //   x: toX + 775,
  //   y: toY + 375,
  //   name: '中间件as、ar2',
  //   type: '中间件',
  //   status: 0,
  //   line: [
  //     {
  //       target: 'DB2',
  //       status: 0,
  //       value: [ ]
  //     },
  //     {
  //       target: '中间件as、ar',
  //       status: 0,
  //       value: []
  //     },
  //     {
  //       target: '行情转换机',
  //       status: 0,
  //       value: [
  //         [toX + 775, toY + 525],
  //         [toX + 225, toY + 525]
  //       ]
  //     },
  //     {
  //       target: '交易转换机',
  //       status: 0,
  //       value: [
  //         [toX + 775, toY + 525],
  //         [toX + 575, toY + 525]
  //       ]
  //     },
  //     {
  //       target: '分仓报盘',
  //       status: 0,
  //       value: [
  //         [toX + 775, toY + 525],
  //         [toX + 1000, toY + 525]
  //       ]
  //     }
  //   ]
  // },
  /**
   * 恒生中间件层
   */
  {
    x: 1030,
    y: 195,
    name: '数据库层',
    type: 'frame'
  },
  // {
  //   x: 500,
  //   y: 80,
  //   width: 500,
  //   height: 100,
  //   name: 'DB关系框',
  //   type: 'relation'
  // },
  {
    x: toX + 375,
    y: toY + 75,
    name: 'DB1',
    type: '数据库',
    status: 0,
    line: [
      {
        target: '中间件as、ar',
        status: 0,
        value: [ ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [ ]
      },
      {
        target: '行情转换机',
        status: 0,
        value: [
          [toX + 135, toY + 75],
          [toX + 135, toY + 675]
        ]
      }
    ]
  },
  {
    x: toX + 775,
    y: toY + 75,
    name: 'DB2',
    type: '数据库',
    status: 0,
    line: [
      {
        target: 'DB1',
        status: 0,
        value: [ ]
      }
    ]
  }
]
export default ziyingNode
