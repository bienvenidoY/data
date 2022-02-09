<template>
  <div
    class="module8"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
  >
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
import {getArchives} from '@/api/cockpit';

export default {
  name: 'Module8',
  inject: ['injectLayoutType'],
  components: {
    ChartView,
  },
  data() {
    return {
      chartOpt: {
        tooltip: {},
        legend: {
          top: 'bottom',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#979797',
          },
        },
        grid: [{top: '0', right: '57%', bottom: 50}, {top: '0', left: '57%', bottom: 50}],
        dataset: {
          source: {
            product: [
              '1月',
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
              '12月'
            ],
            '归档事件数': [],
            '事件平均处置时效': []
          }
        },
        xAxis: [{
          gridIndex: 0, inverse: true,
          splitLine: {
            lineStyle: {
              color: ['#404040'],
            }
          },
          axisLabel: {
            color: '#ffffff'
          }
        }, {
          gridIndex: 1,
          splitLine: {
            lineStyle: {
              color: ['#404040'],
            }
          },
          axisLabel: {
            color: '#ffffff'
          }
        }],
        yAxis: [
          {
            type: 'category',
            gridIndex: 0,
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false}
          },
          {
            type: 'category',
            gridIndex: 1,
            axisLine: {show: false},
            axisLabel: {show: true, color: '#ffffff'},
            axisTick: {show: false},
            splitLine: {show: false}
          }
        ],
        series: [
          // These series are in the first grid.
          {type: 'bar'},
          // These series are in the second grid.
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
        ]
      }
    }
  },
  computed: {
    chartSty() {
      if(this.injectLayoutType() === 0) {
        return {
          height: 200,
        }
      }
      return {
        height: 221,
      }
    }
  },
  mounted() {
    this.getArchives()
  },
  methods: {
    getArchives() {
      getArchives().then(res => {
        const data = {}
        res.data.forEach(v => {
          data[v.name] = v.data
        })
        this.chartOpt.dataset.source = {
          ...this.chartOpt.dataset.source,
          ...data
        }
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module8 {
  padding: 9px 28px 16px 26px;
}

.large {
  &.module8 {
    padding: 11px 31px 0 29px;
  }

}
</style>

