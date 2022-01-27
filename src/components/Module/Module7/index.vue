<template>
  <div
    class="module7"
    :class="[injectLayoutType === 0 ? 'small' : 'large']"
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
            data: [103, 489]
          },
          {
            name: '处置中',
            type: 'bar',
            stack: 'total',
            data: [195, 438]
          },
          {
            name: '已完成',
            type: 'bar',
            stack: 'total',
            data: [195, 238]
          }
        ]
      }
    }
  },
  computed: {
    chartSty() {
      if(this.injectLayoutType === 0) {
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

  },
  methods: {

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

