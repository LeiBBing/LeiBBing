<template>
  <div class="pageBody">
    <div class="mainWrap">
      <!-- 侧边侧栏 -->
      <div class="mainLeft">
        <div class="itemArea environmental">
          <span class="title">水质检测</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <span class="warningIcon" @click="showJianceModal"></span>
          <div class="yanQiJC">
            <div class="yanQiBg">
              <div class="animateBorder roate"></div>
              <img src="../../assets/images/hone/nc_62.png" />
              <span>设备状态</span>
            </div>
            <p
              class="txt"
              :class="{ warning: environmentDetectionData.smokeDetection < 60 }"
            >
              {{
                environmentDetectionData.smokeDetection >= 60 ? "正常" : "异常"
              }}
            </p>
          </div>
          <div class="wsJCWrap">
            <div id="wuShuiJC"></div>
            <p
              class="txt"
              :class="{ warning: environmentDetectionData.waterDetection < 60 }"
            >
              {{
                environmentDetectionData.waterDetection >= 60 ? "正常" : "异常"
              }}
            </p>
          </div>
        </div>
        <div class="itemArea storage">
          <span class="title">设备运行</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <div class="top">
            <div id="storageChart"></div>
            <div class="storageNumWrap">
              <p>衢江河段设备</p>
              <p class="storeged"><span>在线节点</span>0%</p>
              <p class="storeging"><span>离线节点</span>0%</p>
            </div>
          </div>
          <div class="bottomBorder"></div>
          <ul class="storageInfo">
            <li>设备覆盖河段</li>
            <li><span class="color">100</span>km</li>
            <li><span class="color">1481.2</span>m³</li>
          </ul>
        </div>
        <div class="itemArea storage">
          <span class="title">相关数值</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <!-- <div class="top"> -->
            <div id="landfill"></div>
          <!-- </div> -->
        </div>
      </div>
      <!-- 中间地图 -->
      <div class="mapMemo">
        <ul class="leftMemo">
          <li>
            <img src="../../assets/images/common/mapYellow.png" /> 污染严重节点
          </li>
          <li><img src="../../assets/images/common/nc_67.png" /> 正常节点</li>
        </ul>
        <ul class="rightTab">
          <li @click="showMap(0)" :class="{ active: mapTypemapType }">衢江</li>
        </ul>
      </div>
      <div class="map" id="map">
        <!-- <img class="mapBlue" src="../../assets/images/common/mapBlue.png">
        <img class="mapRed" src="../../assets/images/common/mapRed.png">
        <img class="mapYellow" src="../../assets/images/common/mapYellow.png">
        <img class="mapGreen" src="../../assets/images/common/mapGreen.png">
        <div class="labelDiv labelDivYellow" @click="showCompanyInfo">
          <div class="txt">四川省中明环境治理有限公司</div>
        </div>
        <div class="labelDiv labelDivBlue" @click="showCompanyInfo">
          <div class="txt">成都兴蓉环保科技有限公司</div>
        </div>
        <div class="labelDiv labelDivRed" @click="showCompanyInfo">
          <div class="txt">南充嘉源环保科技有限责任公司</div>
        </div>
        <div class="labelDiv labelDivGreen" @click="showCompanyInfo">
          <div class="txt">中节能(攀枝花)清洁技术发展有限公司</div>
        </div>-->
      </div>
      <!-- <div class="ncMap" v-if="!mapType">
        <div class="inner">
          <img src="../../assets/images/common/wujiaoxing.png" class="gevo" />
          <img src="../../assets/images/common/mapBlue.png" class="location" />
          <img src="../../assets/images/common/nc_68.gif" class="gif" />
        </div>
      </div>-->
      <!-- 右边侧栏 -->
      <div class="mainRight">
        <div class="itemArea environmental">
          <span class="title">水质评估</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <ul class="EHSWrap">
            <li>
              <div class="liLeft">
                <p class="en">Environment</p>
                <p class="zh">环境</p>
              </div>
              <div class="liRight">
                <img
                  src="../../assets/images/hone/ehsAnimate.png"
                  class="animateBorder"
                />
                <span>优</span>
                <p>
                  保障河道水质干净卫生
                </p>
              </div>
            </li>
            <li>
              <div class="liLeft">
                <p class="en health">Health</p>
                <p class="zh">健康</p>
              </div>
              <div class="liRight">
                <img
                  src="../../assets/images/hone/ehsAnimate.png"
                  class="animateBorder"
                />
                <span>优</span>
                <p>全员参与，综合治理，改善环境</p>
              </div>
            </li>
            <li>
              <div class="liLeft">
                <p class="en saftey">Safety</p>
                <p class="zh">安全</p>
              </div>
              <div class="liRight">
                <img
                  src="../../assets/images/hone/ehsAnimate.png"
                  class="animateBorder"
                />
                <span>优</span>
                <p>无事故、无人身伤害、无环境破坏</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="itemArea safety">
          <span class="title">成功运行</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <p class="safetyTitle">成功运行天数</p>
          <p class="safetyDays">
            230
            <span>天</span>
          </p>
          <p class="safetyMemo">
            <span>
              智慧监测
              <span>方便生活</span>
            </span>
          </p>
        </div>
        <div class="itemArea report">
          <span class="title">监测日报</span>
          <span class="icon leftTopIcon"></span>
          <span class="icon rightTopIcon"></span>
          <span class="icon leftBottomIcon"></span>
          <span class="icon rightBottomIcon"></span>
          <div id="operate"></div>
        </div>
      </div>
    </div>
    <!-- 环保监测预警记录 -->
    <div class="jianceModal" v-if="iisJianceModal">
      <div class="inner">
        <span class="icon leftTopIcon"></span>
        <span class="icon rightTopIcon"></span>
        <span class="icon leftBottomIcon"></span>
        <span class="icon rightBottomIcon"></span>
        <span class="colse" @click="showJianceModal">x</span>
        <p class="yuJingTitle">环保监测预警记录</p>
        <p class="noData">无预警数据</p>
      </div>
    </div>
  </div>
</template>

<script>

import { report, environmentDetection, technologyDetail } from '../../api/api';
import echarts from 'echarts';
import 'echarts-gl';
import

mapFn from '@/config/map.js';
// let map = null
// let pathSimplifierIns = null
export default {
  data() {
    return {
      environmentDetectionData: {}, // 环保检测数据
      iisJianceModal: false, // 控制环保监测预警记录弹窗
      isCompanyModal: true, // 控制公司详情弹窗
      mapType: true // 控制地图类型
    };
  },
  mounted() {
    mapFn.creatMap(11, [118.87, 28.93]);
    mapFn.creatLevel('province', '浙江');
    this.storageChart();
    this.landfill();
    this.getReportFun();
    this.getEnvironmentDetectionFun();
    this.getCompanyTechnologyFun();
  },
  methods: {
    // 污水监测水球
    drawChart(data) {
      let waveColor = data.waterDetection >= 60 ? '#00a9f0' : '#ffc600';
      let chart = this.$echarts.init(document.getElementById('wuShuiJC'));
      chart.setOption({
        title: {
          text: '污水监测',
          top: 'center',
          left: 'center',
          textStyle: {
            fontSize: 18,
            color: '#fff'
          }
        },
        tooltip: {
          show: false,
          trigger: 'item',
          textStyle: {
            color: '#fff'
          },
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
          // 水球图: {a}（系列名称），{b}（无），{c}（数值）
          // 使用函数模板   传入的数据值 -> value: number|Array,
          formatter: function (value) {
            return value.seriesName + ': ' + value.data * 100 + '%';
          }
        },
        series: [
          {
            type: 'liquidFill',
            name: '污水监测',
            radius: '83%', // 水球图的半径
            center: ['50%', '50%'],
            // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
            // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
            shape: 'circle',
            phase: 3, // 波的相位弧度 不设置  默认自动
            direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
            // 边框线
            outline: {
              show: true,
              borderDistance: 0,
              itemStyle: {
                opacity: 1,
                borderWidth: 1,
                shadowBlur: 2,
                shadowColor: '#fff',
                borderColor: '#41dcd8'
              }
            },
            // 图形样式
            itemStyle: {
              color: waveColor,
              opacity: 0.5,
              shadowBlur: 10
            },
            // 水球未到的背景颜色
            backgroundStyle: {
              color: '#0e4058'
            },
            // 图形的高亮样式
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            // 图形上的文本标签
            label: {
              show: false,
              fontSize: 55,
              fontWeight: 400,
              color: '#fff'
            },
            // 系列中的数据内容数组
            data: [data.waterDetection / 100]
          }
        ]
      });
    },
    // 仓储物料饼图
    storageChart() {
      let chart = this.$echarts.init(document.getElementById('storageChart'));
      let option = {
        title: {
          text: '0%',
          x: '45%',
          y: '60%',
          textStyle: {
            color: '#e7f245',
            fontSize: 24,
            lineHeight: 0
          }
        },
        series: [
          {
            name: '总储存量',
            type: 'pie',
            hoverAnimation: false, // 鼠标移入变大
            center: ['55%', '60%'],
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            color: ['#e7f245', '#5ec1e5'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '12'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 0, name: '存储占比' },
              { value: 1000, name: '依存储量' }
            ]
          },
          {
            name: '外边框',
            type: 'pie',
            clockWise: false, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            center: ['55%', '60%'],
            radius: ['78%', '78%'],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 9,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderType: 'dashed',
                    borderColor: '#3a5673'
                  }
                }
              }
            ]
          }
        ]
      };
      chart.setOption(option);
    },
    // 填埋库容
    landfill() {
      let myChart = this.$echarts.init(document.getElementById('landfill'));
      let option = {
        color: ['#36ff00', '#ffc600', '#ee6666', '#00c6ff'],
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['PH值', '电导率', 'orp', '盐度'],
          top: '10%',
          textStyle: {
            fontSize: 9,
            fontWeight: 'bolder',
            color: '#ffffff'
          },
          tooltip: {
            show: true
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.1],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
          // max:1,
          // min:0
        },
        yAxis: {
          type: 'category',
          data: ['节点1', '节点2', '节点3', '节点4', '节点5', '节点6'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: 'PH值',
            type: 'bar',
            data: [0.12, 0.1, 0.2, 0.1, 0.1, 0.6]
          },
          {
            name: '电导率',
            type: 'bar',
            data: [0.1, 0.23, 0.31, 0.13, 0.16, 0.63]
          },
          {
            name: 'orp',
            type: 'bar',
            data: [0.12, 0.1, 0.2, 0.1, 0.1, 0.6]
          },
          {
            name: '盐度',
            type: 'bar',
            data: [0.15, 0.23, 0.25, 0.1, 0.1, 0.6]
          }
        ]
      };
      myChart.setOption(option);
    },
    // 运营日报图表
    operateChart(data) {
      let myChart = this.$echarts.init(document.getElementById('operate'));
      let option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 40,
          itemHeight: 2,
          itemGap: 13,
          data: ['温度', '湿度'],
          right: '4%',
          top: '3%',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        grid: {
          left: '5%',
          right: '10%',
          bottom: '8%',
          top: '15%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '日期',
            boundaryGap: true,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#4f7399'
              }
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            },
            data: ''
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '吨',
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#4f7399'
              }
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#4f7399'
              }
            }
          }
        ],
        series: [
          {
            name: '温度',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#d7df5b'
                  },
                  {
                    offset: 1,
                    color: '#d7df5b'
                  }
                ])
              }
            },
            data: data.revise.yAxis
          },
          {
            name: '湿度',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#00ccff'
                  },
                  {
                    offset: 1,
                    color: '#00ccff'
                  }
                ])
              }
            },
            data: data.dispose.yAxis
          }
        ]
      };
      myChart.setOption(option);
    },
    // 获取运营报表数据
    getReportFun() {
      report().then((res) => {
        this.operateChart(res.data);
      });
    },
    // 获取环保检测数据
    getEnvironmentDetectionFun() {
      environmentDetection().then((res) => {
        this.environmentDetectionData = res.data;
        this.drawChart(res.data);
      });
    },
    // 环保监测预警记录弹窗
    showJianceModal() {
      this.iisJianceModal = !this.iisJianceModal;
    },
    // 打开公司详情弹窗
    showCompanyInfo() {
      this.isCompanyModal = true;
    },
    // 开关地图类型
    showMap(type) {
      if (type === 0) {
        this.mapType = true;
        mapFn.creatLevel('province', '浙江');
      } else {
        this.mapType = false;
        mapFn.creatLevel('city', '衢州');
        mapFn.creatDivergency();
        mapFn.createdGovernmentLocation({ lng: '118.87', lat: '28.93' });
      }
    },

    // 获取地图公司工艺详情
    getCompanyTechnologyFun() {
      technologyDetail().then((res) => {
        console.log(res.data);
        mapFn.createdVillage(res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/home.scss";
</style>
