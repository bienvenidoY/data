<template>
  <div
    class="module7"
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
import {getSolve} from '@/api/cockpit';

export default {
  name: 'Module7',
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
            type: 'shadow'
          }
        },
        legend: {
          top: 'bottom',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#979797',
          },
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: 30,
          top: 10,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {
            lineStyle: {
              color: ['#404040'],
            }
          },
        },
        yAxis: {
          type: 'category',
          data: ['设备告警事件', '问题上报事件'],
          axisLabel: {
            color: '#ffffff'
          },
        },
        series: [
          {
            name: '待处置',
            type: 'bar',
            stack: 'total',
            data: []
          },
          {
            name: '处置中',
            type: 'bar',
            stack: 'total',
            data: []
          },
          {
            name: '已完成',
            type: 'bar',
            stack: 'total',
            data: []
          }
        ]
      }
    }
  },
  computed: {
    chartSty() {
      if(this.injectLayoutType() === 0) {
        return {
          height: 140,
        }
      }
      return {
        height: 155,
      }
    }
  },
  mounted() {
    this.getSolve()
  },
  methods: {
    getSolve() {
      getSolve().then(res => {
        const series = [
          {
            name: '待处置',
            type: 'bar',
            stack: 'total',
            data: [],
          },
          {
            name: '处置中',
            type: 'bar',
            stack: 'total',
            data: [],
          },
          {
            name: '已完成',
            type: 'bar',
            stack: 'total',
            data: [],
          },
        ]
        series.map(v => {
          res.data.forEach(item => {
            const value = item.data.find(item => item.name === v.name).value
            v.data.push(value)
          })
        })
        const xData = res.data.map(v => v.name)

        this.chartOpt.yAxis.data = xData
        this.chartOpt.series = series
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module7 {
  padding: 2px 22px 22px;
}

.large {
  &.module7 {
    padding: 31px 24px 0 25px;
  }

}
</style>

