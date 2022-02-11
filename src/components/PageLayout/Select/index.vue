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
      * COMPANY(1000, "企业"),
    GW_WATER_ARCHIVE(2001, "档案-管网-雨水管网"),
    GW_SEWAGE_ARCHIVE(2002, "档案-管网-污水管网"),
    RHPK_ARCHIVE(2100, "档案-入河排口"),
    YWJ_ARCHIVE(2200, "档案-雨污井"),
    BZ_ARCHIVE(2300, "档案-泵站"),
    YSGW_MONITOR(3000, "设备-雨水管网监控"),
    YPK_SYSTEM(3100, "设备-雨排口控制系统"),
    WSGW_MONITOR(3200, "设备-污水管网监控"),
    HDSZ_MONITOR(3300, "设备-河道水质监控"),
      * */
      typeOptions: [
        {
          label: '全部',
          value: '',
        },
        {
          label: '企业',
          value: 1000,
        },
        {
          label: '档案-管网-雨水管网',
          value: 2001,
        },
        {
          label: '档案-管网-污水管网',
          value: 2002,
        },
        {
          label: '档案-入河排口',
          value: 2100,
        },
        {
          label: '档案-雨污井',
          value: 2200,
        },
        {
          label: '档案-泵站',
          value: 2300,
        },
        {
          label: '设备-雨水管网监控',
          value: 3000,
        },
        {
          label: '设备-雨排口控制系统',
          value: 3100,
        },
        {
          label: '设备-污水管网监控',
          value: 3200,
        },
        {
          label: '设备-河道水质监控',
          value: 3300,
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
