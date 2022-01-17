<template>
  <div class="page-layout">
    <div>
      <slot name="header" />
    </div>
    <div class="page-layout-left page-layout-container">
      <div class="page-layout-item left-item">
        <slot name="left" />
      </div>
      <div class="left-item left-action">
        <div
          class="left-item--select"
          @click="$emit('changeType')"
        >
          选择器
        </div>
        <div
          class="left-item--btn"
          @click="$emit('info')"
        >
          <el-button>会话</el-button>
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
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
$pageLayout-item: 200px;

.page-layout {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;

  .page-layout-container {
    height: calc(100vh - var(--header-height));
  }

  .page-layout-item {
    width: $pageLayout-item;
    height: 100%;
    background-color: rgb(244, 221, 0);
  }

  .page-layout-left {
    position: absolute;
    left: 0;
    top: var(--header-height);
  }
  .page-layout-right {
    position: absolute;
    right: 0;
    top: var(--header-height);
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
