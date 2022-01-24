<template>
  <div
    class="page-layout"
    :class="[injectLayoutType === 0 ? 'small' : 'large' ]"
  >
    <div class="page-layout-header header-container">
      <slot name="header" />
    </div>
    <div class="page-layout-footer footer-container">
      <slot name="footer" />
    </div>

    <div class="page-layout-left page-layout-container">
      <div class="page-layout-item fl">
        <div class="page-layout-item-bg">
          <slot name="left" />
        </div>
      </div>
      <div class="fl left-action">
        <div
          class="left-item--select"
        >
          <Select @change="changeType" />
        </div>
        <div
          class="left-item--btn"
          @click="$emit('info')"
        >
          <el-button>icon</el-button>
        </div>
      </div>
    </div>
    <div class="page-layout-right page-layout-container">
      <div
        class="page-layout-item fr"
      >
        <div class="page-layout-item-bg">
          <slot name="right" />
        </div>
      </div>
      <div class="fr right-action">
        <div
          class="right-item--btn right-item--btn1"
          @click="$emit('warning')"
        />
        <div
          class="right-item--btn right-item--btn2"
          @click="$emit('error')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Select from './Select/index.vue'

export default {
  name: 'PageLayout',
  inject: ['injectLayoutType'],
  components: {
    Select,
  },
  data() {
    return {
    }
  },
  methods: {
    changeType(type) {
      this.$emit('changeType', type)
    }
  },
}
</script>
<style lang="scss" scoped>
$pageLayoutItemSmall: 400px;
$pageLayoutItemLarge: 870px;
// 天地图zIndex 400
$pageLayoutIndex: 499;
$pageLayoutBg: rgba(7, 15, 3, 0.8);
$pageLayoutTop: 34px;

.page-layout {
  position: relative;
  width: 100%;
  /* 上下布局 start */
  .page-layout-header, .page-layout-footer {
    position: absolute;
    left: 0;
    background: $pageLayoutBg;
    z-index: $pageLayoutIndex;
  }
  .footer-container {
    top: calc(1080px - var(--footer-height));
  }
  /* 上下布局 end */

  .page-layout-container {
    position: absolute;
    z-index: $pageLayoutIndex;
  }

  .page-layout-item {
    height: 100%;
    box-sizing: border-box;
    background: $pageLayoutBg ;
  }

  .page-layout-item-bg {
    background: var(--container-bg);
    box-sizing: border-box;
    display: grid;
  }

  /* 左侧操作区域 start */
  .left-action {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  /* 左侧操作区域 end */

  /* 右侧操作区域 end */


}

// 响应式小屏幕
.small {
  .page-layout-header, .page-layout-footer {
    width: var(--page-small-width);
  }

  .page-layout-left {
    left: 0;
    top: calc(var(--header-small-height) - $pageLayoutTop);
    height: calc(1080px - var(--header-small-height) - var(--footer-height) + $pageLayoutTop);
  }
  .page-layout-right {
    right: 0;
    top: calc(var(--header-small-height) - 8px);
    padding-right: 44px;
    // 左侧857 图片865, 所一需要865
    height: calc(1080px - var(--header-small-height) - var(--footer-height));
    padding-top: 8px;
  }

  .page-layout-item-bg {
    width: $pageLayoutItemSmall;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 19px;
  }
  .page-layout-left {
    .page-layout-item-bg {
      padding-right: 19px;
      padding-left: 37px;
    }
  }
  .page-layout-right {
    background: url('./image/small/bg_you@2x.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
    background-position: right 7px;
    .page-layout-item-bg {
      padding-left: 12px;
      padding-right: 44px;
    }
  }
  .right-item--btn1 {
    background: url('./image/small/sbgj@2x.png') no-repeat;
    background-size: cover;
  }
  .right-item--btn2 {
    background: url('./image/small/wtsb@2x.png') no-repeat;
    background-size: cover;
  }

  .left-item--select {
    margin-top: 60px;
  }

  .left-action {
    margin-left: 15px;
  }

  .right-item--btn {
    width: 130px;
    height: 43px;
    margin-bottom: 10px;
    margin-right: 20px;
    cursor: pointer;
  }
  .right-action {
    margin-top: 11px;
  }
}

// 响应式大屏幕
.large {
  .page-layout-header, .page-layout-footer {
    width: var(--page-large-width);
  }

  .page-layout-left {
    left: 0;
    top: calc(var(--header-large-height));
    height: calc(1080px - var(--header-large-height) - var(--footer-height));
  }
  .page-layout-right {
    right: 0;
    top: calc(var(--header-large-height));
    padding-right: 44px;
    height: calc(1080px - var(--header-large-height) - var(--footer-height));
  }

  .page-layout-item-bg {
    width: $pageLayoutItemLarge;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 22px;
  }
  .page-layout-left {
    .page-layout-item-bg {
      padding-right: 33px;
      padding-left: 37px;
      grid-column-gap: 40px;
      grid-row-gap: 22px;
    }
  }
  .page-layout-right {
    background: url('./image/large/bg_you@2x.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
    background-position: right 0;
    .page-layout-item-bg {
      width: 843px;
      padding-left: 27px;
      grid-column-gap: 39px;
      grid-row-gap: 20px;
    }
  }

  .right-item--btn1 {
    background: url('./image/large/sbgj@2x.png') no-repeat;
    background-size: cover;
  }
  .right-item--btn2 {
    background: url('./image/large/wtsb@2x.png') no-repeat;
    background-size: cover;
  }

  .left-item--select {
    margin-top: 49px;
  }
  .left-action {
    margin-left: 53px;
  }

  .right-item--btn {
    width: 204px;
    height: 68px;
    margin-bottom: 22px;
    margin-right: 19px;
    cursor: pointer;
  }
  .right-action {
    margin-top: 65px;
  }
}
</style>
