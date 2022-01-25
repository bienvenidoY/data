<template>
  <div>
    shenasdfj
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    const list = new Array(20).fill({
      title: '设备名称',
      content: '1号楼二层楼梯转角处设1号楼二层楼梯转角处设'
    })
    this.list = list
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
<style lang="scss" scoped>
.error-dialog-content {
  padding-top: 14px;
  padding-left: 31px;
  padding-bottom: 15px;

  .error-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
