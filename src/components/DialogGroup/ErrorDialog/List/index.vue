<template>
  <div class="error-list">
    <ScrollBar>
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
    </ScrollBar>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import ScrollBar from '@/components/ScrollBar/index.vue'

export default {
  components: {
    ScrollBar
  },
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
.error-list {
  font-size: 14px;
  width: 100%;
  height: 344px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  .warning-item {
    padding: 11px 39px 11px 30px;
    cursor: pointer;
    &--title {
      color: #4582FF;
    }
    &--content {
      padding: 2px 0;
    }
    &--time {}
    &.is-active, &:hover {
      background: linear-gradient(90deg, rgba(65, 122, 238, 0.3) 0%, rgba(65, 122, 238, 0) 100%);
    }
  }
  .warning-item + .warning-item {
    margin-top: 10px;
  }
}
</style>
