/**
 * 拓扑图--零售
 */
const toX = -170
const toY = -15
const lingshou = [
  /**
   * 外围渠道层
   */
  {
    x: 970,
    y: toY + 985 + 75,
    name: '外围渠道层',
    type: 'frame'
  },
  {
    x: toX + 175,
    y: toY + 985,
    name: 'PC1',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 175, 880],
          [toX + 175, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 175, 880],
          [toX + 175, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 175, 880],
          [toX + 175, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 175, 880],
          [toX + 175, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 275,
    y: toY + 985,
    name: 'PC2',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 275, 880],
          [toX + 275, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 275, 880],
          [toX + 275, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 275, 880],
          [toX + 275, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 275, 880],
          [toX + 275, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 375,
    y: toY + 985,
    name: 'PC3',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 375, 880],
          [toX + 375, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 375, 880],
          [toX + 375, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 375, 880],
          [toX + 375, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 375, 880],
          [toX + 375, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 475,
    y: toY + 985,
    name: 'PC4',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 475, 880],
          [toX + 475, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 475, 880],
          [toX + 475, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 475, 880],
          [toX + 475, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 475, 880],
          [toX + 475, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 575,
    y: toY + 985,
    name: 'PC5',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 575, 880],
          [toX + 575, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 575, 880],
          [toX + 575, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 575, 880],
          [toX + 575, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 575, 880],
          [toX + 575, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 675,
    y: toY + 985,
    name: 'PC6',
    type: 'PC',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 675, 880],
          [toX + 675, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 675, 880],
          [toX + 675, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 675, 880],
          [toX + 675, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 675, 880],
          [toX + 675, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 775,
    y: toY + 985,
    name: '手机1',
    type: 'PHONE',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 775, 880],
          [toX + 775, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 775, 880],
          [toX + 775, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 775, 880],
          [toX + 775, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 775, 880],
          [toX + 775, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 875,
    y: toY + 985,
    name: '手机2',
    type: 'PHONE',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 875, 880],
          [toX + 875, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 875, 880],
          [toX + 875, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 875, 880],
          [toX + 875, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 875, 880],
          [toX + 875, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 975,
    y: toY + 985,
    name: '手机3',
    type: 'PHONE',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 975, 880],
          [toX + 975, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 975, 880],
          [toX + 975, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 975, 880],
          [toX + 975, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 975, 880],
          [toX + 975, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  {
    x: toX + 1075,
    y: toY + 985,
    name: '手机4',
    type: 'PHONE',
    line: [
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 1075, 880],
          [toX + 1075, 850],
          [toX + 300, 850]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 1075, 880],
          [toX + 1075, 850],
          [toX + 500, 850]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 1075, 880],
          [toX + 1075, 850],
          [toX + 700, 850]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 1075, 880],
          [toX + 1075, 850],
          [toX + 900, 850]
        ]
      }
    ]
  },
  /**
   * 总线接入层
   */
  {
    x: 970,
    y: toY + 790 + 75,
    name: 'FS负载均衡层',
    type: 'frame'
  },
  {
    x: toX + 300,
    y: toY + 790,
    name: 'FS1',
    type: 'KCXP',
    line: [
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC2',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 275, 850]
      //   ]
      // },
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC3',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 375, 850]
      //   ]
      // },
      // {
      //   target: 'PC4',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 475, 850]
      //   ]
      // },
      // {
      //   target: 'PC5',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 575, 850]
      //   ]
      // },
      // {
      //   target: 'PC6',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 675, 850]
      //   ]
      // },
      // {
      //   target: '手机1',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 775, 850]
      //   ]
      // },
      // {
      //   target: '手机2',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 875, 850]
      //   ]
      // },
      // {
      //   target: '手机3',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 975, 850]
      //   ]
      // },
      // {
      //   target: '手机4',
      //   status: 0,
      //   value: [
      //     [toX + 300, 850],
      //     [toX + 1075, 850]
      //   ]
      // },
      {
        target: 'KUAB1',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 175, 655]
        ]
      },
      {
        target: 'KUAB2',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'KUAB3',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 425, 655]
        ]
      },
      {
        target: 'KUAB4',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 550, 655]
        ]
      }
      // {
      //   target: '二级KCXP1',
      //   status: 0,
      //   value: [
      //     [toX + 300, 655],
      //     [toX + 675, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP2',
      //   status: 0,
      //   value: [
      //     [toX + 300, 655],
      //     [toX + 800, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP3',
      //   status: 0,
      //   value: [
      //     [toX + 300, 655],
      //     [toX + 925, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP4',
      //   status: 0,
      //   value: [
      //     [toX + 300, 655],
      //     [toX + 1050, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 500,
    y: toY + 790,
    name: 'FS2',
    type: 'KCXP',
    line: [
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC2',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 275, 850]
      //   ]
      // },
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC3',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 375, 850]
      //   ]
      // },
      // {
      //   target: 'PC4',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 475, 850]
      //   ]
      // },
      // {
      //   target: 'PC5',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 575, 850]
      //   ]
      // },
      // {
      //   target: 'PC6',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 675, 850]
      //   ]
      // },
      // {
      //   target: '手机1',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 775, 850]
      //   ]
      // },
      // {
      //   target: '手机2',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 875, 850]
      //   ]
      // },
      // {
      //   target: '手机3',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 975, 850]
      //   ]
      // },
      // {
      //   target: '手机4',
      //   status: 0,
      //   value: [
      //     [toX + 500, 850],
      //     [toX + 1075, 850]
      //   ]
      // },
      {
        target: 'KUAB1',
        status: 0,
        value: [
          [toX + 500, 655],
          [toX + 175, 655]
        ]
      },
      {
        target: 'KUAB2',
        status: 0,
        value: [
          [toX + 500, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'KUAB3',
        status: 0,
        value: [
          [toX + 500, 655],
          [toX + 425, 655]
        ]
      },
      {
        target: 'KUAB4',
        status: 0,
        value: [
          [toX + 500, 655],
          [toX + 550, 655]
        ]
      }
      // {
      //   target: '二级KCXP1',
      //   status: 0,
      //   value: [
      //     [toX + 500, 655],
      //     [toX + 675, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP2',
      //   status: 0,
      //   value: [
      //     [toX + 500, 655],
      //     [toX + 800, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP3',
      //   status: 0,
      //   value: [
      //     [toX + 500, 655],
      //     [toX + 925, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP4',
      //   status: 0,
      //   value: [
      //     [toX + 500, 655],
      //     [toX + 1050, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 700,
    y: toY + 790,
    name: 'FS3',
    type: 'KCXP',
    line: [
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC2',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 275, 850]
      //   ]
      // },
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC3',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 375, 850]
      //   ]
      // },
      // {
      //   target: 'PC4',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 475, 850]
      //   ]
      // },
      // {
      //   target: 'PC5',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 575, 850]
      //   ]
      // },
      // {
      //   target: 'PC6',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 675, 850]
      //   ]
      // },
      // {
      //   target: '手机1',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 775, 850]
      //   ]
      // },
      // {
      //   target: '手机2',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 875, 850]
      //   ]
      // },
      // {
      //   target: '手机3',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 975, 850]
      //   ]
      // },
      // {
      //   target: '手机4',
      //   status: 0,
      //   value: [
      //     [toX + 700, 850],
      //     [toX + 1075, 850]
      //   ]
      // },
      {
        target: 'KUAB1',
        status: 0,
        value: [
          [toX + 700, 655],
          [toX + 175, 655]
        ]
      },
      {
        target: 'KUAB2',
        status: 0,
        value: [
          [toX + 700, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'KUAB3',
        status: 0,
        value: [
          [toX + 700, 655],
          [toX + 425, 655]
        ]
      },
      {
        target: 'KUAB4',
        status: 0,
        value: [
          [toX + 700, 655],
          [toX + 550, 655]
        ]
      }
      // {
      //   target: '二级KCXP1',
      //   status: 0,
      //   value: [
      //     [toX + 700, 655],
      //     [toX + 675, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP2',
      //   status: 0,
      //   value: [
      //     [toX + 700, 655],
      //     [toX + 800, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP3',
      //   status: 0,
      //   value: [
      //     [toX + 700, 655],
      //     [toX + 925, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP4',
      //   status: 0,
      //   value: [
      //     [toX + 700, 655],
      //     [toX + 1050, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 900,
    y: toY + 790,
    name: 'FS4',
    type: 'KCXP',
    line: [
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC2',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 275, 850]
      //   ]
      // },
      // {
      //   target: 'PC1',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 175, 850]
      //   ]
      // },
      // {
      //   target: 'PC3',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 375, 850]
      //   ]
      // },
      // {
      //   target: 'PC4',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 475, 850]
      //   ]
      // },
      // {
      //   target: 'PC5',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 575, 850]
      //   ]
      // },
      // {
      //   target: 'PC6',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 675, 850]
      //   ]
      // },
      // {
      //   target: '手机1',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 775, 850]
      //   ]
      // },
      // {
      //   target: '手机2',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 875, 850]
      //   ]
      // },
      // {
      //   target: '手机3',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 975, 850]
      //   ]
      // },
      // {
      //   target: '手机4',
      //   status: 0,
      //   value: [
      //     [toX + 900, 850],
      //     [toX + 1075, 850]
      //   ]
      // },
      {
        target: 'KUAB1',
        status: 0,
        value: [
          [toX + 900, 655],
          [toX + 175, 655]
        ]
      },
      {
        target: 'KUAB2',
        status: 0,
        value: [
          [toX + 900, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'KUAB3',
        status: 0,
        value: [
          [toX + 900, 655],
          [toX + 425, 655]
        ]
      },
      {
        target: 'KUAB4',
        status: 0,
        value: [
          [toX + 900, 655],
          [toX + 550, 655]
        ]
      }
      // {
      //   target: '二级KCXP1',
      //   status: 0,
      //   value: [
      //     [toX + 900, 655],
      //     [toX + 675, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP2',
      //   status: 0,
      //   value: [
      //     [toX + 900, 655],
      //     [toX + 800, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP3',
      //   status: 0,
      //   value: [
      //     [toX + 900, 655],
      //     [toX + 925, 655]
      //   ]
      // },
      // {
      //   target: '二级KCXP4',
      //   status: 0,
      //   value: [
      //     [toX + 900, 655],
      //     [toX + 1050, 655]
      //   ]
      // }
    ]
  },
  /**
   * 总线服务层
   */
  {
    x: 970,
    y: toY + 595 + 75,
    name: '总线服务层',
    type: 'frame'
  },
  {
    x: toX + 175,
    y: toY + 595,
    name: 'KUAB1',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 175, 455],
          [toX + 425, 455]
        ]
      },
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 175, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 175, 655],
          [toX + 500, 655]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 175, 655],
          [toX + 700, 655]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 175, 655],
          [toX + 900, 655]
        ]
      }
    ]
  },
  {
    x: toX + 300,
    y: toY + 595,
    name: 'KUAB2',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 300, 455],
          [toX + 425, 455]
        ]
      },
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 500, 655]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 700, 655]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 300, 655],
          [toX + 900, 655]
        ]
      }
    ]
  },
  {
    x: toX + 425,
    y: toY + 595,
    name: 'KUAB3',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 425, 455]
        ]
      },
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 425, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 425, 655],
          [toX + 500, 655]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 425, 655],
          [toX + 700, 655]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 425, 655],
          [toX + 900, 655]
        ]
      }
    ]
  },
  {
    x: toX + 550,
    y: toY + 595,
    name: 'KUAB4',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 550, 455],
          [toX + 425, 455]
        ]
      },
      {
        target: 'FS1',
        status: 0,
        value: [
          [toX + 550, 655],
          [toX + 300, 655]
        ]
      },
      {
        target: 'FS2',
        status: 0,
        value: [
          [toX + 550, 655],
          [toX + 500, 655]
        ]
      },
      {
        target: 'FS3',
        status: 0,
        value: [
          [toX + 550, 655],
          [toX + 700, 655]
        ]
      },
      {
        target: 'FS4',
        status: 0,
        value: [
          [toX + 550, 655],
          [toX + 900, 655]
        ]
      }
    ]
  },

  {
    x: toX + 675,
    y: toY + 595,
    name: '二级KCXP1',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 675, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 675, 455],
          [toX + 425, 455]
        ]
      }
      // {
      //   target: 'FS1',
      //   status: 0,
      //   value: [
      //     [toX + 675, 655],
      //     [toX + 300, 655]
      //   ]
      // },
      // {
      //   target: 'FS2',
      //   status: 0,
      //   value: [
      //     [toX + 675, 655],
      //     [toX + 500, 655]
      //   ]
      // },
      // {
      //   target: 'FS3',
      //   status: 0,
      //   value: [
      //     [toX + 675, 655],
      //     [toX + 700, 655]
      //   ]
      // },
      // {
      //   target: 'FS4',
      //   status: 0,
      //   value: [
      //     [toX + 675, 655],
      //     [toX + 900, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 800,
    y: toY + 595,
    name: '二级KCXP2',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 425, 455]
        ]
      }
      // {
      //   target: 'FS1',
      //   status: 0,
      //   value: [
      //     [toX + 800, 655],
      //     [toX + 300, 655]
      //   ]
      // },
      // {
      //   target: 'FS2',
      //   status: 0,
      //   value: [
      //     [toX + 800, 655],
      //     [toX + 500, 655]
      //   ]
      // },
      // {
      //   target: 'FS3',
      //   status: 0,
      //   value: [
      //     [toX + 800, 655],
      //     [toX + 700, 655]
      //   ]
      // },
      // {
      //   target: 'FS4',
      //   status: 0,
      //   value: [
      //     [toX + 800, 655],
      //     [toX + 900, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 925,
    y: toY + 595,
    name: '二级KCXP3',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 925, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 925, 455],
          [toX + 425, 455]
        ]
      }
      // {
      //   target: 'FS1',
      //   status: 0,
      //   value: [
      //     [toX + 925, 655],
      //     [toX + 300, 655]
      //   ]
      // },
      // {
      //   target: 'FS2',
      //   status: 0,
      //   value: [
      //     [toX + 925, 655],
      //     [toX + 500, 655]
      //   ]
      // },
      // {
      //   target: 'FS3',
      //   status: 0,
      //   value: [
      //     [toX + 925, 655],
      //     [toX + 700, 655]
      //   ]
      // },
      // {
      //   target: 'FS4',
      //   status: 0,
      //   value: [
      //     [toX + 925, 655],
      //     [toX + 900, 655]
      //   ]
      // }
    ]
  },
  {
    x: toX + 1050,
    y: toY + 595,
    name: '二级KCXP4',
    type: 'KCXP',
    line: [
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 1050, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 1050, 455],
          [toX + 425, 455]
        ]
      }
      // {
      //   target: 'FS1',
      //   status: 0,
      //   value: [
      //     [toX + 1050, 655],
      //     [toX + 300, 655]
      //   ]
      // },
      // {
      //   target: 'FS2',
      //   status: 0,
      //   value: [
      //     [toX + 1050, 655],
      //     [toX + 500, 655]
      //   ]
      // },
      // {
      //   target: 'FS3',
      //   status: 0,
      //   value: [
      //     [toX + 1050, 655],
      //     [toX + 700, 655]
      //   ]
      // },
      // {
      //   target: 'FS4',
      //   status: 0,
      //   value: [
      //     [toX + 1050, 655],
      //     [toX + 900, 655]
      //   ]
      // }
    ]
  },
  /**
   * 金证接入层
   */
  {
    x: 970,
    y: toY + 400 + 75,
    name: '金证接入层',
    type: 'frame'
  },
  {
    x: toX + 425,
    y: toY + 400,
    name: '一级KCXP1',
    type: 'KCXP',
    line: [
      {
        target: 'KCBP1',
        status: 0,
        value: []
      },
      {
        target: 'KCBP2',
        status: 0,
        value: [
          [toX + 425, 260],
          [toX + 800, 260]
        ]
      },
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 425, 260],
          [toX + 800, 260]
        ]
      },
      {
        target: 'KUAB1',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 175, 455]
        ]
      },
      {
        target: 'KUAB2',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 300, 455]
        ]
      },
      {
        target: 'KUAB3',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 425, 455]
        ]
      },
      {
        target: 'KUAB4',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 550, 455]
        ]
      },
      {
        target: '二级KCXP1',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 675, 455]
        ]
      },
      {
        target: '二级KCXP2',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '二级KCXP3',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 925, 455]
        ]
      },
      {
        target: '二级KCXP4',
        status: 0,
        value: [
          [toX + 425, 455],
          [toX + 1050, 455]
        ]
      }
    ]
  },
  {
    x: toX + 800,
    y: toY + 400,
    name: '一级KCXP2',
    type: 'KCXP',
    line: [
      {
        target: 'KCBP2',
        status: 0,
        value: []
      },
      {
        target: 'KCBP1',
        status: 0,
        value: [
          [toX + 800, 260],
          [toX + 425, 260]
        ]
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 800, 260],
          [toX + 425, 260]
        ]
      },
      {
        target: '二级KCXP1',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 675, 455]
        ]
      },
      {
        target: '二级KCXP2',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 800, 455]
        ]
      },
      {
        target: '二级KCXP3',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 925, 455]
        ]
      },
      {
        target: '二级KCXP4',
        status: 0,
        value: [
          [toX + 800, 455],
          [toX + 1050, 455]
        ]
      }
    ]
  },
  /**
   * 金证中间件层
   */
  {
    x: 970,
    y: toY + 203 + 75,
    name: '金证中间件层',
    type: 'frame'
  },
  {
    x: toX + 425,
    y: toY + 200,
    name: 'KCBP1',
    type: 'KCBP',
    line: [
      {
        target: '一级KCXP1',
        status: 0,
        value: []
      },
      {
        target: '一级KCXP2',
        status: 0,
        value: [
          [toX + 425, 260],
          [toX + 800, 260]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: []
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 425, 60],
          [toX + 800, 60]
        ]
      },
      {
        target: 'KCBP2',
        status: 0,
        value: [
          [toX + 425, 60],
          [toX + 800, 60]
        ]
      }
    ]
  },
  {
    x: toX + 800,
    y: toY + 200,
    name: 'KCBP2',
    type: 'KCBP',
    line: [
      {
        target: '一级KCXP2',
        status: 0,
        value: []
      },
      {
        target: '一级KCXP1',
        status: 0,
        value: [
          [toX + 800, 260],
          [toX + 425, 260]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: []
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 800, 60],
          [toX + 425, 60]
        ]
      },
      {
        target: 'KCBP1',
        status: 0,
        value: [
          [toX + 800, 60],
          [toX + 425, 60]
        ]
      }
    ]
  },
  /**
   * 数据库层
   */
  {
    x: 970,
    y: toY + 83,
    name: '数据库层',
    type: 'frame'
  },
  {
    x: toX + 425,
    y: toY + 0,
    name: 'DB1',
    type: '数据库',
    line: [
      {
        target: 'KCBP1',
        status: 0,
        value: []
      },
      {
        target: 'KCBP2',
        status: 0,
        value: [
          [toX + 425, 60],
          [toX + 800, 60]
        ]
      },
      {
        target: 'DB2',
        status: 0,
        value: [
          [toX + 425, 60],
          [toX + 800, 60]
        ]
      }
    ]
  },
  {
    x: toX + 800,
    y: toY + 0,
    name: 'DB2',
    type: '数据库',
    line: [
      {
        target: 'KCBP2',
        status: 0,
        value: []
      },
      {
        target: 'KCBP1',
        status: 0,
        value: [
          [toX + 800, 60],
          [toX + 425, 60]
        ]
      },
      {
        target: 'DB1',
        status: 0,
        value: [
          [toX + 800, 60],
          [toX + 425, 60]
        ]
      }
    ]
  }
]
export default lingshou
