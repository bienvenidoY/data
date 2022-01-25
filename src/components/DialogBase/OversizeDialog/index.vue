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
      <div class="oversize-dialog-action">
        <slot name="headerAction" />
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
  props: {
    title: {
      type: String,
      default: '提示',
    },
  },
  data() {
    return {
      formLayout: {
        span: 24,
      },
      isShowDialog: false,
      isLoading: false,
      form: {
        staff: '',
      },
      formRules: {},
      row: {},
      options: [],
    }
  },
  methods: {
    // 弹窗打开事件
    show() {
      this.isShowDialog = true
    },
    // 弹窗确认事件
    confirm() {
      this.$refs.form.validate(valid => {
        if (!valid) return
        const form = {}
        this.$emit('confirm', form, this.loading, this.done)
      })
    },
    // 取消loading事件
    loading() {
      this.isLoading = false
    },
    // 完成事件 传递给外部使用
    done() {
      this.loading()
      this.isShowDialog = false
    },
    // 取消事件 关闭弹窗
    hide() {
      this.loading()
      // 关闭且清空表单
      this.isShowDialog = false
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
      this.loading()
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
    padding-left: 25px;
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
    padding: 24px 24px 0;
    .dialog-close-icon {
      position: absolute;
      right: 22px;
      top: 22px;
    }

    .oversize-dialog-action {
      flex: 1;
    }

  }
}

</style>
