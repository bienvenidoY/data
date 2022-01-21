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
  </div>
</template>
<script>
import { options, largeOptions } from './options'
/* es6 import 解构失败 https://www.jianshu.com/p/ba6f582d5249 */
import ModuleComponents from '@/components/Module/index'
const {
  Module1,
  Module2,
  Module3,
  Module4,
  Module5,
  Module6,
  Module7,
  Module8,
  Module9,
  Module10,
  Module11,
  Module12,
  Module13,
  Module14,
} = ModuleComponents

import HeaderContainer from '@/components/HeaderContainer/index.vue'
import FooterContainer from '@/components/FooterContainer/index.vue'
import MapContainer from '@/components/MapContainer/index.vue'
import PageLayout from '@/components/PageLayout/index.vue'
import ModuleCard from '@/components/ModuleCard/index.vue'

export default {
  components: {
    HeaderContainer,
    FooterContainer,
    MapContainer,
    ModuleCard,
    PageLayout,
    Module1,
    Module2,
    Module3,
    Module4,
    Module5,
    Module6,
    Module7,
    Module8,
    Module9,
    Module10,
    Module11,
    Module12,
    Module13,
    Module14,
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
    },
    onError() {
    },
    onInfo() {
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
