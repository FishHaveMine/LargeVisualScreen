/**
 * 拓扑图--络町pb
 */
const toX = -220
const luodingPB = [
  /**
   * 用户接入层
   */
  {
    x: 760,
    y: 1090,
    name: '用户接入层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 1010,
    name: '接入服务器1',
    type: '中台服务器',
    line: [
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 350, 850],
          [toX + 850, 850],
          [toX + 850, 0]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 350, 850],
          [toX + 220, 850],
          [toX + 220, 0]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 1010,
    name: '接入服务器2',
    type: '中台服务器',
    line: [
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 750, 850],
          [toX + 850, 850],
          [toX + 850, 0]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 750, 850],
          [toX + 220, 850],
          [toX + 220, 0]
        ]
      }
    ]
  },
  /**
   * 外接系统层
   */
  {
    x: 760,
    y: 760 + 80,
    name: '外接系统层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 760,
    name: '接入快速订单',
    type: '接入快速订单',
    line: [

    ]
  },
  {
    x: toX + 750,
    y: 760,
    name: '二级KCXP',
    type: '接入快速订单',
    line: [

    ]
  },
  /**
   * 分仓报盘层
   */
  {
    x: 760,
    y: 585,
    name: '分仓报盘层',
    type: 'frame'
  },
  {
    x: toX + 550,
    y: 500,
    name: '分仓前置',
    type: '磁盘',
    line: [
      {
        target: '接入快速订单',
        status: 0,
        value: [
          [toX + 550, 500],
          [toX + 550, 600],
          [toX + 350, 600]
        ]
      },
      {
        target: '二级KCXP',
        status: 0,
        value: [
          [toX + 550, 500],
          [toX + 550, 600],
          [toX + 750, 600]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 750, 500],
          [toX + 830, 500],
          [toX + 830, 0]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 750, 500],
          [toX + 240, 500],
          [toX + 240, 0]
        ]
      }
    ]
  },
  /**
   * 行情交易服务层
   */
  {
    x: 765,
    y: 253 + 80,
    name: '行情交易服务层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 250,
    name: '期货行情交易服务',
    type: '服务器',
    line: [
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 350, 130],
          [toX + 550, 130],
          [toX + 550, 80],
          [toX + 750, 80],
          [toX + 750, 50]
        ]
      },
      {
        target: '行情服务器',
        status: 0,
        value: [
          [toX + 350, 130],
          [toX + 750, 130]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 250,
    name: '行情服务器',
    type: '中台服务器',
    line: [
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 750, 130],
          [toX + 550, 130],
          [toX + 550, 80],
          [toX + 750, 80],
          [toX + 750, 50]
        ]
      },
      {
        target: '期货行情交易服务',
        status: 0,
        value: [
          [toX + 750, 130],
          [toX + 350, 130]
        ]
      }
    ]
  },
  /**
   * 数据库层
   */
  {
    x: 760,
    y: 80,
    name: '数据库中间件层',
    type: 'frame'
  },
  {
    x: toX + 750,
    y: 0,
    name: 'DB2',
    type: '数据库',
    line: [
      {
        target: '期货行情交易服务',
        status: 0,
        value: [
          [toX + 750, 50],
          [toX + 750, 80],
          [toX + 550, 80],
          [toX + 550, 130],
          [toX + 350, 130]
        ]
      },
      {
        target: '行情服务器',
        status: 0,
        value: [
          [toX + 750, 50],
          [toX + 750, 80],
          [toX + 550, 80],
          [toX + 550, 130],
          [toX + 750, 130]
        ]
      },
      {
        target: '分仓前置',
        status: 0,
        value: [
          [toX + 830, 0],
          [toX + 830, 500]
        ]
      },
      {
        target: '接入服务器1',
        status: 0,
        value: [
          [toX + 850, 0],
          [toX + 850, 850],
          [toX + 350, 850]
        ]
      },
      {
        target: '接入服务器2',
        status: 0,
        value: [
          [toX + 850, 0],
          [toX + 850, 850],
          [toX + 750, 850]
        ]
      }
    ]
  },
  {
    x: toX + 350,
    y: 0,
    name: 'DB1',
    type: '数据库',
    line: [
      {
        target: '期货行情交易服务',
        status: 0,
        value: [
          [toX + 350, 50],
          [toX + 350, 80],
          [toX + 550, 80],
          [toX + 550, 130],
          [toX + 350, 130]
        ]
      },
      {
        target: '行情服务器',
        status: 0,
        value: [
          [toX + 350, 50],
          [toX + 350, 80],
          [toX + 550, 80],
          [toX + 550, 130],
          [toX + 750, 130]
        ]
      },
      {
        target: '分仓前置',
        status: 0,
        value: [
          [toX + 300, 0],
          [toX + 240, 0],
          [toX + 240, 500]
        ]
      },
      {
        target: '接入服务器1',
        status: 0,
        value: [
          [toX + 300, 0],
          [toX + 220, 0],
          [toX + 220, 850],
          [toX + 350, 850]
        ]
      },
      {
        target: '接入服务器2',
        status: 0,
        value: [
          [toX + 300, 0],
          [toX + 220, 0],
          [toX + 220, 850],
          [toX + 750, 850]
        ]
      }
    ]
  }
]
export default luodingPB
