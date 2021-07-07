const toX = -120
/**
 * 拓扑图--迅投pb
 */
const xuntouPB = [
  /**
   * 外接系统层
   */
  {
    x: 935,
    y: 1090,
    name: '外接系统层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 1020,
    name: '二级KCXP1',
    type: 'KCXP',
    line: [
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [350 + toX, 880],
          [550 + toX, 880],
          [550 + toX, 860],
          [350 + toX, 860]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [350 + toX, 880],
          [550 + toX, 880],
          [550 + toX, 860],
          [750 + toX, 860]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 1020,
    name: '二级KCXP2',
    type: 'KCXP',
    line: [
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [750 + toX, 880],
          [550 + toX, 880],
          [550 + toX, 860],
          [350 + toX, 860]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [750 + toX, 880],
          [550 + toX, 880],
          [550 + toX, 860],
          [750 + toX, 860]
        ]
      }
    ]
  },
  /**
   * 交易服务层
   */
  {
    x: 935,
    y: 760 + 80,
    name: '交易服务层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 765,
    name: '交易前置机1',
    type: '磁盘',
    line: [
      {
        target: '二级KCXP1',
        status: 0,
        value: [
          [350 + toX, 860],
          [550 + toX, 860],
          [550 + toX, 880],
          [350 + toX, 880]
        ]
      },
      {
        target: '二级KCXP2',
        status: 0,
        value: [
          [350 + toX, 860],
          [550 + toX, 860],
          [550 + toX, 880],
          [750 + toX, 880]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [350 + toX, 600],
          [125 + toX, 600],
          [125 + toX, 10]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [350 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [250 + toX, 330]
        ]
      },
      {
        target: '行情前置机2',
        status: 0,
        value: [
          [350 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [450 + toX, 330]
        ]
      },
      {
        target: '期货行情交易1',
        status: 0,
        value: [
          [350 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [650 + toX, 330]
        ]
      },
      {
        target: '期货行情交易2',
        status: 0,
        value: [
          [350 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [900 + toX, 330]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 765,
    name: '交易前置机2',
    type: '磁盘',
    line: [
      {
        target: '二级KCXP1',
        status: 0,
        value: [
          [750 + toX, 860],
          [550 + toX, 860],
          [550 + toX, 880],
          [350 + toX, 880]
        ]
      },
      {
        target: '二级KCXP2',
        status: 0,
        value: [
          [750 + toX, 860],
          [550 + toX, 860],
          [550 + toX, 880],
          [750 + toX, 880]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [750 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [250 + toX, 330]
        ]
      },
      {
        target: '行情前置机2',
        status: 0,
        value: [
          [750 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [450 + toX, 330]
        ]
      },
      {
        target: '期货行情交易1',
        status: 0,
        value: [
          [750 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [650 + toX, 330]
        ]
      },
      {
        target: '期货行情交易2',
        status: 0,
        value: [
          [750 + toX, 600],
          [550 + toX, 600],
          [550 + toX, 330],
          [900 + toX, 330]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [750 + toX, 600],
          [125 + toX, 600],
          [125 + toX, 10]
        ]
      }
    ]
  },
  /**
   * 行情服务层
   */
  {
    x: 935,
    y: 510 + 80,
    name: '行情服务层',
    type: 'frame'
  },
  {
    x: toX + 250,
    y: 510,
    name: '行情前置机1',
    type: '磁盘',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [250 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [250 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [250 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [125 + toX, 510],
          [125 + toX, 10]
        ]
      },
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [250 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [350 + toX, 600]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [250 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [750 + toX, 600]
        ]
      }
    ]
  },
  {
    x: toX + 450,
    y: 510,
    name: '行情前置机2',
    type: '磁盘',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [450 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [450 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [450 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10]
        ]
      },
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [450 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [350 + toX, 600]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [450 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [750 + toX, 600]
        ]
      }
    ]
  },
  {
    x: toX + 650,
    y: 510,
    name: '期货行情交易1',
    type: '行情',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [650 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [650 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [650 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10]
        ]
      },
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [650 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [350 + toX, 600]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [650 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [750 + toX, 600]
        ]
      }
    ]
  },
  {
    x: toX + 900,
    y: 510,
    name: '期货行情交易2',
    type: '行情',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [900 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [900 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10],
          [750 + toX, 10],
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [900 + toX, 330],
          [950 + toX, 330],
          [950 + toX, 10]
        ]
      },
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [900 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [350 + toX, 600]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [900 + toX, 330],
          [550 + toX, 330],
          [550 + toX, 600],
          [750 + toX, 600]
        ]
      }
    ]
  },
  /**
   * 算法服务层
   */
  {
    x: 935,
    y: 260 + 80,
    name: '算法服务层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 260,
    name: '算法服务1',
    type: '策略',
    line: [
      {
        target: 'DB1',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [350 + toX, 100]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100]
        ]
      },
      {
        target: '期货行情交易2',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [900 + toX, 330]
        ]
      },
      {
        target: '期货行情交易1',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [650 + toX, 330]
        ]
      },
      {
        target: '行情前置机2',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [450 + toX, 330]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [350 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [250 + toX, 330]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 260,
    name: '算法服务2',
    type: '策略',
    line: [
      {
        target: 'DB1',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [350 + toX, 100]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100]
        ]
      },
      {
        target: '期货行情交易2',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [900 + toX, 330]
        ]
      },
      {
        target: '期货行情交易1',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [650 + toX, 330]
        ]
      },
      {
        target: '行情前置机2',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [450 + toX, 330]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [750 + toX, 125],
          [550 + toX, 125],
          [550 + toX, 100],
          [750 + toX, 100],
          [750 + toX, 10],
          [950 + toX, 10],
          [950 + toX, 330],
          [250 + toX, 330]
        ]
      }
    ]
  },
  /**
   * 数据库层
   */
  {
    x: 935,
    y: 90,
    name: '数据库中间件层',
    type: 'frame'
  },
  {
    x: toX + 350,
    y: 10,
    name: 'DB1',
    type: '数据库',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [350 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [350 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [125 + toX, 10],
          [125 + toX, 510]
        ]
      },
      {
        target: '交易前置机1',
        status: 0,
        value: [
          [125 + toX, 10],
          [125 + toX, 600],
          [350 + toX, 600]
        ]
      },
      {
        target: '交易前置机2',
        status: 0,
        value: [
          [125 + toX, 10],
          [125 + toX, 600],
          [750 + toX, 600]
        ]
      }
    ]
  },
  {
    x: toX + 750,
    y: 10,
    name: 'DB2',
    type: '数据库',
    line: [
      {
        target: '算法服务1',
        status: 0,
        value: [
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [350 + toX, 125]
        ]
      },
      {
        target: '算法服务2',
        status: 0,
        value: [
          [750 + toX, 100],
          [550 + toX, 100],
          [550 + toX, 125],
          [750 + toX, 125]
        ]
      },
      {
        target: '行情前置机1',
        status: 0,
        value: [
          [950 + toX, 10],
          [950 + toX, 330],
          [250 + toX, 330]
        ]
      },
      {
        target: '行情前置机2',
        status: 0,
        value: [
          [950 + toX, 10],
          [950 + toX, 330],
          [450 + toX, 330]
        ]
      },
      {
        target: '期货行情交易1',
        status: 0,
        value: [
          [950 + toX, 10],
          [950 + toX, 330],
          [650 + toX, 330]
        ]
      },
      {
        target: '期货行情交易2',
        status: 0,
        value: [
          [950 + toX, 10],
          [950 + toX, 330],
          [900 + toX, 330]
        ]
      }
    ]
  }
]
export default xuntouPB
