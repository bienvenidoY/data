<template>
  <Dialog
    ref="dialog"
    title="转为误报"
    @close="closeDialog"
  >
    <div style="margin-left: 20px">
      是否将浸膏初值为维保
    </div>
  </Dialog>
</template>
<script>
import Dialog from '@/components/Dialog/index.vue'

export default {
  components: {
    Dialog,
  },
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
      this.$refs.dialog.show()
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
