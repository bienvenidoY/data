<template>
  <div class="dot-dialog-table">
    <div class="dot-dialog-table-header">
      <div
        class="dot-dialog-table-cell dot-dialog-table-header-cell"
      >
        序号
      </div>
      <div
        v-for="item in options"
        :key="item.prop"
        class="dot-dialog-table-cell dot-dialog-table-header-cell"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="dot-dialog-table-content">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="dot-dialog-table-row"
      >
        <div
          class="dot-dialog-table-cell dot-dialog-table-row-table-cell"
        >
          {{ index + 1 }}
        </div>
        <div
          v-for="option in options"
          :key="option.prop"
          class="dot-dialog-table-cell dot-dialog-table-row-table-cell"
        >
          {{ item[option.prop] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      list: [],
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.dot-dialog-table {
  padding-left: 24px;
  padding-right: 23px;
  height: 315px;

  .dot-dialog-table-header {
    display: flex;
    background: rgba(71, 123, 41, 0.15);
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #EBFFEE;
    line-height: 20px;
  }
  .dot-dialog-table-row {
    display: flex;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #EBFFEE;
    line-height: 17px;
  }
  .dot-dialog-table-cell {
    min-width: 120px;
    min-height: 45px;
    padding: 12px;
    box-sizing: border-box;
  }
  .dot-dialog-table-row-table-cell {

    background: rgba(105, 178, 61, 0.15);
  }
}
</style>
