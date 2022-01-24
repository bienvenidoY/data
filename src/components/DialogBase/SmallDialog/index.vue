<template>
  <el-dialog
    :title="null"
    :visible.sync="isShowDialog"
    :show-close="false"
    :close-on-click-modal="false"
    append-to-body
    custom-class="custom-dialog"
    @close="closeDialog"
    v-on="$listeners"
  >
    <div class="dialog-close-icon--container">
      <div
        class="dialog-close-icon"
        @click="closeDialog"
      />
    </div>
    <div class="dialog-title">
      {{ title }}
    </div>
    <div class="dialog-content">
      <slot />
    </div>
    <div class="dialog-footer">
      <div
        class="dialog-footer-btn flex-center"
        :class="[`dialog-footer-btn${btnType}`]"
        @click="$emit('ok')"
      />
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
    btnType: {
      type: Number,
      default: 0
    }
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
.custom-dialog {
  width: 260px;
  // height: 183px;
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

  .dialog-close-icon--container {
    display: flex;
    justify-content: flex-end;
    padding: 3px 5px 5px;
    .dialog-close-icon {
      height: 17px;
      width: 17px;
      background: url('./icon-close.png') no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }


  .dialog-title {
    padding-left: 12px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EBFFEE;
    line-height: 20px;
  }
  .dialog-content {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EBFFEE;
    line-height: 20px;
    padding: 10px 10px 0;
  }

  .dialog-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    .dialog-footer-btn {
      width: 67px;
      height: 38px;
      cursor: pointer;
    }
    .dialog-footer-btn0 {
      background: url('./ok@2x.png') no-repeat;
      background-size: cover;
    }
    .dialog-footer-btn1 {
      background: url('./zp@2x.png') no-repeat;
      background-size: cover;
    }
  }
}

</style>
