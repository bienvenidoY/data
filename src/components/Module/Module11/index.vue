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
  props: {
    module11module12data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: [],
      data: {},
    }
  },
  watch: {
    module11module12data: {
      handler(val) {
        if(val.length < 1) return
        const arr = val.slice(0, 6)
        this.options = arr.map(v => {
          v.suffix = '起'
          v.label = v.name
          v.prop = v.name
          return v
        })
        const data = {}
        arr.forEach(v => {
          data[v.name] = v.value
        })
        this.data = data
      },
      immediate: true,
    },
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

