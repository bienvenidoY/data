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
          @click="$emit('assign')"
        />
        <div
          class="warning-btn2 header-action-btn"
          @click="$emit('report')"
        />
      </div>
    </template>

    <div class="content-container">
      <div class="content-left">
        <div class="content-left-title content-title">
          待处理告警列表
        </div>
        <List :data="list" />
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

export default {
  components: {
    Dialog,
    List,
    Table,
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
      data: [],
    }
  },
  mounted() {
    const list = new Array(20).fill({
      title: '设备名称',
      content: '1号楼二层楼梯转角处设1号楼二层楼梯转角处设'
    })
    this.list = list
    const data = new Array(20).fill( {
      'a': '说明a',
      'b': '说明b',
      'c': '说明c',
      'd': '说明c',
    })
    this.data = data
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
