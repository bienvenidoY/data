<template>
  <div class="page-layout">
    <div class="page-layout-header header-container">
      <slot name="header" />
    </div>
    <div class="page-layout-footer footer-container">
      <slot name="footer" />
    </div>

    <div class="page-layout-left page-layout-container">
      <div class="page-layout-item left-item">
        <slot name="left" />
      </div>
      <div class="left-item left-action">
        <div
          class="left-item--select"
          @click="$emit('changeType', type)"
        >
          <el-select v-model="type">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
      <div class="page-layout-item right-item">
        <slot name="right" />
      </div>
      <div class="right-item">
        <div
          class="right-item--btn right-item--btn1"
          @click="$emit('warning')"
        >
          设备告警
        </div>
        <div
          class="right-item--btn right-item--btn2"
          @click="$emit('error')"
        >
          问题上报
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageLayout',
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {
      type: '',
      typeOptions: [],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
$pageLayoutItem: 400px;
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
    top: calc(1080px - var(--header-height) - var(--footer-height));
    height: var(--footer-height);
  }
  /* 上下布局 end */

  .page-layout-container {
    position: absolute;
    height: calc(1080px - var(--header-height) - var(--footer-height));
    z-index: $pageLayoutIndex;
    top: calc(var(--header-height) - $pageLayoutTop);
  }

  .page-layout-item {
    width: $pageLayoutItem;
    height: 100%;
    background: var(--container-bg);
  }

  .page-layout-left {
    left: 0;
  }
  .page-layout-right {
    right: 0;
  }

  .left-item {
    float: left;
  }
  .right-item {
    float: right;
  }

  .left-action {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
}
</style>
