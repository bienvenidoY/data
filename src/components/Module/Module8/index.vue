<template>
  <div class="module1">
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="100%"
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      },
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

