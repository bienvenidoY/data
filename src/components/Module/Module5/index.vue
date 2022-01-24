<template>
  <div
    class="module5"
  >
    <div class="module5-item flex">
      <div
        v-for="item in options.column"
        :key="item.prop"
        class="module5-column-item"
        :style="{ width: `${item.width}px` }"
      >
        <div class="module5-cell module5-column-item-title">
          {{ item.label }}
        </div>
        <div
          v-for="(chunk,chunkIndex) in data"
          :key="chunkIndex"
          class="module5-cell module5-column-item-chunk"
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
            width: 120,
          },
          {
            label: '所属河道',
            prop: 'b',
            width: 92,
          },
          {
            label: '水质类别',
            prop: 'c',
            width: 80,
          },
        ]
      },
      data: [
        {
          'a': '说明a',
          'b': '说明b',
          'c': '说明c',
        },
        {
          'a': '说明a',
          'b': '说明b',
          'c': '说明c',
        },
        {
          'a': '说明a',
          'b': '说明b',
          'c': '说明c',
        },
        {
          'a': '说明a',
          'b': '说明b',
          'c': '说明c',
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
.module5 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  padding-top: 13px;
  padding-left: 27px;
  padding-bottom: 26px;
  min-height: 187px;
  box-sizing: border-box;
}

.module5-column-item {
  background: rgba(71, 123, 41, 0.15);
  text-align: center;
}
.module5-column-item-title {
  background: rgba(105, 178, 61, 0.15);
}
.module5-cell {
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
}
</style>

