<template>
  <div
    class="module-card"
    :class="[injectLayoutType() === 0 ? 'small': 'large']"
  >
    <div class="module-card-title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ModuleCard',
  inject: ['injectLayoutType'],
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
  background-image:  url(./image/small/kuang_top_zuo@2x@2x.png),
      url(./image/small/kuang_top_you@2x@2x.png),
  url(./image/small/kuang_foot_2@2x@2x.png),
url(./image/small/kuang_foot_1@2x@2x.png);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: left top, right top, right bottom, left bottom;
  background-size: calc( 116px / 2) auto, calc(382px / 2) auto,  calc(146px / 2) auto,  calc( 504px / 2) auto;
}

.module-card-title {
  width: 81px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #34B84A;
  line-height: 25px;
  letter-spacing: 2px;
  margin-left: 66px;
  padding-top: 4px;
}

.large.module-card {
  background-image:  url(./image/large/kuang_top_zuo@2x@2x.png),
  url(./image/large/kuang_top_you@2x@2x.png),
  url(./image/large/kuang_foot_2@2x@2x.png),
  url(./image/large/kuang_foot_1@2x@2x.png);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: left top, right top, right bottom, left bottom;
  background-size: calc( 130px / 2) auto, calc(422px / 2) auto,  calc(162px / 2) auto,  calc( 558px / 2) auto;

}

</style>
