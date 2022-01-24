<template>
  <div class="module11">
    <ModuleCellCard
      :options="options"
      :data="data"
      size="large"
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
          suffix: '起'
        },
        {
          label: '排口告警',
          prop: 'b',
          suffix: '起'
        },
        {
          label: '河道告警',
          prop: 'c',
          suffix: '起'
        },
        {
          label: '巡检问题',
          prop: 'd',
          suffix: '起'
        },
        {
          label: '监管问题',
          prop: 'e',
          suffix: '起'
        },
        {
          label: '监管问题',
          prop: 'f',
          suffix: '起'
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
.module11 {
  padding-top: 38px;
  flex-wrap: wrap;
  padding-left: 31px;
  padding-right: 15px;
}
.module6-item {
  width: 150px;
}
</style>

