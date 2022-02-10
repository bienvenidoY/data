<template>
  <div
    class="module14"
  >
    <div class="module14-item flex">
      <div
        v-for="item in options.column"
        :key="item.prop"
        class="module14-column-item"
        :style="{ width: `165px` }"
      >
        <div class="module14-cell module14-column-item-title">
          {{ item.label }}
        </div>
        <div
          v-for="(chunk,chunkIndex) in data"
          :key="chunkIndex"
          class="module14-cell module14-column-item-chunk"
        >
          {{ chunk[item.prop] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {getDataCollection} from '@/api/cockpit';

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
            prop: 'name',
          },
          {
            label: '数量',
            prop: 'value',
          },
        ]
      },
      data: [],
    }
  },
  mounted() {
    this.getDataCollection()
  },
  methods: {
    getDataCollection() {
      getDataCollection().then(res => {
        this.data = res.data;
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module14 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  width: 330px;
  margin-top: 5px;
  margin-left: 25px;
  min-height: 282px;

}
.module14 {
  background: rgba(71, 123, 41, 0.15);
}

.module14-column-item {
  text-align: center;
}
.module14-column-item-title {
  background: rgba(105, 178, 61, 0.15);
}
.module14-cell {
  display: flex;
  height: 47px;
  align-items: center;
  justify-content: center;
}
</style>

