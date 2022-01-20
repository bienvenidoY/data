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
  name: 'Module14',
  components: {
  },
  data() {
    return {
      options: {
        column: [
          {
            label: '归集类型',
            prop: 'a',
          },
          {
            label: '数量',
            prop: 'b',
          },
        ]
      },
      data: [
        {
          'a': '说明a',
          'b': '说明b',
        },
        {
          'a': '说明a',
          'b': '说明b',
        },
        {
          'a': '说明a',
          'b': '说明b',
        },
        {
          'a': '说明a',
          'b': '说明b',
        },
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

