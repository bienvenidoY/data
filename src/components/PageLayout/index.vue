<template>
  <div
    class="page-layout"
    :class="[layoutType === 0 ? 'small' : 'large' ]"
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
          <!--          <slot name="left" />-->
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
  components: {
    Select,
  },
  props: {
    layoutType: {
      type: Number,
      default: 0,
    }
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
// 天地图zIndex 400
$pageLayoutIndex: 499;
$pageLayoutBg: rgba(7, 15, 3, 0.8);
$pageLayoutTop: 34px;
$pageMinWidth: 1920px;

.page-layout {
  position: relative;
  width: 100%;
  /* 上下布局 start */
  .page-layout-header, .page-layout-footer {
    position: absolute;
    left: 0;
    width: 100%;
    min-width: 1980px;
    background: $pageLayoutBg;
    z-index: $pageLayoutIndex;
  }
  .header-container {
    top: 0;
    height: var(--header-height);
  }
  .footer-container {
    top: calc(1080px - var(--footer-height));
    height: var(--footer-height);
  }
  /* 上下布局 end */

  .page-layout-container {
    position: absolute;
    z-index: $pageLayoutIndex;
  }

  .page-layout-item {
    height: 100%;
    box-sizing: border-box;
    background: rgba(7, 15, 3, 0.8) ;
    // /
  }

  .page-layout-item-bg {
    background: var(--container-bg);
    box-sizing: border-box;
  }

  .page-layout-left {
    left: 0;
    top: calc(var(--header-height) - $pageLayoutTop);
    height: calc(1080px - var(--header-height) - var(--footer-height) + $pageLayoutTop);
  }
  .page-layout-right {
    right: 0;
    top: calc(var(--header-height) - 8px);
    background: url('./bg_you@2x@2x.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
    background-position: right 7px;
    padding-right: 44px;
    // 左侧857 图片865, 所一需要865
    height: calc(1080px - var(--header-height) - var(--footer-height));
    padding-top: 8px;
  }

  /* 左侧操作区域 start */
  .left-action {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-left: 15px;
  }


  .left-item--select {
    margin-top: 60px;
  }
  /* 左侧操作区域 end */

  /* 右侧操作区域 end */
  .right-action {
    margin-top: 11px;
  }
  .right-item--btn {
    width: 130px;
    height: 43px;
    margin-bottom: 10px;
    margin-right: 20px;
    cursor: pointer;
  }
  .right-item--btn1 {
    background: url('./sbgj@2x.png') no-repeat;
    background-size: cover;
  }
  .right-item--btn2 {
    background: url('./wtsb@2x.png') no-repeat;
    background-size: cover;
  }
}

// 响应式小屏幕下左右宽度
.small {
  .page-layout-left {
    .page-layout-item-bg {
      width: $pageLayoutItemSmall;
      padding-right: 19px;
      padding-left: 37px;
    }
  }
  .page-layout-right {
    .page-layout-item-bg {
      width: $pageLayoutItemSmall;
      padding-left: 12px;
      padding-right: 44px;
    }
  }

}
</style>
