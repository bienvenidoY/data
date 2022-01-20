<template>
  <div class="module6">
    <ModuleCellCard
      :options="options"
      :data="data"
    />
  </div>
</template>
<script>
import ModuleCellCard from '@/components/ModuleCellCard/index.vue'

export default {
  name: 'Module11',
  components: {
    ModuleCellCard,
  },
  data() {
    return {
      options: [
        {
          label: '管网告警',
          prop: 'a',
        },
        {
          label: '排口告警',
          prop: 'b',
        },
        {
          label: '河道告警',
          prop: 'c',
        },
        {
          label: '巡检问题',
          prop: 'd',
        },
        {
          label: '监管问题',
          prop: 'e',
        },
        {
          label: '监管问题',
          prop: 'f',
        },
      ],
      data: {
        a: '1',
        b: '2',
        c: '2',
        d: '2',
        e: '2',
        f: '24',
      },
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>
.module6 {
  flex-wrap: wrap;
}
.module6-item {
  width: 150px;
}
</style>

