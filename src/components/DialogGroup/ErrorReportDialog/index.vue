<template>
  <Dialog
    ref="dialog"
    title="转为误报"
    btn-text="确认"
    @close="closeDialog"
    @ok="onOk"
  >
    <div style="margin-left: 20px">
      是否将该告警处置为误报
    </div>
  </Dialog>
</template>
<script>
import Dialog from '@/components/DialogBase/SmallDialog/index.vue'

export default {
  components: {
    Dialog,
  },
  data() {
    return {
      isShowDialog: false,
      isLoading: false,
    }
  },
  methods: {
    // 弹窗打开事件
    show() {
      this.$refs.dialog.show()
    },
    // 弹窗确认事件
    onOk() {
      this.done()
    },
    // 取消loading事件
    loading() {
      this.isLoading = false
    },
    // 完成事件 传递给外部使用
    done() {
      this.loading()
      this.$refs.dialog.hide()
    },
    // 取消事件 关闭弹窗
    hide() {
      this.loading()
      // 关闭且清空表单
      this.$refs.dialog.hide()
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
      this.loading()
      this.$refs.dialog.hide()
    },
  },
}
</script>
