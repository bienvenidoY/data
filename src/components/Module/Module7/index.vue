<template>
  <div class="module1">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="200px"
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

        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: 40,
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

</style>

