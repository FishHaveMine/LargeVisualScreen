/**
 * 拓扑图--东莞凤岗网络拓扑
 */
const nodeInfo = [
  {
    x: 550,
    y: 980,
    name: '电信',
    type: '电信',
    nodetype: 'node',
    showLable: true,
    position: 'right'
  },
  {
    x: 700,
    y: 980,
    name: '移动',
    type: '移动',
    nodetype: 'node',
    showLable: true,
    position: 'right'
  },
  {
    x: 850,
    y: 980,
    name: '联通',
    type: '联通',
    nodetype: 'node',
    showLable: true,
    position: 'right'
  },
  /**
     * 线路接入层
     */
  {
    x: 700,
    y: 880,
    width: 1450,
    height: 160,
    name: '线路接入层',
    type: '接入',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 625,
    y: 890,
    name: 'FG-INT-S2960-01',
    type: '接入',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 775,
    y: 890,
    name: 'FG-INT-S2960-02',
    type: '接入',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * ALLOT 流控,WAF,ADS DDOS
     */
  {
    x: 280,
    y: 880,
    name: 'ALLOT流控',
    type: 'ADSDDOS',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 360,
    y: 880,
    name: 'WAF',
    type: 'ADSDDOS',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 440,
    y: 880,
    name: 'ADSDDOS',
    type: 'ADSDDOS',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 互联网DMZ区
     */
  {
    x: 525,
    y: 740,
    width: 850,
    height: 180,
    name: '互联网DMZ区',
    type: '互联网DMZ区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 470,
    y: 740,
    name: 'FG-INT-F3220-01',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 590,
    y: 740,
    name: 'FG-INT-F3220-02',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 营业部DMZ区
     */
  {
    x: 870,
    y: 740,
    width: 850,
    height: 180,
    name: '营业部DMZ区',
    type: '营业部DMZ区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 810,
    y: 740,
    name: 'FG-SOD-F2860-01',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 930,
    y: 740,
    name: 'FG-SOD-F2860-02',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
   * 后海机房
   */
  {
    x: 1090,
    y: 650,
    name: '后海机房',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 防火墙1,防火墙2
     */
  {
    x: 590,
    y: 600,
    name: 'FG-COR-F5260-01',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 810,
    y: 600,
    name: 'FG-COR-F5260-02',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * FG-COR-S9504
     */
  {
    x: 470,
    y: 500,
    name: 'FG-COR-S9504-01',
    type: 'FGCOR',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 930,
    y: 500,
    name: 'FG-COR-S9504-02',
    type: 'FGCOR',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 防火墙3,防火墙4
     */
  {
    x: 0,
    y: 450,
    name: 'FG-EXT-F2860-01',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 80,
    y: 450,
    name: 'FG-EXT-F2860-02',
    type: '防火墙',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 外联区
     */
  {
    x: 40,
    y: 195,
    width: 600,
    height: 400,
    name: '外联区',
    type: '外联区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 0,
    y: 260,
    name: 'FG-EXT-S2960-01',
    type: '交换机',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 80,
    y: 260,
    name: 'FG-EXT-S2960-02',
    type: '交换机',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 0,
    y: 160,
    name: 'FG-EXT-R4331-01',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 80,
    y: 160,
    name: 'FG-EXT-R4331-02',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 报盘、行情区
     */
  {
    x: 220,
    y: 195,
    width: 600,
    height: 400,
    name: '报盘、行情区',
    type: '报盘行情区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 180,
    y: 260,
    name: 'FG-ARISTA-01',
    type: '交换机',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 260,
    y: 260,
    name: 'FG-ARISTA-02',
    type: '交换机',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 180,
    y: 160,
    name: 'FG-LEVEL2-01',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 260,
    y: 160,
    name: 'FG-LEVEL2-02',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 交易区
     */
  {
    x: 480,
    y: 360,
    width: 740,
    height: 220,
    name: '交易区',
    type: '交易区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 430,
    y: 360,
    name: 'FG-TRA-S93180-01',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 530,
    y: 360,
    name: 'FG-TRA-S93180-02',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 非交易区
     */
  {
    x: 920,
    y: 360,
    width: 740,
    height: 220,
    name: '非交易区',
    type: '非交易区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 870,
    y: 360,
    name: 'FG-NTRA-S93180-01',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 970,
    y: 360,
    name: 'FG-NTRA-S93180-02',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 交易接入区
     */
  {
    x: 420,
    y: 190,
    width: 740,
    height: 220,
    name: '交易接入区',
    type: '交易接入区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 370,
    y: 190,
    name: '交易接入设备1',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 470,
    y: 190,
    name: '交易接入设备2',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 交易接入、非交易虚拟化区
     */
  {
    x: 700,
    y: 190,
    width: 740,
    height: 220,
    name: '交易接入、\n非交易虚拟化区',
    type: '交易接入非交易虚拟化区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 650,
    y: 190,
    name: '虚拟化设备1',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 750,
    y: 190,
    name: '虚拟化设备2',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * 非交易接入区
     */
  {
    x: 980,
    y: 190,
    width: 740,
    height: 220,
    name: '非交易接入区',
    type: '非交易接入区',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 930,
    y: 190,
    name: '非交易接入设备1',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 1030,
    y: 190,
    name: '非交易接入设备2',
    type: '机房',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },

  /**
     * pc光纤网络
     */
  {
    x: 700,
    y: 35,
    width: 740,
    height: 180,
    name: 'pc光纤网络',
    type: 'pc光纤网络',
    nodetype: 'group',
    showLable: false,
    position: 'right'
  },
  {
    x: 650,
    y: 35,
    name: 'FG-DS6510-01',
    type: '光纤网络',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  },
  {
    x: 750,
    y: 35,
    name: 'FG-DS6510-02',
    type: '光纤网络',
    nodetype: 'node',
    showLable: true,
    position: 'bottom'
  }
]
export default nodeInfo
