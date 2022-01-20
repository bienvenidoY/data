<template>
  <div class="header-container">
    <div class="header-title flex-center">
      <div class="header-title-image" />
      <div class="header-weather">
        <div class="weather flex-center">
          <div class="weather-icon" />
          <div class="weather-text">
            20~28℃ 多云转晴
          </div>
        </div>
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
  height: var(--header-height);
  background: url(./bg_top@2x.png) no-repeat, var(--container-bg);
  background-size: cover;
}
.header-title {
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 345px;
}
.header-title-image {
  width: 100%;
  height: 22px;
  background: url(./title@2x.png) no-repeat;
  background-size: cover;
}
.header-weather {
  position: absolute;
  top: 5px;
  right: -304px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #EBFFEE;
  line-height: 22px;
  letter-spacing: 1px;
}
.weather {
  margin-bottom: 9px;
  .weather-icon {
    height: 30px;
    width: 30px;
    margin-right: 12px;
    background: red;
  }
}
</style>
