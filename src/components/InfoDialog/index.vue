<template>
  <el-dialog
    :title="title"
    :visible.sync="isShowDialog"
    :close-on-click-modal="false"
    append-to-body
    class="avue-dialog"
    width="60%"
    @close="closeDialog"
  >
    <el-row :gutter="20">
      <el-form
        ref="form"
        :model="form"
        :rules="formRules"
        label-width="120px"
        label-position="right"
      >
        <el-col :span="formLayout.span">
          <el-form-item label="标题">
            <el-select v-model="form.staff">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <!-- 底部插槽 -->
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        icon="el-icon-close"
        @click="hide"
      >
        取 消
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        @click="confirm"
      >
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
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
      this.$refs.form.resetFields()
      this.isShowDialog = false
    },
    // 取消事件 关闭弹窗
    hide() {
      this.loading()
      // 关闭且清空表单
      this.$refs.form.resetFields()
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
