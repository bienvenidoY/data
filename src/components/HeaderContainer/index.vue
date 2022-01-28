<template>
  <div
    class="header-container"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
  >
    <div class="header-title flex-center">
      <div class="header-title-image" />
      <div class="header-weather">
        <div class="weather flex-center">
          <Weather ref="Weather" />
        </div>
        <CurrentTime @updateWeather="updateWeather" />
      </div>
    </div>
  </div>
</template>
<script>
import CurrentTime from '@/components/CurrentTime/index.vue'
import Weather from '@/components/Weather/index.vue'

export default {
  name: 'HeaderContainer',
  inject: ['injectLayoutType'],
  components: {
    CurrentTime,
    Weather,
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
  methods: {
    updateWeather(hour) {
      this.$refs.Weather.update(hour)
    }
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  height: var(--header-small-height);
  background: url(./image/small/bg_top@2x.png) no-repeat;
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
  background: url(./image/small/title@2x.png) no-repeat;
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
}

.large {
  .header-title-image {
    width: 100%;
    height: 22px;
    background: url(./image/large/title@2x.png) no-repeat;
    background-size: cover;
  }
  &.header-container {
    height: var(--header-large-height);
    background: url(./image/large/bg_top@2x.png) no-repeat;
    background-size: cover;
  }
}
</style>
