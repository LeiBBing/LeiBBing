import {
  fetch
}
from '@/config/axios'
/**
 * 获取首页运营日报图表
 */
export const report = (json) => fetch('/api/node1', {})
/**
 * 获取首页环保检测
 */
export const environmentDetection = (json) => fetch('/api/node2', {})
/**
 * 获取EHS天气情况
 */
export const weatherInfo = (json) => fetch('/baidu/telematics/v3/weather', {
  location: '衢州',
  output: 'json',
  ak: 'PtZ7r5x7fS0jz2If5Ecxbu4abFQBpvXF'
})
/**
 * 获取首页地图公司工艺详情
 */
export const technologyDetail = (json) => fetch('/api/node', {})
