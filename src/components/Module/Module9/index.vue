<template>
  <div class="module9">
    <ModuleCellCard
      :options="options"
      :data="data"
      size="large"
      val-sty-type="normal"
      class="margin-top"
    />
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="162px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'
import ModuleCellCard from '@/components/ModuleCellCard/index.vue'

export default {
  name: 'Module9',
  components: {
    ChartView,
    ModuleCellCard,
  },
  props: {
    module3module9module10data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      options: [
        {
          label: '雨水管网',
          prop: 'rainPipe',
          suffix: '公里',
        },
        {
          label: '污水管网',
          prop: 'wastePipe',
          suffix: '公里',
        },
        {
          label: '感知点控',
          prop: 'pipeAwarePoint',
          suffix: '个'
        },
      ],
      data: {},
      chartOpt: {
        tooltip: {},
        legend: {
          top: 'bottom',
          type: 'plain',
          icon: 'rect',
          itemWidth: 9,
          itemHeight: 9,
          fontSize: 9,
          textStyle: {
            color: '#979797',
          },
        },
        grid: {
          top: 10,
          left: '3%',
          right: '4%',
          bottom: 25,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['液位+电导率', '液位+ph', '液位', '流量'],
          axisLabel: {
            color: '#ffffff',
            fontSize: 9,
          },
        },
        yAxis: {
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
        },
        series: {
          name: '点位数量',
          type: 'bar',
          data: []
        }
      }
    }
  },
  watch: {
    module3module9module10data: {
      handler(val) {
        this.data = val
        // pipePoints: []
        const { pipePoints = [] } = val
        this.chartOpt.xAxis.data = pipePoints.map(v => v.name)
        this.chartOpt.series.data = pipePoints.map(v => v.value)
      },
      immediate: true,
    },
  },
  mounted() {

  },
  methods: {

  },

}
</script>
<style lang="scss" scoped>
.module9 {

  .margin-top {
    margin-top: 7px;
    margin-left: -6px;
  }

  .chart-content {
    padding-top: 9px;
    padding-left: 32px;
    padding-right: 16px;
  }
}
</style>

