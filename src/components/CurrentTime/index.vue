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
  methods: {
    updateTime() {
      this.dayText = dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  beforeDestroy() {
    if(this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

