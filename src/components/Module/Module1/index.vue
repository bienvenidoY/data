<template>
  <div class="module1">
    <div class="module-top">
      <div class="module-top-item">
        废水排放<span>55家</span>
      </div>
      <div class="module-top-item">
        废水排放<span>55家</span>
      </div>
    </div>
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="163px"
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
          data: ['红码', '黄码', '绿码',],
          type: 'plain',
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 14,
          textStyle: {
            color: '#979797',
          },
        },
        grid: {
          top: '23',
          left: '0',
          right: '0',
          bottom: '30',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['12.16', '12.17', '12.18', '12.19', '12.20', '12.21', '12.22']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '红码',
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
            name: '黄码',
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
            name: '绿码',
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
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 13px;
  padding-right: 31px;
  &-item {
    font-size: 14px;
    position: relative;
    padding-left: 4px;
    &:before {
      position: absolute;
      content: ' ';
      width: 2px;
      height: 2px;
      background: #C8F9CE;
      top: 50%;
      transform: translateY(-50%);
      left: -2px;
    }
    span {
      margin-left: 12px;
    }
  }
}
.module1 {
  margin-left: 29px;
  padding-bottom: 16px;
  .chart-content {
    margin-right: 14px;
  }
}
</style>

