<template>
  <Dialog
    ref="dialog"
    title="设备告警"
    @close="closeDialog"
  >
    <template #headerAction>
      <div class="header-action">
        <div
          class="warning-btn1 header-action-btn"
          @click="$emit('assign','warning', current)"
        />
        <div
          class="warning-btn2 header-action-btn"
          @click="$emit('report','warning', current)"
        />
      </div>
    </template>

    <div class="content-container">
      <div class="content-left">
        <div class="content-left-title content-title">
          待处理告警列表
        </div>
        <List
          :current="current"
          :data="list"
          @handleClick="handleClick"
        />
      </div>
      <div class="content-right">
        <div class="content-right-title content-title">
          告警详情
        </div>
        <Table :data="data" />
      </div>
    </div>
  </Dialog>
</template>
<script>
import Dialog from '@/components/DialogBase/BigDialog/index.vue'
import List from './components/List/index.vue'
import Table from './components/Table/index.vue'
import {getAlarmUserHandle, getAlarmUserHandleInfo} from '@/api/cockpit';
import dayjs from 'dayjs'

export default {
  components: {
    Dialog,
    List,
    Table,
  },
  data() {
    return {
      list: [],
      data: [],
      current: {},
    }
  },
  mounted() {
    this.getAlarmUserHandle()
  },
  methods: {
    // 弹窗打开事件
    show() {
      this.$refs.dialog.show()
    },
    getAlarmUserHandle() {
      getAlarmUserHandle({
        isProcessTask: 1,
        handleState: 1,
      }).then(res => {
        this.list = res.rows
      })
    },
    handleClick(item) {
      this.current = item
      this.getAlarmUserHandleInfo()
    },
    getAlarmUserHandleInfo() {
      getAlarmUserHandleInfo(this.current.alarmId).then(res => {
        this.data = res.data.deviceAlarmInfos.map(v => {
          v.deviceName = res.data.deviceName
          v.deviceType = res.data.deviceType
          v.time = dayjs(v.time).format('YYYY-MM-DD HH:mm:ss')
          return v
        })
      })
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
.header-action {
  display: flex;
  justify-content: flex-end;
  padding-right: 32px;
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

.content-container {
  display: flex;
  position: relative;
}
.content-left {
  width: 264px;
  margin-right: 15px;
  &:before {
    position: absolute;
    left: 263px;
    content: ' ';
    width: 1px;
    height: 371px;
    top: 2px;
    background: linear-gradient(to top, #fff 4%, #1A5D27 4%, #1A5D27 96%, #fff 96%);
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

.content-left-title {
  text-align: center;
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
</style>
