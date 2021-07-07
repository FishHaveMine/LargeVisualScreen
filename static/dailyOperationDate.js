import ziyingNode from './node/ziyingNode'
import hengshengPB from './node/hengshengPB'
import lianghuajia from './node/lianghuajia'
import xuntouPB from './node/xuntouPB'
import luodingPB from './node/luodingPB'
import lingshou from './node/lingshou'

import dongguanjifang from './node/dongguanjifang/index'
import shenzhenjifang from './node/shenzhenjifang/index'
import shanghaijifang from './node/shanghaijifang/index'
/**
 * 图标
 * @hangxing 行情
 * @baopan 报盘
 * @KCXP KCXP
 * @jiaohuanji 交换机
 * @zhongjianjian 中间件
 * @DB 数据库
 * @serve 服务器
 * @cipan 磁盘
 *
 * @Nginx Nginx接入
 * @zongxian 消息总线
 * @zhongtai 中台服务器
 * @celuo 策略
 * @order 接入快速订单
 * @KCBP KCBP
 * @PC PC
 * @PHONE PHONE
 *
 *
 * 对象说明：
 * x,y 相对指标
 * name：标题
 * type： icon类型
 * status： icon颜色  0：蓝色正常，1：红色异常
 * line： 从自身开始的关系线段数据
 * line数据结构：
 *    {
        target: '交易转换机',   目标节点
        status: 0,            线段状态（该文件内全部为0）
        value: [              线段拐点定位数据 【X,Y】
          [350, 800],
          [575, 800]
        ]
      }
 */
const nodeInfo = {
  '自营': ziyingNode,
  '恒生pb': hengshengPB,
  '量化家': lianghuajia,
  '迅投pb': xuntouPB,
  '络町pb': luodingPB,
  '零售': lingshou,
  '东莞': dongguanjifang,
  '深圳': shenzhenjifang,
  '上海': shanghaijifang
}
export default (name) => {
  return nodeInfo[name] || []
}
