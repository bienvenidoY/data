<template>
  <div
    class="module1"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
  >
    <div class="module-top">
      <div class="module-top-item">
        废水排放<span>55家</span>
      </div>
      <div class="module-top-item">
        废水排放<span>55家</span>
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

export default {
  name: 'Module1',
  inject: ['injectLayoutType'],
  components: {
    ChartView,
  },
  data() {
    return {
      chartOpt: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          top: 'bottom',
          data: ['红码', '黄码', '绿码',],
          type: 'plain',
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 14,
          textStyle: {
            color: '#979797',
          },
        },
        grid: {
          top: '23',
          left: '3%',
          right: '3%',
          bottom: '30',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#ffffff'
            },
            data: ['12.16', '12.17', '12.18', '12.19']
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '红码',
            smooth: true,
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            symbolSize: 0,
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90]
          },
          {
            name: '黄码',
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            symbolSize: 0,
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290]
          },
          {
            name: '绿码',
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            symbolSize: 0,
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190]
          },
        ]
      }
    }
  },
  computed: {
    chartSty() {
      console.log(this.injectLayoutType() === 0)
      if(this.injectLayoutType() === 0) {
        return {
          height: 143,
        }
      }
      return {
        height: 157,
      }
    }
  },
  mounted() {

  },
  methods: {

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
  padding-right: 17px;
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
.module1 {
  padding-left: 29px;
  padding-top: 13px;
  padding-right: 14px;
  .chart-content {
    padding-top: 23px;
  }
}

.large{
  &.module1 {
    padding-left: 32px;
    padding-top: 16px;
    padding-right: 15px;
  }
  .chart-content {
    padding-top: 26px;
  }
}

</style>

