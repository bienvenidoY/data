<template>
  <div class="warning-list">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="warning-item"
      :class="{ 'is-active': index === 1 }"
    >
      <div class="warning-item--title">
        {{ item.title }}
      </div>
      <div class="warning-item--content text-ellipsis">
        {{ item.content }}
      </div>
      <div class="warning-item--time">
        {{ dayjs().format('YYYY-MM-DD HH:mm:ss') }}
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    dayjs,
  }
}
</script>
<style lang="scss" scoped>
.warning-list {
  font-size: 14px;
  width: 264px;
  height: 374px;
  overflow-y: scroll;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  .warning-item {
    padding: 11px 39px 11px 30px;
    cursor: pointer;
    &--title {
      color: #FFB23F;
    }
    &--content {
      padding: 2px 0;
    }
    &--time {}
    &.is-active, &:hover {
      background: linear-gradient(90deg, rgba(240, 176, 6, 0.3) 0%, rgba(230, 171, 2, 0) 100%);
    }
  }
  .warning-item + .warning-item {
    margin-top: 10px;
  }
}
</style>
