<template>
  <div
    class="module5"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
  >
    <div class="module5-item flex">
      <div
        v-for="item in options"
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

import {getWaterLevel} from '@/api/cockpit';

export default {
  name: 'Module5',
  inject: ['injectLayoutType'],
  components: {
  },
  data() {
    return {
      data: [],
    }
  },
  computed: {
    options() {
      if(this.injectLayoutType() === 1) {
        return [
          {
            label: '站点名称',
            prop: 'siteName',
            width: 133,
          },
          {
            label: '所属河道',
            prop: 'riverName',
            width: 102,
          },
          {
            label: '水质类别',
            prop: 'level',
            width: 88,
          },
        ]
      }

      return  [
        {
          label: '站点名称',
          prop: 'siteName',
          width: 120,
        },
        {
          label: '所属河道',
          prop: 'riverName',
          width: 92,
        },
        {
          label: '水质类别',
          prop: 'level',
          width: 80,
        },
      ]
    },
  },
  mounted() {
    const data = new Array(4).fill({
      'siteName': '说明a',
      'riverName': '说明b',
      'level': '说明c',
    })
    this.data = data
    // this.getWaterLevel()
  },
  methods: {
    getWaterLevel() {
      getWaterLevel().then(res => {
        this.data = res.data
      })
    }
  },

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

.large {
  .module5 {
    padding-top: 16px;
    padding-left: 30px;
  }
  .module5-cell {
    height: 33px;
  }
}
</style>

