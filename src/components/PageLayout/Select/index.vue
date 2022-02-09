<template>
  <el-select
    v-model="type"
    class="page-layout-select"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
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
  inject: ['injectLayoutType'],
  data() {
    return {
      /*
      * OTHER(0, "其他"),
    COMPANY(10, "企业"),
    EP_FACILITY(11, "企业环保设施"),
    GW_ARCHIVE(20, "管网档案"),
    RHPK_ARCHIVE(21, "入河排口档案"),
    YWJ_ARCHIVE(22, "雨污井档案"),
    BZ_ARCHIVE(23, "泵站档案"),
    YSGW_MONITOR(30, "雨水管网监控"),
    YPK_SYSTEM(31, "雨排口控制系统"),
    WSGW_MONITOR(32, "污水管网监控"),
    HDSZ_MONITOR(33, "河道水质监控"),

      * */
      typeOptions: [
        {
          label: '全部',
          value: '',
        },
        {
          label: '企业',
          value: 10,
        },
        {
          label: '管网档案',
          value: 20,
        },
        {
          label: '入河排口档案',
          value: 21,
        },
        {
          label: '雨污井档案',
          value: 22,
        },
        {
          label: '泵站档案',
          value: 23,
        },
        {
          label: '雨水管网监控',
          value: 30,
        },
        {
          label: '雨排口控制系统',
          value: 31,
        },
        {
          label: '污水管网监控',
          value: 32,
        },
        {
          label: '河道水质监控',
          value: 33,
        },

      ],
      type: '',
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
  .el-input .el-select__caret {
    transform: rotateZ(0);
  }
  .el-input .el-select__caret.is-reverse {
    transform: rotateZ(180deg);
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

::v-deep.large.page-layout-select {
  width: 237px;
  height: 49px;
  background: url('./big-sousuok@2x.png') no-repeat;
  background-size: cover;
  .el-input--small .el-input__inner {
    height: 49px;
    line-height: 49px;
    font-size: 14px;
  }
  .el-input__icon {
    width: 18px;
    height: 12px;
    background: url(./big-xiala@2x.png) no-repeat;
    background-size: cover;
    position: absolute;
    margin-top: 18px;
    margin-left: -25px;
    &:before {
      content: '';
    }
  }
}

</style>
