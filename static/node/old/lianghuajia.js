/**
 * 拓扑图--量化家
 */
const lianghuajia = [
  /**
   * 用户接入层
   */
  {
    x: 0,
    y: 1025,
    name: '用户接入层',
    type: 'frame'
  },
  {
    x: 350,
    y: 1000,
    name: 'Nginx接入1',
    type: 'Nginx接入',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [350, 875],
          [550, 875],
          [550, 825],
          [350, 825]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [350, 875],
          [550, 875],
          [550, 825],
          [750, 825]
        ]
      }
    ]
  },
  {
    x: 750,
    y: 1000,
    name: 'Nginx接入2',
    type: 'Nginx接入',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [750, 875],
          [550, 875],
          [550, 825],
          [350, 825]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [750, 875],
          [550, 875],
          [550, 825],
          [750, 825]
        ]
      }
    ]
  },
  /**
   * 消息总线层
   */
  {
    x: 0,
    y: 775,
    name: '消息总线层',
    type: 'frame'
  },
  {
    x: 350,
    y: 750,
    name: '消息总线1',
    type: '消息总线',
    line: [
      {
        target: 'Nginx接入1',
        status: 0,
        value: [
          [350, 825],
          [550, 825],
          [550, 875],
          [350, 875]
        ]
      },
      {
        target: 'Nginx接入2',
        status: 0,
        value: [
          [350, 825],
          [550, 825],
          [550, 875],
          [750, 875]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [350, 600],
          [250, 600]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [350, 600],
          [450, 600]
        ]
      },
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [350, 600],
          [650, 600]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [350, 600],
          [850, 600]
        ]
      }
    ]
  },
  {
    x: 750,
    y: 750,
    name: '消息总线2',
    type: '消息总线',
    line: [
      {
        target: 'Nginx接入1',
        status: 0,
        value: [
          [750, 825],
          [550, 825],
          [550, 875],
          [350, 875]
        ]
      },
      {
        target: 'Nginx接入2',
        status: 0,
        value: [
          [750, 825],
          [550, 825],
          [550, 875],
          [750, 875]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [750, 600],
          [250, 600]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [750, 600],
          [450, 600]
        ]
      },
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [750, 600],
          [650, 600]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [750, 600],
          [850, 600]
        ]
      }
    ]
  },
  /**
   * 中台服务层
   */
  {
    x: 0,
    y: 525,
    name: '中台服务层',
    type: 'frame'
  },
  {
    x: 250,
    y: 500,
    name: '中台服务器1',
    type: '中台服务器',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [250, 600],
          [350, 600]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [250, 600],
          [750, 600]
        ]
      },
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [250, 380],
          [150, 380],
          [150, 100],
          [350, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [250, 380],
          [150, 380],
          [150, 100],
          [475, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [250, 380],
          [150, 380],
          [150, 100],
          [625, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [250, 380],
          [150, 380],
          [150, 100],
          [750, 100]
        ]
      }
    ]
  },
  {
    x: 450,
    y: 500,
    name: '中台服务器2',
    type: '中台服务器',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [450, 600],
          [350, 600]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [450, 600],
          [750, 600]
        ]
      },
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [450, 380],
          [150, 380],
          [150, 100],
          [350, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [450, 380],
          [150, 380],
          [150, 100],
          [475, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [450, 380],
          [150, 380],
          [150, 100],
          [625, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [450, 380],
          [150, 380],
          [150, 100],
          [750, 100]
        ]
      }
    ]
  },
  {
    x: 650,
    y: 500,
    name: '实盘策略1',
    type: '策略',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [650, 600],
          [350, 600]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [650, 600],
          [750, 600]
        ]
      },
      {
        target: '行情1',
        status: 0,
        value: [
          [650, 350],
          [175 + 50, 350]
        ]
      },
      {
        target: '行情2',
        status: 0,
        value: [
          [650, 350],
          [355, 350]
        ]
      },
      {
        target: '行情3',
        status: 0,
        value: [
          [650, 350],
          [475, 350]
        ]
      },
      {
        target: '报盘1',
        status: 0,
        value: [
          [650, 350],
          [625, 350]
        ]
      },
      {
        target: '报盘2',
        status: 0,
        value: [
          [650, 350],
          [775, 350]
        ]
      },
      {
        target: '报盘3',
        status: 0,
        value: [
          [650, 350],
          [925, 350]
        ]
      }
    ]
  },
  {
    x: 850,
    y: 500,
    name: '实盘策略2',
    type: '策略',
    line: [
      {
        target: '消息总线1',
        status: 0,
        value: [
          [850, 600],
          [350, 600]
        ]
      },
      {
        target: '消息总线2',
        status: 0,
        value: [
          [850, 600],
          [750, 600]
        ]
      },
      {
        target: '行情1',
        status: 0,
        value: [
          [850, 350],
          [175 + 50, 350]
        ]
      },
      {
        target: '行情2',
        status: 0,
        value: [
          [850, 350],
          [355, 350]
        ]
      },
      {
        target: '行情3',
        status: 0,
        value: [
          [850, 350],
          [475, 350]
        ]
      },
      {
        target: '报盘1',
        status: 0,
        value: [
          [850, 350],
          [625, 350]
        ]
      },
      {
        target: '报盘2',
        status: 0,
        value: [
          [850, 350],
          [775, 350]
        ]
      },
      {
        target: '报盘3',
        status: 0,
        value: [
          [850, 350],
          [925, 350]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [1000, 500],
          [1000, 0]
        ]
      }
    ]
  },
  /**
   * 行情报盘层
   */
  {
    x: 0,
    y: 275,
    name: '行情报盘层',
    type: 'frame'
  },
  {
    x: 175 + 50,
    y: 250,
    name: '行情1',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [175 + 50, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [175 + 50, 350],
          [850, 350]
        ]
      }
    ]
  },
  {
    x: 355,
    y: 250,
    name: '行情2',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [355, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [355, 350],
          [850, 350]
        ]
      }
    ]
  },
  {
    x: 475,
    y: 250,
    name: '行情3',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [475, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [475, 350],
          [850, 350]
        ]
      }
    ]
  },
  {
    x: 625,
    y: 250,
    name: '报盘1',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [625, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [625, 350],
          [850, 350]
        ]
      }
    ]
  },
  {
    x: 775,
    y: 250,
    name: '报盘2',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [775, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [775, 350],
          [850, 350]
        ]
      }
    ]
  },
  {
    x: 925,
    y: 250,
    name: '报盘3',
    type: '报盘',
    line: [
      {
        target: '实盘策略1',
        status: 0,
        value: [
          [925, 350],
          [650, 350]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [925, 350],
          [850, 350]
        ]
      }
    ]
  },
  /**
   * 数据库层
   */
  {
    x: 0,
    y: 25,
    name: '数据库层',
    type: 'frame'
  },
  {
    x: 350,
    y: 0,
    name: 'mysqldb1',
    type: '数据库',
    line: [
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [350, 100],
          [475, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [350, 100],
          [625, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [350, 100],
          [750, 100]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [350, 100],
          [150, 100],
          [150, 380],
          [250, 380]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [350, 100],
          [150, 100],
          [150, 380],
          [450, 380]
        ]
      }
    ]
  },
  {
    x: 475,
    y: 0,
    name: 'mysqldb2',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [475, 100],
          [350, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [475, 100],
          [625, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [475, 100],
          [750, 100]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [475, 100],
          [150, 100],
          [150, 380],
          [250, 380]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [475, 100],
          [150, 100],
          [150, 380],
          [450, 380]
        ]
      }
    ]
  },
  {
    x: 625,
    y: 0,
    name: 'mongod1',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [625, 100],
          [350, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [625, 100],
          [475, 100]
        ]
      },
      {
        target: 'mongod2',
        status: 0,
        value: [
          [625, 100],
          [750, 100]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [625, 100],
          [150, 100],
          [150, 380],
          [250, 380]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [625, 100],
          [150, 100],
          [150, 380],
          [450, 380]
        ]
      }
    ]
  },
  {
    x: 750,
    y: 0,
    name: 'mongod2',
    type: '数据库',
    line: [
      {
        target: 'mysqldb1',
        status: 0,
        value: [
          [750, 100],
          [350, 100]
        ]
      },
      {
        target: 'mysqldb2',
        status: 0,
        value: [
          [750, 100],
          [475, 100]
        ]
      },
      {
        target: 'mongod1',
        status: 0,
        value: [
          [750, 100],
          [625, 100]
        ]
      },
      {
        target: '实盘策略2',
        status: 0,
        value: [
          [1000, 0],
          [1000, 500]
        ]
      },
      {
        target: '中台服务器1',
        status: 0,
        value: [
          [750, 100],
          [150, 100],
          [150, 380],
          [250, 380]
        ]
      },
      {
        target: '中台服务器2',
        status: 0,
        value: [
          [750, 100],
          [150, 100],
          [150, 380],
          [450, 380]
        ]
      }
    ]
  }
]
export default lianghuajia
