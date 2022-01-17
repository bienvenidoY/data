<template>
  <div class="module1">
    <div class="module-top">
      <div class="module-top-item">
        废水排放  55家
      </div>
      <div class="module-top-item">
        废水排放  55家
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
  name: 'Module1',
  components: {
    ChartView,
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
          data: ['Email', 'Union Ads', 'Video Ads',],
          type: 'plain',
          icon: 'rect',
        },
        grid: {
          top: '25',
          left: '3%',
          right: '4%',
          bottom: '40',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            smooth: true,
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
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
.module-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-item {
    font-size: 14px;
  }
}
</style>

