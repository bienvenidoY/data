<template>
  <div class="page-layout">
    <div class="page-layout-header">
      <slot name="header" />
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
$pageLayout-item: 400px;
// 天地图zIndex 400
$pageLayout-index: 499;

.page-layout {
  .page-layout-container {
    height: calc(100vh - var(--header-height));
  }

  .page-layout-item {
    width: $pageLayout-item;
    height: 100%;
    background-color: rgb(244, 221, 0, 0.7);
  }
  .page-layout-header {
    position: absolute;
    left: 0;
    height: var(--header-height);
    width: 100%;
    min-width: 1980px;
    z-index: $pageLayout-index;
  }

  .page-layout-left {
    position: absolute;
    left: 0;
    z-index: $pageLayout-index;
    top: var(--header-height);
  }
  .page-layout-right {
    position: absolute;
    right: 0;
    z-index: 499;
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
