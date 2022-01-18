<template>
  <div className="module2">
    <el-carousel
      indicator-position="none"
      arrow="never"
      :interval="10000"
      height="200px"
    >
      <el-carousel-item
        v-for="item in 4"
        :key="item"
      >
        <div class="flex-center">
          <div>排口感知</div>
          <ChartView
            class="chart-content"
            :chart-option="chartOpt"
            :auto-resize="true"
            height="200px"
            width="250px"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
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
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: 0,
          top: 'middle',
          icon: 'circle',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            top: 'middle',
            left: 0,
            radius: ['45%', '60%'],
            avoidLabelOverlap: true,
            center: ['40%', 'center'],
            label: {
              alignTo: 'none',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              length: 0
            },
            data: [
              { value: 1048, name: '报警' },
              { value: 735, name: '在线' },
              { value: 580, name: '离线' }
            ]
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

</style>

