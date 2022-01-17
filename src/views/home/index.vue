<template>
  <div class="root-container">
    <!-- 布局  -->
    <PageLayout
      @warning="onWarning"
      @error="onError"
      @info="onInfo"
      @changeType="onChangeType"
    >
      <template #header>
        <HeaderContainer title="大屏系统调研" />
      </template>
      <template #left>
        <ModuleCard
          v-for="(item, index) in layoutList.left"
          :key="index"
          :title="item.title"
        >
          <components :is="item.key" />
        </ModuleCard>
      </template>
      <template #right>
        <ModuleCard
          v-for="(item, index) in layoutList.right"
          :key="index"
          :title="item.title"
        >
          <components :is="item.key" />
        </ModuleCard>
      </template>
    </PageLayout>

    <!--  天地图  -->
    <MapContainer />
  </div>
</template>
<script>
import HeaderContainer from '@/components/HeaderContainer/index.vue'
import MapContainer from '@/components/MapContainer/index.vue'
import PageLayout from '@/components/PageLayout/index.vue'
import ModuleCard from '@/components/ModuleCard/index.vue'
import Module1 from '@/components/Module/Module1/index.vue'
import Module2 from '@/components/Module/Module2/index.vue'
import Module3 from '@/components/Module/Module3/index.vue'
import Module4 from '@/components/Module/Module4/index.vue'
import Module5 from '@/components/Module/Module5/index.vue'
import Module6 from '@/components/Module/Module6/index.vue'
import Module7 from '@/components/Module/Module7/index.vue'
import Module8 from '@/components/Module/Module8/index.vue'

export default {
  components: {
    HeaderContainer,
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
  },
  data() {
    return {
      options: [
        {
          title: '企业概况',
          key: 'Module1',
        },
        {
          title: '智能感知',
          key: 'Module2',
        },
        {
          title: '设备概况',
          key: 'Module3',
        },
        {
          title: '巡检维护',
          key: 'Module4',
        },
        {
          title: '河道水质',
          key: 'Module5',
        },
        {
          title: '异常情况',
          key: 'Module6',
        },
        {
          title: '协同处置',
          key: 'Module7',
        },
        {
          title: '事件存档',
          key: 'Module8',
        },
      ]
    }
  },
  computed: {
    layoutList() {
      const limit = 4
      return {
        left: this.options.slice(0, limit),
        right: this.options.slice(limit, this.options.length)
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
    },
  }
}
</script>
<style lang="scss" scoped>
.root-container {
  height: 100%;
  width: 100%;
}
</style>
