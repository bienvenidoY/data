<template>
  <div class="module9">
    <ModuleCellCard
      :options="options"
      :data="data"
    />
    <ChartView
      class="chart-content"
      :chart-option="chartOpt"
      :auto-resize="true"
      height="400px"
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
  data() {
    return {
      options: [
        {
          label: '雨水管网',
          prop: '1',
        },
        {
          label: '污水管网',
          prop: '2',
        },
        {
          label: '感知点控',
          prop: '3',
        },
      ],
      data: {},
      chartOpt: {
        tooltip: {},
        legend: {
          top: 'bottom',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
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

</style>

