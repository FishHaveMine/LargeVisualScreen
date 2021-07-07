/* eslint-disable camelcase */
/**
 * 拓扑图--东莞凤岗网络拓扑
 */
import node from './node'
import line from './line'

import dianxin_Blue from '../../image/dongguan/blue_电信.png'
import dianxin_Red from '../../image/dongguan/red_电信.png'

import yidong_Blue from '../../image/dongguan/blue_移动.png'
import yidong_Red from '../../image/dongguan/red_移动.png'

import liantong_Blue from '../../image/dongguan/blue_联通.png'
import liantong_Red from '../../image/dongguan/red_联通.png'

import jieru_Blue from '../../image/dongguan/blue_FG-INT-S2960-01.png'
import jieru_Red from '../../image/dongguan/red_FG-INT-S2960-01.png'

import ADSDDOS_Blue from '../../image/dongguan/blue_1WAF.png'
import ADSDDOS_Red from '../../image/dongguan/red_1WAF.png'

import Firewall_Blue from '../../image/dongguan/blue_FG-COR-F5260-01.png'
import Firewall_Red from '../../image/dongguan/red_FG-COR-F5260-01.png'

import FGCORS9504_Blue from '../../image/dongguan/blue_FG-COR-S9504-01.png'
import FGCORS9504_Red from '../../image/dongguan/red_FG-COR-S9504-01.png'

import jifang_Blue from '../../image/dongguan/blue_FG-EXT-R4331-01.png'
import jifang_Red from '../../image/dongguan/red_FG-EXT-R4331-01.png'

import jiaohuanji_Blue from '../../image/dongguan/blue_FG-ARISTA-01.png'
import jiaohuanji_Red from '../../image/dongguan/red_FG-ARISTA-01.png'

import network_Blue from '../../image/dongguan/blue_PC光纤网络.png'
import network_Red from '../../image/dongguan/red_PC光纤网络.png'
const tyepDefault = {
  '电信': 'dianxin',
  '移动': 'yidong',
  '联通': 'liantong',
  '接入': 'jieru',
  'ADSDDOS': 'ADSDDOS',
  '防火墙': 'Firewall',
  'FGCOR': 'FGCORS9504',
  '机房': 'jifang',
  '交换机': 'jiaohuanji',
  '光纤网络': 'network'
}
const icon = {
  dianxin_Blue,
  dianxin_Red,
  yidong_Blue,
  yidong_Red,
  liantong_Blue,
  liantong_Red,
  jieru_Blue,
  jieru_Red,
  ADSDDOS_Blue,
  ADSDDOS_Red,
  Firewall_Blue,
  Firewall_Red,
  FGCORS9504_Blue,
  FGCORS9504_Red,
  jifang_Blue,
  jifang_Red,
  jiaohuanji_Blue,
  jiaohuanji_Red,
  network_Blue,
  network_Red
}
const dongguanjifang = {
  tyepDefault,
  icon,
  nodeInfo: node,
  lineInfo: line
}
export default dongguanjifang
