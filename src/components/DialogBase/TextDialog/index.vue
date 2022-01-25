<template>
  <el-dialog
    :title="null"
    :visible.sync="isShowDialog"
    :show-close="false"
    :close-on-click-modal="false"
    append-to-body
    custom-class="text-custom-dialog"
    @close="closeDialog"
    v-on="$listeners"
  >
    <div class="text-dialog-header">
      <div class="text-dialog-title text-dialog-content-right-title">
        {{ title }}
      </div>
      <div
        class="dialog-close-icon"
        @click="closeDialog"
      />
    </div>
    <div class="text-dialog-content">
      <ScrollBar :view-style="[{ height: '230px'}]">
        <div
          v-for="(item, index) in content"
          :key="index"
          class="text-dialog-content--item"
        >
          {{ item.label }}:{{ item.value }}
        </div>
      </ScrollBar>
    </div>
  </el-dialog>
</template>
<script>
import ScrollBar from '@/components/ScrollBar/index.vue'

export default {
  components: {
    ScrollBar
  },
  data() {
    return {
      content: [],
      title: '提示',
      isShowDialog: false,
      isLoading: false,
    }
  },
  methods: {
    // 弹窗打开事件
    show(info) {
      const { title, content } = info
      this.content = content
      this.title = title
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
.text-custom-dialog {
  width: 471px;
  height: 333px;
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


  .text-dialog-title {
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #477B29;
    line-height: 20px;
    padding-left: 15px;
    position: relative;
    &:before {
      position: absolute;
      content: ' ';
      width: 1px;
      height: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: #34B84A;
      left: 0;
    }
  }

  .text-dialog-content {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EBFFEE;
    line-height: 20px;
    padding: 14px 6px 22px 32px;
    height: 230px;
    .text-dialog-content--item + .text-dialog-content--item {
      margin-top: 10px;
    }
  }

  .text-dialog-header {
    display: flex;
    position: relative;
    padding: 47px 0 0 31px;
    .dialog-close-icon {
      position: absolute;
      right: 10px;
      top: 7px;
    }

    .text-dialog-action {
      flex: 1;
    }

  }
}

</style>
