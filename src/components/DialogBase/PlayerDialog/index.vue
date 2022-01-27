<template>
  <el-dialog
    :title="null"
    :visible.sync="isShowDialog"
    :show-close="false"
    :close-on-click-modal="false"
    append-to-body
    custom-class="player-custom-dialog"
    @close="closeDialog"
    v-on="$listeners"
  >
    <div class="player-dialog-header">
      <div class="player-dialog-title player-dialog-content-right-title">
        视频直播
      </div>
      <div
        class="dialog-close-icon"
        @click="closeDialog"
      />
    </div>
    <div class="player-dialog-content">
      <video
        controls
        controlslist="nodownload nofullscreen noremoteplayback noplaybackrate"
        :disablePictureInPicture="true"
        οncοntextmenu="return false"
        :src="src"
      />
    </div>
  </el-dialog>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      src: {},
      isShowDialog: false,
      isLoading: false,
    }
  },
  methods: {
    // 弹窗打开事件
    show({src}) {
      this.src = src
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
// 隐藏全屏按钮
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
.player-custom-dialog {
  width: 701px;
  height: 462px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  .el-dialog__header{
    padding: 0;
  }

  .el-dialog__body {
    height: 100%;
    padding: 0;
    background: url("./bg.png") no-repeat;
    background-size: cover;
  }

  .dialog-close-icon {
    height: 17px;
    width: 17px;
    background: url('../image/icon-close.png') no-repeat;
    background-size: cover;
    cursor: pointer;
  }


  .player-dialog-title {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #34B84A;
    line-height: 22px;
    padding-left: 50px;
    padding-top: 24px;
  }

  .player-dialog-content {
    padding: 13px 25px 29px;
    height: 374px;
    video {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .player-dialog-header {
    .dialog-close-icon {
      position: absolute;
      right: 21px;
      top: 21px;
    }
  }
}

</style>
