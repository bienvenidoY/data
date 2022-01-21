<template>
  <div class="module7">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="140px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'

export default {
  name: 'Module7',
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
          left: '0',
          right: '0',
          bottom: 30,
          top: 10,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['问题上报事件', '设备告警事件']
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
  mounted() {

  },
  methods: {

  },

}
</script>
<style lang="scss" scoped>
.module7 {
  padding: 0 22px 22px;
}
</style>

