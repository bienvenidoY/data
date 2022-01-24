<template>
  <div class="module10">
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
      height="160px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'
import ModuleCellCard from '@/components/ModuleCellCard/index.vue'

export default {
  name: 'Module10',
  components: {
    ChartView,
    ModuleCellCard,
  },
  data() {
    return {
      options: [
        {
          label: '雨水管网',
          prop: 'a',
          suffix: '个'
        },
        {
          label: '污水管网',
          prop: 'b',
          suffix: '个'
        },
        {
          label: '感知点控',
          prop: 'c',
          suffix: '个'
        },
      ],
      data: {

      },
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
          top: 0,
          left: '3%',
          right: '4%',
          bottom: 25,
          containLabel: true,
        },
        xAxis: {
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
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia'],
          axisLabel: {show: false},
          axisTick: {show: false},
        },
        series: [
          {
            name: '点位数量',
            type: 'bar',
            data: [5, 4]
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
.module10 {

  .margin-top {
    margin-top: 7px;
    margin-left: -6px;
  }

  .chart-content {
    padding-top: 15px;
    padding-left: 32px;
    padding-right: 16px;
  }
}
</style>

