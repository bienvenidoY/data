<template>
  <div class="module4">
    <div class="module-top">
      <div class="module-top-item">
        累计巡检<span>{{ info['累计巡检'] }}次</span>
      </div>
      <div class="module-top-item">
        本年巡检<span>{{ info['本年巡检'] }}次</span>
      </div>
    </div>
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      :height="`${chartSty.height}px`"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'
import {getPatrolNum, getPatrolTotalNum} from '@/api/cockpit';

export default {
  name: 'Module4',
  inject: ['injectLayoutType'],
  components: {
    ChartView,
  },
  data() {
    return {
      info: {},
      chartOpt: {
        legend: {
          data: ['累计巡检次数', '本年巡检次数'],
          top: 'bottom',
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 2,
          textStyle: {
            color: '#ffffff',
          },
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: 20,
          top: 20,
          containLabel: true
        },
        tooltip: {},
        xAxis: {
          axisLabel: {
            rotate: -45,
            hideOverlap: true,
            color: '#ffffff'
          },
          data: ['1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: ['#404040'],
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          },
        },
        series: [
          {
            symbol: 'circle',
            symbolSize: 10,
            name: '累计巡检次数',
            type: 'line',

            data: [],
            lineStyle: {
              width: 1.5
            }
          },
          {
            symbol: 'circle',
            symbolSize: 10,
            name: '本年巡检次数',
            type: 'line',
            data: [],
            lineStyle: {
              width: 1.5
            }
          }
        ]
      }
    }
  },
  computed: {
    chartSty() {
      if(this.injectLayoutType() === 0) {
        return {
          height: 126,
        }
      }
      return {
        height: 158,
      }
    }
  },
  mounted() {
    this.getInfo()
    this.getData()
  },
  methods: {
    getInfo() {
      getPatrolTotalNum().then(res => {
        let data = {}
        const responseData = res.data || []
        responseData.forEach(item => {
          data[item.name] = item.value
        })
        this.info = data
      })
    },
    getData() {
      getPatrolNum().then(res => {
        this.chartOpt.series = this.chartOpt.series.map(v => {
          v.data = res.data.find(item => item.name === v.name).data
          return v
        })
        console.log(this.chartOpt.series)
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 13px;
  padding-right: 31px;
  &-item {
    font-size: 14px;
    position: relative;
    padding-left: 4px;
    &:before {
      position: absolute;
      content: ' ';
      width: 2px;
      height: 2px;
      background: #C8F9CE;
      top: 50%;
      transform: translateY(-50%);
      left: -2px;
    }
    span {
      margin-left: 12px;
    }
  }
}

.module4 {
  margin-left: 29px;
  padding-bottom: 16px;
  .module-top {
    margin-bottom: 8px;
  }
  .chart-content {
    padding-right: 36px;
  }
}
</style>

