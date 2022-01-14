<template>
  <div class="page-layout">
    <div class="page-layout-left page-layout-item">
      <slot name="left" />
    </div>
    <div class="page-layout-right page-layout-item">
      <slot name="right" />
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
  .page-layout-item {
    width: 200px;
    height: 100vh;
    position: absolute;
    background-color: #ffff00;
  }

  .page-layout-left {
    left: 0;
  }
  .page-layout-right {
    right: 0;
  }
}
</style>
