<template>
  <div
    v-if="isLogin"
    :class="[layoutType === 0 ? 'small-root-container' : 'large-root-container']"
  >
    <!-- 布局  -->
    <PageLayout
      v-if="layoutType === 0 || layoutType === 1"
      @warning="onWarning"
      @error="onError"
      @changeType="onChangeType"
    >
      <template #header>
        <HeaderContainer />
      </template>
      <template #footer>
        <FooterContainer />
      </template>
      <template #left>
        <ModuleCard
          v-for="(item, index) in layoutList.left"
          :key="index"
          class="module-card-wrapper"
          :title="item.title"
          :style="{ height: item.height}"
        >
          <components :is="item.key" />
        </ModuleCard>
      </template>
      <template #right>
        <ModuleCard
          v-for="(item, index) in layoutList.right"
          :key="index"
          class="module-card-wrapper"
          :class="{'small-right-first' : layoutType === 0 && index === 0}"
          :title="item.title"
          :style="{ height: item.height}"
        >
          <components
            :is="item.key"
            :module9module10data="module9Module10Data"
            :module11module12data="module11Module12Data"
            :module3module9module10data="module3Module9Module10Data"
          />
        </ModuleCard>
      </template>
    </PageLayout>

    <!--  天地图  -->
    <MapContainer
      :type="type"
      @action="onAction"
    />

    <WarningDialog
      ref="WarningDialog"
      @report="$refs.ErrorReportDialog.show()"
      @assign="$refs.AssignStaffDialog.show()"
    />
    <ErrorDialog
      ref="ErrorDialog"
      @report="$refs.ErrorReportDialog.show()"
      @assign="$refs.AssignStaffDialog.show()"
    />
    <!--  弹窗内事件  -->
    <ErrorReportDialog ref="ErrorReportDialog" />
    <AssignStaffDialog ref="AssignStaffDialog" />

    <!--  地图点 工具弹窗  -->
    <DotDialog ref="DotDialog" />
  </div>
</template>
<script>
import { options, largeOptions } from './options'
import { getQueryString } from '@/utils/tool'
import ModuleComponents from '@/components/Module/index'
import HeaderContainer from '@/components/HeaderContainer/index.vue'
import FooterContainer from '@/components/FooterContainer/index.vue'
import MapContainer from '@/components/MapContainer/index.vue'
import PageLayout from '@/components/PageLayout/index.vue'
import ModuleCard from '@/components/ModuleCard/index.vue'
import WarningDialog from '@/components/DialogGroup/WarningDialog/index.vue'
import ErrorDialog from '@/components/DialogGroup/ErrorDialog/index.vue'
import ErrorReportDialog from '@/components/DialogGroup/ErrorReportDialog/index.vue'
import AssignStaffDialog from '@/components/DialogGroup/AssignStaffDialog/index.vue'
import DotDialog from '@/components/DialogGroup/DotDialog/index.vue'
import {getAlarmNum, getDeviceNum, getToken} from '@/api/cockpit';

export default {
  components: {
    HeaderContainer,
    FooterContainer,
    MapContainer,
    ModuleCard,
    PageLayout,
    WarningDialog,
    ErrorDialog,
    ErrorReportDialog,
    AssignStaffDialog,
    DotDialog,
    ...ModuleComponents,
  },
  data() {
    return {
      layoutType: -1,
      isLogin: false,
      type: '', // 点位类型
      module9Module10Data: {}, // 模块9-10数据
      module11Module12Data: [], // 模块11-12数据
      module3Module9Module10Data: {}, // 模块3-9-10数据
    }
  },
  provide(){
    return {
      injectLayoutType: () => this.layoutType,
    }
  },
  computed: {
    layoutList() {
      const obj = {
        0: {
          list: options,
          limit: 4,
        },
        1: {
          list: largeOptions,
          limit: 6,
        }
      }
      const { list, limit } = obj[this.layoutType]

      return {
        left: list.slice(0, limit),
        right: list.slice(limit, list.length)
      }
    },
  },
  created() {
    this.getToken()
    window.addEventListener('resize', this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler);
  },
  mounted() {
    this.layoutType = document.documentElement.clientWidth <= 1920 ? 0 : 1
  },
  methods: {
    myEventHandler() {
      this.layoutType = document.documentElement.clientWidth <= 1920 ? 0 : 1
    },
    onWarning() {
      this.$refs.WarningDialog.show()
    },
    onError() {
      this.$refs.ErrorDialog.show()
    },
    onAction(type, info) {
      if(type.includes('Dialog')) {
        this.$refs.DotDialog.show(type, info)
        return
      }
    },
    onChangeType(type) {
      //
      console.log('触发类别修改', type)
      this.type = type
    },
    getToken() {
      // 定义两个参数 临时 tempToken 和 登录 token
      // 获取linshiToken -> token -> 本地存储 -> 重载
      if(getQueryString('tempToken')) {
        getToken({
          tempToken: getQueryString('tempToken')
        }).then(res => {
          this.loginSuccess(res.data)
        })
      }else if(getQueryString('token')) {
        this.loginSuccess(getQueryString('token'))
      }else {
        this.$message.error('没有token')
      }
    },
    loginSuccess(token) {
      localStorage.setItem('tianditu-token', token)
      this.isLogin = true

      this.getAlarmNum()
      this.getDeviceNum()
    },
    loginError() {

    },
    getAlarmNum() {
      getAlarmNum().then(res => {
        this.module11Module12Data = res.data
        console.log('res.data', res.data)
      })
    },
    getDeviceNum() {
      getDeviceNum().then(res => {
        this.module3Module9Module10Data = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.small-root-container{
  height: var(--page-height);
  width: var(--page-small-width);
  .module-card-wrapper{
    width: 344px;
  }
}
.large-root-container {
  width: var(--page-large-width);
  height: var(--page-height);
  .module-card-wrapper {
    width: 380px;
  }
}


.small-right-first {
  margin-top: -8px;
}
</style>
