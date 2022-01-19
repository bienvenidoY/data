<template>
  <div class="module6 flex">
    <div
      v-for="item in column"
      :key="item.prop"
      class="module6-item"
    >
      <div class="module6-item-label">
        {{ item.label }}
      </div>
      <div class="module6-item-value">
        {{ data[item.prop] }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Module6',
  components: {},
  data() {
    return {
      column: [
        {
          label: '管网告警',
          prop: 'a',
        },
        {
          label: '排口告警',
          prop: 'b',
        }, {
          label: '河道告警',
          prop: 'c',
        }, {
          label: '巡检问题',
          prop: 'd',
        }, {
          label: '监管问题',
          prop: 'e',
        },
      ],
      data: {
        a: '1',
        b: '2',
        c: '2',
        d: '2',
        e: '2',
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

