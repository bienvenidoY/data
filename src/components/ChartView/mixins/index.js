import * as echarts from 'echarts/core';

export default {
  name: 'ChartView',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartOption: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'canvas'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartOption: {
      deep: true,
      handler(newVal) {
        this.setOptions({
          backgroundColor: '#0b120a',
          ...newVal,
        })
      }
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      window.addEventListener('resize', this.resizeHandler)
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.resizeHandler)
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    resizeHandler() {
      this.chart.resize()
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart, '', {
        renderer: this.type
      })
      this.chart.setOption({
        backgroundColor: '#0b120a',
        ...this.chartOption,
      })
      this.chart.on('click', this.handleClick)
    },
    handleClick(params) {
      this.$emit('click', params)
    },
    setOptions(option) {
      this.clearChart()
      this.resizeHandler()
      if (this.chart) {
        this.chart.setOption(option)
      }
    },
    refresh() {
      this.setOptions({
        backgroundColor: '#0b120a',
        ...this.chartOption,
      })
    },
    clearChart() {
      this.chart && this.chart.clear()
    }
  }
}
