<template>
  <div class="current-time">
    {{ dayText }}
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  name: 'CurrentTime',
  data() {
    return {
      dayText: '',
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  beforeDestroy() {
    if(this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    updateTime() {
      this.dayText = dayjs().format('YYYY-MM-DD HH:mm:ss')
      // 0点和12点更新 天气
      if(+dayjs().format('hh') === '12') {
        this.$emit('updateWeather', dayjs().format('hh'))
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

