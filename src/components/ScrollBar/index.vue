<template>
  <el-scrollbar
    wrap-class="scrollbar-wrapper"
    v-bind="$attrs"
  >
    <slot />
  </el-scrollbar>
</template>
<script>
import { Scrollbar } from 'element-ui'

export default {
  components: {
    elScrollbar: Scrollbar,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
::v-deep.el-scrollbar {
  height: 100%;
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  .el-scrollbar__bar.is-vertical {
    width: 1px;
    background-color: #406f30;
    opacity: 1;
    margin-right: 7px;
    border-radius: 0;
  }
  .el-scrollbar__bar.is-vertical>div {
    width: 7px;
    background-color: #ffb34f;
    background-size: cover;
    left: -3px;
  }
}
</style>
