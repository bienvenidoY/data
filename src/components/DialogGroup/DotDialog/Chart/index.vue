<template>
  <div class="dot-chart">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="130px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'

export default {
  name: 'DotDialogChart',
  components: {
    ChartView,
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({
        xAxis: [],
        series: [],
      })
    },
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
          type: 'plain',
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 14,
          textStyle: {
            color: '#979797',
          },
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '5%',
          bottom: '30',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#ffffff'
          },
          data: []
        },
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
        series: []
      }
    }
  },
  watch: {
    chartData: {
      handler(val) {
        this.chartOpt.xAxis.data = val.xAxis
        this.chartOpt.series = val.series.map(v => {
          return {
            name: v.name,
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            symbolSize: 0,
            emphasis: {
              focus: 'series'
            },
            data: v.data,
          }
        })
      },
      immediate: true,
    }
  },
  mounted() {
  },
  methods: {
  },

}
</script>
<style lang="scss" scoped>
.dot-chart {
  padding: 0 24px 20px;
}

</style>

