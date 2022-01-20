<template>
  <div class="module-card">
    <div class="module-card-title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ModuleCard',
  props: {
    title: {
      type: String,
      default: '模块标题',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.module-card {
  background-image:  url(./kuang_top_zuo@2x@2x.png),
      url(./kuang_top_you@2x@2x.png),
  url(./kuang_foot_1@2x@2x.png),
  url(./kuang_foot_2@2x@2x.png);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: left top, right top, left bottom, right bottom;
  background-size: calc(382px / 2) auto, calc( 116px / 2) auto, calc( 504px / 2) auto, calc(146px / 2) auto;
}

</style>
