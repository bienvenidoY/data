<template>
  <Dialog
    ref="dialog"
    title="问题上报"
    @close="closeDialog"
  >
    <div class="error-dialog-content">
      <div class="error-dialog-header">
        <div class="content-right-title content-title">
          告警详情
        </div>
        <div class="header-action">
          <div
            class="warning-btn1 header-action-btn"
            @click="$emit('assign', 'error' , current)"
          />
          <div
            class="warning-btn2 header-action-btn"
            @click="$emit('report', 'error' , current)"
          />
        </div>
      </div>
      <div class="error-dialog-list">
        <List
          :data="list"
          :current="current"
        />
      </div>
    </div>
  </Dialog>
</template>
<script>
import Dialog from '@/components/DialogBase/MediumDialog/index.vue'
import List from './List/index.vue'

export default {
  components: {
    Dialog,
    List,
  },
  props: {
    title: {
      type: String,
      default: '提示',
    },
  },
  data() {
    return {
      list: [],
      current: {},
    }
  },
  mounted() {
  },
  methods: {
    // 弹窗打开事件
    show() {
      this.$refs.dialog.show()
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
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
  .header-action {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    .header-action-btn {
      width: 85px;
      height: 32px;
      margin-left: 9px;
      cursor: pointer;
    }
    .warning-btn1 {
      background:url('./zp@2x.png') no-repeat;
      background-size: cover;
    }
    .warning-btn2 {
      background:url('./wb@2x.png') no-repeat;
      background-size: cover;
    }
  }

  .content-title {
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #477B29;
    line-height: 20px;
    padding: 10px 0 11px;
  }
  .content-right-title {
    padding-left: 15px;
    position: relative;
    &:before {
      position: absolute;
      left: 0;
      content: ' ';
      width: 1px;
      height: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: #34B84A;
    }
  }

  .error-dialog-list {
    padding: 5px 10px 5px 0;
  }
}
</style>
