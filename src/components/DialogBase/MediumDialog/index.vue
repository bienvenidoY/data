<template>
  <el-dialog
    :title="null"
    :visible.sync="isShowDialog"
    :show-close="false"
    :close-on-click-modal="false"
    append-to-body
    custom-class="mediumcustom-dialog"
    @close="closeDialog"
    v-on="$listeners"
  >
    <div class="medium-dialog-header">
      <div class="medium-dialog-title">
        {{ title }}
      </div>
      <div class="medium-dialog-action">
        <slot name="headerAction" />
      </div>
      <div
        class="dialog-close-icon"
        @click="closeDialog"
      />
    </div>
    <div class="medium-dialog-content">
      <slot />
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示',
    },
  },
  data() {
    return {
      isShowDialog: false,
    }
  },
  methods: {
    // 弹窗打开事件
    show() {
      this.isShowDialog = true
    },
    // 取消loading事件
    loading() {
      this.isLoading = false
    },
    // 完成事件 传递给外部使用
    done() {
      this.isShowDialog = false
    },
    // 取消事件 关闭弹窗
    hide() {
      // 关闭且清空表单
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
.mediumcustom-dialog {
  width: 471px;
  height: 473px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  .el-dialog__header{
    padding: 0;
  }

  .el-dialog__body {
    height: 100%;
    padding: 0;
    background: url("./bg.png") no-repeat;
    background-size: cover;
  }

  .dialog-close-icon {
    height: 17px;
    width: 17px;
    background: url('../image/icon-close.png') no-repeat;
    background-size: cover;
    cursor: pointer;
  }


  .medium-dialog-title {
    padding-left: 105px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #34B84A;
    line-height: 22px;
  }
  .medium-dialog-content {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EBFFEE;
    line-height: 20px;
  }

  .medium-dialog-header {
    display: flex;
    position: relative;
    padding: 5px 0 0;
    .dialog-close-icon {
      position: absolute;
      right: 10px;
      top: 7px;
    }

    .medium-dialog-action {
      flex: 1;
    }

  }
}

</style>
