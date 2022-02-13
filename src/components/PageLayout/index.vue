<template>
  <div
    class="page-layout"
    :class="[injectLayoutType() === 0 ? 'small' : 'large' ]"
  >
    <!-- 布局层  start  由于渐变底色不正确，所以采用布局分层 -->
    <div class="page-layout-bg-container">
      <!--  渐变层    -->
      <div class="gradient-header page-layout-header gradient-bg" />
      <div class="gradient-footer page-layout-footer gradient-bg" />
      <div class="gradient-left  gradient-bg" />
      <div class="gradient-right gradient-bg" />

      <!--  纯色层    -->
      <div class="pure-header page-layout-header" />
      <div class="pure-footer page-layout-footer pure-bg" />
      <div class="pure-left  pure-bg" />
      <div class="pure-right pure-bg" />
    </div>
    <!-- 布局层  end -->

    <div class="page-layout-header container-bg">
      <div class="page-layout-bg">
        <slot name="header" />
      </div>
    </div>
    <div class="page-layout-footer container-bg">
      <div class="page-layout-bg">
        <slot name="footer" />
      </div>
    </div>

    <div class="page-layout-left page-layout-container">
      <div class="page-layout-item container-bg ">
        <div class="page-layout-item-bg page-layout-bg page-layout-left-container">
          <slot name="left" />
        </div>
      </div>
      <div class="left-action">
        <div
          class="left-item--select"
        >
          <Select @change="changeType" />
        </div>
      </div>
    </div>
    <div class="page-layout-right page-layout-container">
      <div
        class="page-layout-item container-bg"
      >
        <div class="page-layout-item-bg page-layout-right-container page-layout-bg">
          <slot name="right" />
        </div>
      </div>
      <div class="right-action">
        <div
          v-if="alarmBtn"
          class="right-item--btn right-item--btn1"
          @click="$emit('warning')"
        />
        <div
          v-if="reportBtn"
          class="right-item--btn right-item--btn2"
          @click="$emit('error')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Select from './Select/index.vue'
import {getAlarmUserHandle, getProblemReport} from '@/api/cockpit';

export default {
  name: 'PageLayout',
  inject: ['injectLayoutType'],
  components: {
    Select,
  },
  data() {
    return {
      alarmBtn: false, // 告警按钮
      reportBtn: false, // 问题按钮

    }
  },
  mounted() {
    this.getProblemReport()
    this.getAlarmUserHandle()
  },
  methods: {
    changeType(type) {
      this.$emit('changeType', type)
    },
    getProblemReport() {
      getProblemReport({
        handleState: 1,
        isProcessTask: 1
      }).then(res => {
        this.reportBtn = !!res.rows.length
      })
    },
    getAlarmUserHandle() {
      getAlarmUserHandle({
        handleState: 1,
        isProcessTask: 1
      }).then(res => {
        this.alarmBtn = !!res.rows.length
      })
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

//.container-bg {
//  background: var(--container-bg)
//}
//
//.page-layout-bg {
//  background: $pageLayoutBg;
//}


.page-layout {
  position: relative;
  width: 100%;
  /* 上下布局 start */
  .page-layout-header, .page-layout-footer {
    position: absolute;
    left: 0;
    z-index: $pageLayoutIndex + 10;
  }
  .page-layout-footer {
    height: var(--footer-height);
    top: calc(1080px - var(--footer-height));
  }
  /* 上下布局 end */

  .page-layout-container {
    position: absolute;
    z-index: $pageLayoutIndex + 10;
  }

  .page-layout-item {
    height: 100%;
    box-sizing: border-box;
  }

  .page-layout-item-bg {
    box-sizing: border-box;
    display: grid;
  }

  /* 左侧操作区域 start */
  .left-action {
    position: absolute;
    top: 0;
  }
  .right-action {
    position: absolute;
    top: 0;
  }

  /* 左侧操作区域 end */

  /* 右侧操作区域 end */


}

// 响应式小屏幕
.small {
  .page-layout-header, .page-layout-footer {
    width: var(--page-small-width);
  }
  .page-layout-header {
    height: var(--header-small-height);
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

  .page-layout-left-container {
    width: $pageLayoutItemSmall;
    padding-right: 19px;
    padding-left: 37px;
    box-sizing: border-box
  }

  .page-layout-right-container {
    width: calc($pageLayoutItemSmall - 44px);
    padding-left: 12px;
    box-sizing: border-box
  }

  .page-layout-item-bg {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 19px;
  }
  .page-layout-left {
    .page-layout-item-bg {

    }
  }
  .page-layout-right {
    background: url('./image/small/bg_you@2x.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
    background-position: right 7px;
    .page-layout-item-bg {
      // padding-right: 44px;
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
    margin-left: calc($pageLayoutItemSmall + 15px);
  }

  .right-item--btn {
    width: 130px;
    height: 43px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .right-action {
    margin-top: 25px;
    right: calc($pageLayoutItemSmall + 20px);
  }
}

// 响应式大屏幕
.large {
  .page-layout-header, .page-layout-footer {
    width: var(--page-large-width);
  }

  .page-layout-header {
    height: var(--header-large-height);
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
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 22px;
  }

  .page-layout-left-container {
    width: $pageLayoutItemLarge;
    padding-top: 6px;
    padding-right: 33px;
    padding-left: 37px;
    box-sizing: border-box
  }

  .page-layout-right-container {
    width: 826px;
    padding-left: 27px;
    padding-top: 5px;
    box-sizing: border-box;
  }

  .page-layout-left {
    .page-layout-item-bg {
      grid-column-gap: 40px;
      grid-row-gap: 20px;
    }
  }
  .page-layout-right {
    background: url('./image/large/bg_you@2x.png');
    background-size: 44px auto;
    background-repeat: no-repeat;
    background-position: right 0;
    .page-layout-item-bg {
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
    margin-left: calc($pageLayoutItemLarge + 20px);
  }

  .right-item--btn {
    width: 204px;
    height: 68px;
    margin-bottom: 22px;
    cursor: pointer;
  }
  .right-action {
    margin-top: 65px;
    right: calc($pageLayoutItemLarge + 19px);
  }
}

.gradient-bg {
  background: var(--container-bg);
  z-index: $pageLayoutIndex + 4!important;
  position: absolute;
}
.pure-bg {
  background: $pageLayoutBg;
  z-index: $pageLayoutIndex + 8!important;
  position: absolute;
}

.small {
  .gradient-left, .pure-left {
    width: $pageLayoutItemSmall;
    left: 0;
    top: var(--header-small-height);
    height: calc(var(--page-height) - var(--header-small-height) - var(--footer-height))
  }
  .gradient-right, .pure-right {
    top: var(--header-small-height);
    height: calc(var(--page-height) - var(--header-small-height) - var(--footer-height));
    width: $pageLayoutItemSmall;
    right: 0;
  }
}

.large {
  //.gradient-header{
  //  background: url('./image/large/gradient-header-bg.png') no-repeat;
  //  background-size: cover;
  //}
  //.gradient-footer{
  //  background: url('./image/large/gradient-footer-bg.png') no-repeat;
  //  background-size: cover;
  //}
  //.gradient-left{
  //  background: url('./image/large/gradient-left-bg.png') no-repeat;
  //  background-size: cover;
  //}
  //.gradient-right{
  //  background: url('./image/large/gradient-right-bg.png') no-repeat;
  //  background-size: cover;
  //}
  .gradient-left, .pure-left {
    width: $pageLayoutItemLarge;
    left: 0;
    top: var(--header-large-height);
    height: calc(var(--page-height) - var(--header-large-height) - var(--footer-height))
  }
  .gradient-right, .pure-right {
    top: var(--header-large-height);
    height: calc(var(--page-height) - var(--header-large-height) - var(--footer-height));
    width: $pageLayoutItemLarge;
    right: 0;
  }
}

</style>
