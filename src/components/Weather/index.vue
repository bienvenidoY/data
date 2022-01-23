<template>
  <div class="flex-center">
    <template v-if="weatherData.url">
      <div
        class="weather-icon"
        :style="{ backgroundImage: `url(${weatherData.url})` }"
      />
      <div>{{ weatherText }}</div>
    </template>
    <div v-else>
      天气加载...
    </div>
  </div>
</template>
<script>
import { getWeather } from './weather.js'
import dayjs from 'dayjs';

export default {
  data() {
    return {
      weatherData: {},
      weatherText: '',
      currentHour: '',
    }
  },
  mounted() {
    this.getWeatherData()
  },
  methods: {
    // 获取上海天气
    getWeatherData() {
      this.currentHour = dayjs().format('hh')
      getWeather('330421').then(data => {
        this.weatherData = data
        const { dayTemp, nightTemp, dayWeather } = data.forecasts[0]
        this.weatherText = `${dayTemp}℃ - ${nightTemp}℃  ${dayWeather}`
        // data中就包含了当前天气图标
        // console.debug('@天气 = ', data, ' 图标 = ', data.url)
      })
    },
    update(hour) {
      if(this.currentHour !== hour) {
        this.getWeatherData()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.weather-icon {
  height: 30px;
  width: 30px;
  margin-right: 12px;
  background-size: cover;
}
</style>
