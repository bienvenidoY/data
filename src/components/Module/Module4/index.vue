<template>
  <div class="module4">
    <div class="module-top">
      <div class="module-top-item">
        废水排放 55家
      </div>
      <div class="module-top-item">
        废水排放 55家
      </div>
    </div>
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="300px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'

export default {
  name: 'Module4',
  components: {
    ChartView,
  },
  data() {
    return {
      chartOpt: {
        legend: {
          data: ['累计巡检次数', '本年巡检'],
          top: 'bottom',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: 60,
          containLabel: true
        },
        tooltip: {},
        xAxis: {
          type: 'time',
          axisLabel: {
            rotate: 60,
            formatter: '{MMM}',
            hideOverlap: true,
          }
        },
        yAxis: {
          type: 'value'
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
              width: 0.5
            }
          },
          {
            symbol: 'circle',
            symbolSize: 10,
            name: '本年巡检',
            type: 'line',

            data: [
              ['2017-6', 22],
              ['2017-7', 17],
              ['2017-8', 2],
              ['2017-9', 15],
              ['2017-10', 5]
            ],
            lineStyle: {
              width: 0.5
            }
          }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>
.module-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-item {
    font-size: 14px;
  }
}
</style>

