<template>
  <div
    class="dot-icon"
    :style="iconImageSty"
  />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {}
  },
  computed: {
    iconImageSty() {
      const map = {
        '1': require('./image/废气@2x.png'),
        '2': require('./image/入河排口@2x.png'),
      }
      return {
        backgroundImage: `url(${map[this.type]})`
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.dot-icon {
  width: 107px;
  height: 80px;
  background: url(./image/雨水管网@2x.png) no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>
