<template>
  <el-dialog
    :title="null"
    :visible.sync="isShowDialog"
    :show-close="false"
    :close-on-click-modal="false"
    append-to-body
    custom-class="oversize-custom-dialog"
    @close="closeDialog"
    v-on="$listeners"
  >
    <div class="oversize-dialog-header">
      <div class="oversize-dialog-title">
        {{ title }}
      </div>
      <div
        class="dialog-close-icon"
        @click="closeDialog"
      />
    </div>
    <div class="oversize-dialog-content">
      <slot />
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: '点位名称',
      isShowDialog: false,
      info: {},
    }
  },
  methods: {
    // 弹窗打开事件
    show(info) {
      this.info = info
      this.isShowDialog = true
    },

    // 取消事件 关闭弹窗
    hide() {
      this.isShowDialog = false
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
      this.isShowDialog = false
    },
  },
}
</script>
<style lang="scss">
.oversize-custom-dialog {
  width: 886px;
  height: 679px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  .el-dialog__header{
    padding: 0;
  }

  .el-dialog__body {
    height: 100%;
    padding: 0;
    background: url("./bg-small.png") no-repeat;
    background-size: cover;
  }

  .dialog-close-icon {
    height: 17px;
    width: 17px;
    background: url('./icon-close.png') no-repeat;
    background-size: cover;
    cursor: pointer;
  }


  .oversize-dialog-title {
    padding-left: 108px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #34B84A;
    line-height: 22px;
  }
  .oversize-dialog-content {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EBFFEE;
    line-height: 20px;
  }

  .oversize-dialog-header {
    display: flex;
    position: relative;
    padding: 5px 0 20px;
    .dialog-close-icon {
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }
}

</style>
