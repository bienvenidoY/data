<template>
  <div :class="[layoutType === 0 ? 'small-root-container' : 'large-root-container']">
    <!-- 布局  -->
    <PageLayout
      :layout-type="0"
      @warning="onWarning"
      @error="onError"
      @info="onInfo"
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
          <components :is="item.key" />
        </ModuleCard>
      </template>
    </PageLayout>

    <!--  天地图  -->
    <!--    <MapContainer />-->

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
    <InfoDialog ref="InfoDialog" />
    <!--  弹窗内事件  -->
    <ErrorReportDialog ref="ErrorReportDialog" />
    <AssignStaffDialog ref="AssignStaffDialog" />
  </div>
</template>
<script>
import { options, largeOptions } from './options'
import ModuleComponents from '@/components/Module/index'
import HeaderContainer from '@/components/HeaderContainer/index.vue'
import FooterContainer from '@/components/FooterContainer/index.vue'
import MapContainer from '@/components/MapContainer/index.vue'
import PageLayout from '@/components/PageLayout/index.vue'
import ModuleCard from '@/components/ModuleCard/index.vue'
import WarningDialog from '@/components/DialogGroup/WarningDialog/index.vue'
import ErrorDialog from '@/components/DialogGroup/ErrorDialog/index.vue'
import InfoDialog from '@/components/DialogGroup/InfoDialog/index.vue'
import ErrorReportDialog from '@/components/DialogGroup/ErrorReportDialog/index.vue'
import AssignStaffDialog from '@/components/DialogGroup/AssignStaffDialog/index.vue'

export default {
  components: {
    HeaderContainer,
    FooterContainer,
    MapContainer,
    ModuleCard,
    PageLayout,
    WarningDialog,
    ErrorDialog,
    InfoDialog,
    ErrorReportDialog,
    AssignStaffDialog,
    ...ModuleComponents,
  },
  data() {
    return {
      layoutType: 1,
    }
  },
  provide(){
    return {
      injectLayoutType: this.layoutType,
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
  methods: {
    onWarning() {
      this.$refs.WarningDialog.show()
    },
    onError() {
      this.$refs.ErrorDialog.show()
    },
    onInfo() {
      this.$refs.InfoDialog.show()
    },
    onChangeType() {
      //
      console.log('触发类别修改')
    },
  }
}
</script>
<style lang="scss" scoped>
.small-root-container{
  height: var(--page-height);
  width: var(--page-small-width);
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
