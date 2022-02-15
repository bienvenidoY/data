<template>
  <div class="warning-table">
    <div class="flex">
      <div
        v-for="item in column"
        :key="item.prop"
        class="warning-table-item"
        :style="{ width: `144px` }"
      >
        <div class="warning-table-item-title">
          {{ item.label }}
        </div>
      </div>
    </div>
    <ScrollBar
      :style="[{height: '315px' }]"
      :view-style="[{height: '315px' }]"
    >
      <div class="flex">
        <div
          v-for="item in column"
          :key="item.prop"
          class="warning-table-item"
          :style="{ width: `144px` }"
        >
          <div
            v-for="(chunk,chunkIndex) in data"
            :key="chunkIndex"
            class="warning-table-cell warning-table-item-chunk"
          >
            {{ chunk[item.prop] }}
          </div>
        </div>
      </div>
    </ScrollBar>
  </div>
</template>
<script>
import ScrollBar from '@/components/ScrollBar/index.vue'

export default {
  name: 'Table',
  components: {
    ScrollBar,
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      column: [
        {
          label: '设备名称',
          prop: 'deviceName',
        },
        {
          label: '设备类型',
          prop: 'deviceType',
        },
        {
          label: '报警指标值',
          prop: 'content',
        },
        {
          label: '监测时间',
          prop: 'time',
        },
      ]
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>
.warning-table {
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #EBFFEE;
  line-height: 17px;

}

.warning-table-item {
  position: relative;
}

.warning-table-item-title {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 20px;
  padding: 13px 15px 12px;
  background: rgba(71, 123, 41, 0.15);
  min-height: 45px;
  box-sizing: border-box;
}
.warning-table-cell {
  display: flex;
  min-height: 45px;
  box-sizing: border-box;
  padding: 15px 15px 13px;
  background: rgba(105, 178, 61, 0.15);
  align-items: center;
}
</style>

