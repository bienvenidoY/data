<template>
  <div class="page-layout">
    <div class="page-layout-left page-layout-container">
      <div class="page-layout-item left-item">
        <slot name="left" />
      </div>
      <div class="left-item left-action">
        <div
          class="left-item--btn"
          @click="$emit('info')"
        >
          点
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
.page-layout {
  position: relative;

  .page-layout-container {
    height: calc(100vh - var(--header-height));
  }

  .page-layout-item {
    width: 200px;
    height: 100%;
    background-color: #ffff00;
  }

  .page-layout-left {
    position: absolute;
    left: 0;
  }
  .page-layout-right {
    position: absolute;
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
    justify-content: end;
  }
}
</style>
