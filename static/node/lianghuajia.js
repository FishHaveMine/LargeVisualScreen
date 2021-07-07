/**
 * 拓扑图--量化家
 */
const lianghuajia = [
  /**
   * 用户接入层
   */
  {
    x: 1010,
    y: 1090,
    name: '用户接入层',
    type: 'frame'
  },
  {
    x: 300,
    y: 1020,
    name: 'Nginx接入1',
    type: 'Nginx接入',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [300, 880],
          [500, 880],
          [500, 860],
          [300, 860]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [300, 880],
          [500, 880],
          [500, 860],
          [700, 860]
        ]
      }
    ]
  },
  {
    x: 700,
    y: 1020,
    name: 'Nginx接入2',
    type: 'Nginx接入',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [700, 880],
          [500, 880],
          [500, 860],
          [300, 860]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [700, 880],
          [500, 880],
          [500, 860],
          [700, 860]
        ]
      }
    ]
  },
  /**
   * 消息总线层
   */
  {
    x: 1010,
    y: 840,
    name: '消息总线层',
    type: 'frame'
  },
  {
    x: 300,
    y: 765,
    name: '消息总线1',
    type: '消息总线',
    line: [
      {
        target: 'Nginx接入1',
        status: 0,
        value: [
          [300, 860],
          [500, 860],
          [500, 880],
          [300, 880]
        ]
      },
      {
        target: 'Nginx接入2',
        status: 0,
        value: [
          [300, 860],
          [500, 860],
          [500, 880],
          [700, 880]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [300, 620],
          [200, 620]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [300, 620],
          [400, 620]
        ]
      },
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [300, 620],
          [600, 620]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [300, 620],
          [800, 620]
        ]
      }
    ]
  },
  {
    x: 700,
    y: 765,
    name: '消息总线2',
    type: '消息总线',
    line: [
      {
        target: 'Nginx接入1',
        status: 0,
        value: [
          [700, 860],
          [500, 860],
          [500, 880],
          [300, 880]
        ]
      },
      {
        target: 'Nginx接入2',
        status: 0,
        value: [
          [700, 860],
          [500, 860],
          [500, 880],
          [700, 880]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [700, 620],
          [200, 620]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [700, 620],
          [400, 620]
        ]
      },
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [700, 620],
          [600, 620]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [700, 620],
          [800, 620]
        ]
      }
    ]
  },
  /**
   * 中台服务层
   */
  {
    x: 1010,
    y: 590,
    name: '中台服务层',
    type: 'frame'
  },
  {
    x: 200,
    y: 510,
    name: '中台服务器1',
    type: '中台服务器',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [200, 620],
          [300, 620]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [200, 620],
          [700, 620]
        ]
      },
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [200, 370],
          [80, 370],
          [80, 10]
        ]
      }
    ]
  },
  {
    x: 400,
    y: 510,
    name: '中台服务器2',
    type: '中台服务器',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [400, 620],
          [300, 620]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [400, 620],
          [700, 620]
        ]
      },
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [400, 370],
          [80, 370],
          [80, 10]
        ]
      }
    ]
  },
  {
    x: 600,
    y: 510,
    name: '实盘策略1',
    type: '策略',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [600, 620],
          [300, 620]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [600, 620],
          [700, 620]
        ]
      },
      {
        target: '行情1',
        status: 0,
        value: [
          [600, 350],
          [175, 350]
        ]
      },
      {
        target: '行情2',
        status: 0,
        value: [
          [600, 350],
          [325, 350]
        ]
      },
      {
        target: '行情3',
        status: 0,
        value: [
          [600, 350],
          [475, 350]
        ]
      },
      {
        target: '报盘1',
        status: 0,
        value: [
          [600, 350],
          [625, 350]
        ]
      },
      {
        target: '报盘2',
        status: 0,
        value: [
          [600, 350],
          [775, 350]
        ]
      },
      {
        target: '报盘3',
        status: 0,
        value: [
          [600, 350],
          [925, 350]
        ]
      }
    ]
  },
  {
    x: 800,
    y: 510,
    name: '实盘策略2',
    type: '策略',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [800, 620],
          [300, 620]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [800, 620],
          [700, 620]
        ]
      },
      {
        target: '行情1',
        status: 0,
        value: [
          [800, 350],
          [175, 350]
        ]
      },
      {
        target: '行情2',
        status: 0,
        value: [
          [800, 350],
          [325, 350]
        ]
      },
      {
        target: '行情3',
        status: 0,
        value: [
          [800, 350],
          [475, 350]
        ]
      },
      {
        target: '报盘1',
        status: 0,
        value: [
          [800, 350],
          [625, 350]
        ]
      },
      {
        target: '报盘2',
        status: 0,
        value: [
          [800, 350],
          [775, 350]
        ]
      },
      {
        target: '报盘3',
        status: 0,
        value: [
          [800, 350],
          [925, 350]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [1000, 500],
          [1000, 10]
        ]
      }
    ]
  },
  /**
   * 行情报盘层
   */
  {
    x: 1010,
    y: 340,
    name: '行情报盘层',
    type: 'frame'
  },
  {
    x: 175,
    y: 260,
    name: '行情1',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [175, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [175, 350],
          [800, 350]
        ]
      }
    ]
  },
  {
    x: 325,
    y: 260,
    name: '行情2',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [325, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [325, 350],
          [800, 350]
        ]
      }
    ]
  },
  {
    x: 475,
    y: 260,
    name: '行情3',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [475, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [475, 350],
          [800, 350]
        ]
      }
    ]
  },
  {
    x: 625,
    y: 260,
    name: '报盘1',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [625, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [625, 350],
          [800, 350]
        ]
      }
    ]
  },
  {
    x: 775,
    y: 260,
    name: '报盘2',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [775, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [775, 350],
          [800, 350]
        ]
      }
    ]
  },
  {
    x: 925,
    y: 260,
    name: '报盘3',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [925, 350],
          [600, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [925, 350],
          [800, 350]
        ]
      }
    ]
  },
  /**
   * 数据库层
   */
  {
    x: 1010,
    y: 90,
    name: '数据库层',
    type: 'frame'
  },
  {
    x: 300,
    y: 10,
    name: 'mysqldb1',
    type: '数据库',
    line: [
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [300, 100],
          [450, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [300, 100],
          [600, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [300, 100],
          [750, 100]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [80, 10],
          [80, 370],
          [200, 370]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [80, 10],
          [80, 370],
          [400, 370]
        ]
      }
    ]
  },
  {
    x: 450,
    y: 10,
    name: 'mysqldb2',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [450, 100],
          [300, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [450, 100],
          [600, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [450, 100],
          [750, 100]
        ]
      }
    ]
  },
  {
    x: 600,
    y: 10,
    name: 'mongod1',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [600, 100],
          [300, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [600, 100],
          [450, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [600, 100],
          [750, 100]
        ]
      }
    ]
  },
  {
    x: 750,
    y: 10,
    name: 'mongod2',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [750, 100],
          [300, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [750, 100],
          [450, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [750, 100],
          [600, 100]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [1000, 10],
          [1000, 510]
        ]
      }
    ]
  }
]
export default lianghuajia
