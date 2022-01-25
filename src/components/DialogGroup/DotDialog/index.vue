<template>
  <Dialog
    ref="dialog"
    title="问题上报"
    @close="closeDialog"
  >
    <div class="dot-dialog-header">
      <div class="header-item">
        点位类别：
      </div>
      <div class="header-item">
        所属管段：
      </div>
      <div class="header-item">
        最后上报时间：
      </div>
    </div>
    <div class="dot-dialog-action">
      <div class="dialog-action--status">
        在线
      </div>
      <div class="dialog-action--icon" />
    </div>
    <components :is="type" />
  </Dialog>
</template>
<script>
import Dialog from '@/components/DialogBase/OversizeDialog/index.vue'
import Dialog1 from './Dialog1/index.vue'

export default {
  components: {
    Dialog,
    Dialog1,
  },
  data() {
    return {
      type: 'Dialog1',
      info: {},
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
    show(type, info) {
      this.type = type
      this.info = info
      this.$refs.dialog.show()
    },

    // 取消事件 关闭弹窗
    hide() {
      // 关闭且清空表单
      this.$refs.dialog.hide()
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
      this.$refs.dialog.hide()
    },
  },
}
</script>
<style lang="scss" scoped>
.dot-dialog-header {
  padding-left: 38px;
  padding-bottom: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  .header-item + .header-item {
    margin-top: 10px;
  }
}
.dot-dialog-action {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #34B84A;
  line-height: 22px;
  padding-bottom: 20px;
  padding-left: 730px;
  position: relative;
  .dialog-action--icon {
    position: absolute;
    right: 30px;
    top: -15px;
    width: 32px;
    height: 32px;
    background: red;
  }
}
</style>
