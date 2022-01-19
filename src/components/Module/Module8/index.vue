<template>
  <div class="module1">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="400px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'

export default {
  name: 'Module8',
  components: {
    ChartView,
  },
  data() {
    return {
      chartOpt: {
        legend: {
          top: 'bottom',
        },
        tooltip: {},
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
            '归档事件数': [823, 235, 1042, 988, 91.2, 76.9, 235, 1042, 988, 81.4, 988, 81.4],
            '事件平均处理时效': [95.8, 81.4, 91.2, 76.9, 235, 1042, 988, 76.9, 235, 81.4, 988, 81.4]
          }
        },
        xAxis: [{gridIndex: 0, inverse: true}, {gridIndex: 1,}],
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
            axisLabel: {show: true},
            axisTick: {show: false},
            splitLine: {show: false}
          }
        ],
        grid: [{right: '53%'}, {left: '51%'}],
        series: [
          // These series are in the first grid.
          {type: 'bar'},
          // These series are in the second grid.
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
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

