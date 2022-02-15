<template>
  <Dialog
    ref="dialog"
    title="问题上报"
    @close="closeDialog"
  >
    <div class="dot-dialog-header">
      <div class="header-item">
        点位类别：{{ DEVICE_TYPE_MAP[info.deviceType] }}
      </div>
      <div class="header-item">
        所属管段：{{ info.relationName }}
      </div>
      <div class="header-item">
        最后上报时间：{{ info.dataReportTime }}
      </div>
    </div>
    <div class="dot-dialog-action">
      <div class="dialog-action--status">
        {{ DEVICE_STATUS_MAP[info.deviceStatus] }}
      </div>
      <!--  只有水质才有监控    -->
      <div
        v-if="info.deviceType === 3"
        class="dialog-action--icon"
        @click="openPlayerDialog"
      />
    </div>
    <Chart :chart-data="chartData" />

    <Table
      v-if="info.id"
      :options="options"
    />

    <!-- 播放器 -->
    <PlayerDialog ref="PlayerDialog" />
  </Dialog>
</template>
<script>
import Dialog from '@/components/DialogBase/OversizeDialog/index.vue'
import PlayerDialog from '@/components/DialogBase/PlayerDialog/index.vue'
import Table from './Table/index.vue'
import Chart from './Chart/index.vue'
import {getPointInfo, getReportRecordMeanGroup, getVideoInfo} from '@/api/cockpit';
import dayjs from 'dayjs'

const DEVICE_TYPE_MAP = {
  0: '雨水管网监控',
  1: '雨排口控制', 2: '污水管网监控', 3: '水质监控'
}

const DEVICE_STATUS_MAP = {
  0: '离线',
  1: '在线', 2: '报警', 3: '故障'
}

const KEY_MAP = [{key: 'cod', name: '化学需氧量',},{key: 'dio', name: '溶解氧',},{key: 'ec', name: '电导率',},
  {key: 'flow', name: '流量',},{key: 'nh3n', name: '氨氮',},{key: 'ph', name: '酸碱度',},
  {key: 'raga', name: '降雨量',},{key: 'temp', name: '温度',},{key: 'turb', name: '浊度',},{key: 'wale', name: '液位',},]

export default {
  components: {
    Dialog,
    Table,
    PlayerDialog,
    Chart,
  },
  data() {
    return {
      chartData: {
        xAxis: [],
        series: [],
      },
      info: {},
      options: [
        {
          label: '设备名称',
          prop: 'deviceName',
        },
        {
          label: '序列号',
          prop: 'deviceId',
        },
      ],
      DEVICE_TYPE_MAP,
      DEVICE_STATUS_MAP,
    }
  },
  mounted() {
  },
  methods: {
    // 弹窗打开事件
    show(info) {
      this.data = []
      this.options = [
        {
          label: '设备名称',
          prop: 'deviceName',
        },
        {
          label: '序列号',
          prop: 'deviceId',
        },
      ]
      this.$refs.dialog.show()
      this.getPointInfo(info)
    },
    openPlayerDialog() {
      getVideoInfo(this.info.id).then(res => {
        this.$refs.PlayerDialog.show(res.data)
      })
    },
    getPointInfo(marker) {
      getPointInfo({
        pointId: marker.pointId,
        pointType: marker.pointType,
      }).then(res => {
        this.info = {
          ...res.data.drainDeviceVo,
          dataReportTime: dayjs(res.data.drainDeviceVo.dataReportTime).format('YYYY-MM-DD HH:mm:ss'),
        }
        const list = []
        this.info.sensorNames.split(',').forEach(item => {
          const seriesItem = KEY_MAP.find(v => v.name === item)
          if(seriesItem) {
            const val = {label: seriesItem.name, prop: seriesItem.key}
            list.push(val)
          }
        })
        this.options = [...this.options, ...list, { label: '监测时间', prop: 'timestamp'}]
        this.getReportRecordMeanGroup()
      })
    },
    // 图表数据
    getReportRecordMeanGroup() {
      getReportRecordMeanGroup({
        deviceId: this.info.id
      }).then(res => {
        const xAxis = res.data.map(x => dayjs(x.time).format('YYYY-MM-DD'))

        const list = []
        this.info.sensorNames.split(',').forEach(item => {
          const seriesItem = KEY_MAP.find(v => v.name === item)
          if(seriesItem) {
            list.push(seriesItem)
          }
        })

        const series = list.map(item => {
          item.data = res.data.map(v => v[item.key])
          return item
        })
        this.chartData = {
          xAxis,
          series
        }
      })
    },
    // 取消事件 关闭弹窗
    hide() {
      // 关闭且清空表单
      this.$refs.dialog.hide()
    },
    // 弹窗关闭按钮 关闭弹窗
    closeDialog() {
      this.$refs.dialog.hide()
    },
  },
}
</script>
<style lang="scss" scoped>
.dot-dialog-header {
  padding-left: 38px;
  padding-bottom: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #EBFFEE;
  line-height: 20px;
  .header-item + .header-item {
    margin-top: 10px;
  }
}
.dot-dialog-action {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #34B84A;
  line-height: 22px;
  padding-bottom: 20px;
  padding-left: 730px;
  position: relative;
  .dialog-action--icon {
    position: absolute;
    right: 30px;
    top: -15px;
    width: 32px;
    height: 32px;
    background: red;
    cursor: pointer;
  }
}
</style>
