<template>
  <div class="dot-dialog-table">
    <ScrollBar
      v-infinite-scroll="getReportRecord"
      class="dot-dialog-table-content"
    >
      <div
        class="dot-dialog-table-header"
      >
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
      <div
        v-for="(item, index) in list"
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
    </ScrollBar>
  </div>
</template>
<script>
import ScrollBar from '@/components/ScrollBar/index.vue'
import {getReportRecord} from '@/api/cockpit';
import dayjs from 'dayjs';

export default {
  components: {
    ScrollBar,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    info: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      list: [],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      loading: false
    }
  },
  computed: {
    noMore() {
      return this.list.length && (this.list.length === this.page.total)
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  mounted() {
  },
  methods: {
    // 表格数据
    getReportRecord() {
      if(this.loading) return
      this.loading = true;
      getReportRecord({
        deviceId: this.info.id,
        ...this.page,
      }).then(res => {
        const list = res.rows.map(item => {
          item.timestamp = dayjs(item.timestamp / 1000).format('YYYY-MM-DD HH:mm:ss')
          return item
        })
        this.list = [...this.list, ...list]
        this.loading = false
        this.page.pageNum++
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.dot-dialog-table-content {
  position: relative;
  box-sizing: border-box;
}
.table-absolute {
  position: absolute;
  left: 0;
  top: 0;
}
.dot-dialog-table {
  padding-left: 24px;
  padding-right: 23px;
  height: 315px;

  .dot-dialog-table-header {
    display: flex;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #EBFFEE;
    line-height: 20px;
    position: sticky;
    top: 0;
  }
  .dot-dialog-table-header-cell {
    background: rgba(71, 123, 41, 0.15);
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
