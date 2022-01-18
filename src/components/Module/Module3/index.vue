<template>
  <div class="module3 flex">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="module3-column"
    >
      <div class="module3-column-item--title">
        {{ item.title }}
      </div>
      <div
        v-for="(chunk, chunkIndex) in item.column"
        :key="chunkIndex"
        class="module3-column-item flex-center"
      >
        <div
          class="column-item--icon"
          :style="{ backgroundImage: `url(${chunk.icon})` }"
        />
        <div class="column-item-chunk flex-col-between">
          <div class="column-item--label">
            {{ chunk.label }}
          </div>
          <div class="column-item--value">
            {{ data[chunk.prop] || 0 }}{{ chunk.suffix }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Module3',
  components: {
  },
  data() {
    return {
      options: [
        {
          title: '管网概况',
          column: [
            {
              label: '雨水管网',
              icon: '',
              prop: '',
              suffix: '公里',
            },{
              label: '污水管网',
              icon: '',
              prop: '',
              suffix: '公里',
            },{
              label: '感知点位',
              icon: '',
              prop: '',
              suffix: '个',
            },
          ]
        },
        {
          title: '排口概况',
          column: [
            {
              label: '雨水排口',
              icon: '',
              prop: '',
              suffix: '个',
            },{
              label: '污水排口',
              icon: '',
              prop: '',
              suffix: '个',
            },{
              label: '感知点位',
              icon: '',
              prop: '',
              suffix: '个',
            },
          ]
        },
      ],
      data: {

      }
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>

.module3-column {
  width: 50%;
  .module3-column-item--title {
    text-align: center;
  }
  .module3-column-item {
    margin-top: 20px;
    .column-item--icon {
      width: 60px;
      height: 60px;
      background: black;
      margin-right: 10px;
    }
    .column-item--chunk {
      height: 100%;
    }
  }
}
</style>

