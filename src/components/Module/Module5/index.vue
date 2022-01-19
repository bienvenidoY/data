<template>
  <div className="module5">
    <div class="module5-item flex">
      <div
        v-for="item in options.column"
        :key="item.prop"
        class="module5-column-item"
      >
        <div class="module5-column-item-title">
          {{ item.label }}
        </div>
        <div
          v-for="(chunk,chunkIndex) in data"
          :key="chunkIndex"
          class="module5-column-item-chunk"
        >
          {{ chunk[item.prop] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Module5',
  components: {
  },
  data() {
    return {
      options: {
        column: [
          {
            label: '站点名称',
            prop: 'a',
          },
          {
            label: '所属河道',
            prop: 'b',
          },
          {
            label: '水质类别',
            prop: 'c',
          },
        ]
      },
      data: [
        {
          'a': '说明a',
          'b': '说明b',
          'c': '说明c',
        }
      ],
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>

.module5-item {

}
</style>

