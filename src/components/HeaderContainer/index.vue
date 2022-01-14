<template>
  <div class="header-container">
    <div class="header-title flex-center">{{ title }}
      <div class="header-weather">
        <div class="weather">多云转晴</div>
        <CurrentTime />
      </div>
    </div>

  </div>
</template>
<script>
import CurrentTime from '@/components/CurrentTime/index.vue'

export default {
  name: 'HeaderContainer',
  components: {
    CurrentTime,
  },
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.header-container {
  height: 80px;
  background: #42b983;
}
.header-title {
  font-weight: 400;
  text-align: center;
  width: 400px;
  position: relative;
  background: red;
  height: 100%;
  margin: 0 auto;
}
.header-weather {
  position: absolute;
  left: 100%;
  width: 150px;
}
</style>
