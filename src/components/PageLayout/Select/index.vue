<template>
  <el-select
    v-model="type"
    class="page-layout-select"
    v-on="$listeners"
  >
    <el-option
      v-for="item in typeOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script>
export default {
  data() {
    return {
      typeOptions: [
        {
          label: '全部',
          value: 1,
        }
      ],
      type: 1
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.page-layout-select {
  width: 184px;
  height: 38px;
  background: url('./sousuok@2x.png') no-repeat;
  background-size: cover;
  .el-input--small .el-input__inner {
    height: 38px;
    line-height: 38px;
  }
  .el-input__inner {
    background: transparent;
  }

  .el-input__icon {
    width: 14px;
    height: 9px;
    background: url(./xiala@2x.png) no-repeat;
    background-size: cover;
    position: absolute;
    margin-top: 12px;
    margin-left: -20px;
    &:before {
      content: '';
    }
  }
}

</style>
