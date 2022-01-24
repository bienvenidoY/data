<template>
  <div
    class="module-cell-card"
    :class="[size]"
  >
    <div class="module-cell-card-wrapper">
      <div
        v-for="item in list.top"
        :key="item.prop"
        class="module-cell-card-item"
      >
        <div class="module-cell-card-item-label">
          {{ item.label }}
        </div>
        <div
          class="module-cell-card-item-value"
          :class="valStyType === 'normal' ? 'value-normal' : ''"
        >
          {{ data[item.prop] || 0 }} <span>{{ item.suffix }}</span>
        </div>
      </div>
    </div>
    <div
      v-if="!!list.bottom.length"
      class="module-cell-card-wrapper"
    >
      <div
        v-for="item in list.bottom"
        :key="item.prop"
        class="module-cell-card-item"
      >
        <div class="module-cell-card-item-label">
          {{ item.label }}
        </div>
        <div
          class="module-cell-card-item-value"
          :class="valStyType === 'normal' ? 'value-normal' : ''"
        >
          {{ data[item.prop] || 0 }} <span>{{ item.suffix }}</span>
        </div>
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
    },
    size: {
      type: String,
      default: 'small',
    },
    valStyType: {
      type: String, // normal
      default: 'primary',
    },
    // 头部两列
    isTwoRow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
  computed: {
    list(){
      const limit = this.isTwoRow ? 2 : 3
      console.log('isTwoRow', this.isTwoRow, this.options.slice(0 , limit))
      return {
        top: this.options.slice(0 , limit),
        bottom: this.options.slice(limit, this.options.length),
      }
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.module-cell-card {

}

.module-cell-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: center;
}

.module-cell-card-wrapper + .module-cell-card-wrapper{
  margin-top: 10px;
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
    &.value-normal {
      font-size: 12px;
      font-weight: 400;
      color: #EBFFEE;
      line-height: 17px;
    }
    span {
      font-size: 12px;
      font-weight: 400;
      color: #EBFFEE;
      line-height: 17px;
    }
  }
}

.large {
  .module-cell-card-item {
    width: 104px;
    height: 52px;
    background: url('./big-bg.png') no-repeat center;
    background-size: cover;
  }

  .module-cell-card {

  }
  .module-cell-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 27px 11px;
    justify-content: center;
  }

  .module-cell-card-wrapper + .module-cell-card-wrapper{
    margin-top: 27px;
  }
}
</style>
