<template>
  <div class="root-container">
    <HeaderContainer title="大屏系统调研" />

    <!-- 布局  -->
    <PageLayout
      @warning="onWarning"
      @error="onError"
      @info="onInfo"
    >
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


export default {
  components: {
    HeaderContainer,
    MapContainer,
    ModuleCard,
    PageLayout,
    Module1,
    Module2,
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
          key: 'Module1',
        },
        {
          title: '巡检维护',
          key: 'Module1',
        },
        {
          title: '河道水质',
          key: 'Module1',
        },
        {
          title: '异常情况',
          key: 'Module1',
        },
        {
          title: '协同处置',
          key: 'Module1',
        },
        {
          title: '事件存档',
          key: 'Module1',
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
  }
}
</script>
<style lang="scss" scoped>
.root-container {

}
</style>
