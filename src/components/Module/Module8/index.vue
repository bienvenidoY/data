<template>
  <div class="module8">
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
  name: 'Module8',
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
        grid: [{top: '0', right: '53%', bottom: 50}, {top: '0',left: '51%',  bottom: 50}],
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
            '归档事件数': [23, 5, 12, 8, 9.2, 6.9, 235, 12, 8, 1.4, 8, 1.4],
            '事件平均处理时效': [5.8, 1.4, 91.2, 6.9, 25, 12, 8, 76.9, 5, 1.4, 8, 1.4]
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
.module8 {
  padding: 9px 28px 14px 26px;
}
</style>

