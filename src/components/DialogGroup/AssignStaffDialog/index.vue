<template>
  <Dialog
    ref="dialog"
    title="分配人员"
    :btn-type="1"
    @close="closeDialog"
    @ok="onOk"
  >
    <div class="assign-dialog">
      <div class="assign-select-container flex-center">
        <el-select
          v-model="form.type"
          class="assign-select-type select"
          :popper-append-to-body="false"
        >
          <el-option
            label="企业"
            value="1"
          />
          <el-option
            label="园区"
            value="2"
          />
        </el-select>
        <el-select
          v-model="form.staff"
          class="assign-select-staff select"
          :popper-append-to-body="false"
          placeholder="请选择"
        >
          <el-option
            label="企业"
            value="1"
          />
          <el-option
            label="园区"
            value="2"
          />
        </el-select>
      </div>
      <el-date-picker
        v-model="form.time"
        class="select assign-select-time"
        :popper-append-to-body="false"
        type="date"
        placeholder="选择日期"
      />
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
      form: {
        type: '1',
        staff: '',
        time: '',
      },
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
<style lang="scss" scoped>
::v-deep .select {
  height: 32px;

}

.assign-select-container {
  margin-bottom: 10px;
  ::v-deep .assign-select-type {
    flex: 1;
    .el-input__inner {
      border-right: 0;
      border-radius: 5px 0 0 5px;
    }

  }
  ::v-deep .assign-select-staff {
    width: 162px;
    .el-input__inner {
      border-radius: 0 5px 5px 0;
    }
  }
}

.assign-select-time {
  width: 238px;
}
</style>
