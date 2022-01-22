<template>
  <div class="root-container">
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
        >
          <components :is="item.key" />
        </ModuleCard>
      </template>
      <template #right>
        <ModuleCard
          v-for="(item, index) in layoutList.right"
          :key="index"
          class="module-card-wrapper"
          :class="{'small-right-first' : index === 0}"
          :title="item.title"
        >
          <components :is="item.key" />
        </ModuleCard>
      </template>
    </PageLayout>

    <!--  天地图  -->
    <!--    <MapContainer />-->

    <WarningDialog ref="WarningDialog" />
    <ErrorDialog ref="ErrorDialog" />
    <InfoDialog ref="InfoDialog" />
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
import WarningDialog from '@/components/WarningDialog/index.vue'
import ErrorDialog from '@/components/ErrorDialog/index.vue'
import InfoDialog from '@/components/InfoDialog/index.vue'

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
    ...ModuleComponents,
  },
  data() {
    return {
    }
  },
  computed: {
    layoutList() {
      // 0 1980尺寸，1 大屏尺寸
      const layoutType = 0
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
      const { list, limit } = obj[layoutType]

      return {
        left: list.slice(0, limit),
        right: list.slice(limit, list.length)
      }
    }
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
.root-container {
  height: 100%;
  min-width: 1980px;
}

.module-card-wrapper + .module-card-wrapper{
  margin-top: 19px;
}

.small-right-first {
  margin-top: -8px;
}
</style>
