<template>
  <div class="module-cell-card">
    <div
      v-for="item in options"
      :key="item.prop"
      class="module-cell-card-item"
    >
      <div class="module-cell-card-item-label">
        {{ item.label }}
      </div>
      <div class="module-cell-card-item-value">
        {{ data[item.prop] }} <span>{{ item.suffix }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModuleCellCard',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.module-cell-card {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: center;
  padding-bottom: 33px;
  padding-top: 24px;
}
.module-cell-card-item {
  width: 94px;
  height: 48px;
  background: url('./bg.png') no-repeat center;
  background-size: cover;

  &-label {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #EBFFEE;
    line-height: 17px;
    padding-left: 11px;
    padding-top: 5px;
  }
  &-value {
    text-align: right;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFB23F;
    line-height: 20px;
    padding-right: 4px;
    span {
      font-size: 12px;
      font-weight: 400;
      color: #EBFFEE;
      line-height: 17px;
    }
  }
}

.module-cell-card-item + .module-cell-card-item {
  margin-left: 10px;
}
</style>
