<template>
  <div class="module4">
    <div class="module-top">
      <div class="module-top-item">
        废水排放<span>55次</span>
      </div>
      <div class="module-top-item">
        废水排放<span>55次</span>
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
import {getPatrolNum} from '@/api/cockpit';

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
          type: 'time',
          axisLabel: {
            rotate: -45,
            formatter: '{MMM}',
            hideOverlap: true,
            color: '#ffffff'
          },
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

            data: [
              ['2017-6', 12],
              ['2017-7', 17],
              ['2017-8', 22],
              ['2017-9', 35],
              ['2017-10', 4]
            ],
            lineStyle: {
              width: 1.5
            }
          },
          {
            symbol: 'circle',
            symbolSize: 10,
            name: '本年巡检次数',
            type: 'line',

            data: [
              ['2017-6', 22],
              ['2017-7', 17],
              ['2017-8', 2],
              ['2017-9', 15],
              ['2017-10', 5]
            ],
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
    this.info = {

    }
    this.getInfo()
  },
  methods: {
    getInfo() {
      getPatrolNum().then(res => {
        this.info = res.data
      })
    },
    getData() {

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

