<template>
  <div class="module13">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="283px"
    />
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'
import {getWaterStat} from '@/api/cockpit';

export default {
  name: 'Module13',
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
          data: ['用水量', '排水量'],
          type: 'plain',
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#979797',
          },
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
            data: ['1月',
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
            ]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          /* {
            name: '用水量',
            smooth: true,
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '排水量',
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          } */
        ]
      }
    }
  },
  mounted() {
    this.getWaterStat()
  },
  methods: {
    getWaterStat() {
      getWaterStat().then(res => {
        this.chartOpt.series = res.data.map(v => {
          return {
            ...v,
            type: 'line',
            smooth: true,
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
          }
        })
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module13 {
  margin: 0 26px 0 24px;
}
</style>

