<template>
  <div class="module3 flex">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="module3-column"
    >
      <div class="module3-column-item--title">
        {{ item.title }}
      </div>
      <div
        v-for="(chunk, chunkIndex) in item.column"
        :key="chunkIndex"
        class="module3-column-item flex"
      >
        <div
          class="column-item--icon"
          :style="{ backgroundImage: `url(${chunk.icon})` }"
        />
        <div class="column-item--chunk flex-col-between">
          <div class="column-item--label">
            {{ chunk.label }}
          </div>
          <div class="column-item--value">
            {{ data[chunk.prop] || 0 }}{{ chunk.suffix }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {getDeviceNum} from '@/api/cockpit';

export default {
  name: 'Module3',
  components: {
  },
  data() {
    return {
      options: [
        {
          title: '管网概况',
          column: [
            {
              label: '雨水管网',
              icon: require('./image1.png'),
              prop: 'rainPipe',
              suffix: '公里',
            },{
              label: '污水管网',
              icon: require('./image2.png'),
              prop: 'wastePipe',
              suffix: '公里',
            },{
              label: '感知点位',
              icon: require('./image3.png'),
              prop: 'pipeAwarePoint',
              suffix: '个',
            },
          ]
        },
        {
          title: '排口概况',
          column: [
            {
              label: '雨水排口',
              icon: require('./image4.png'),
              prop: 'rainOutlet',
              suffix: '个',
            },{
              label: '污水排口',
              icon: require('./image4.png'),
              prop: 'wasteOutlet',
              suffix: '个',
            },{
              label: '感知点位',
              icon: require('./image3.png'),
              prop: 'outletAwarePoint',
              suffix: '个',
            },
          ]
        },
      ],
      data: {
        outletAwarePoint: 0,
        pipeAwarePoint: 0,
        rainOutlet: 0,
        rainPipe: 0,
        wasteOutlet: 0,
        wastePipe: 0
      }
    }
  },
  mounted() {
    this.getDeviceNum()
  },
  methods: {
    getDeviceNum() {
      getDeviceNum().then(res => {
        this.data = res.data
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module3 {
  margin-left: 46px;
  padding-bottom: 27px;
}

.module3-column {
  width: 144px;
  .module3-column-item--title {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #34B84A;
    line-height: 20px;
    padding-left: 21px;
    padding-top: 8px;
  }
  .module3-column-item {
    margin-top: 15px;
    .column-item--icon {
      width: 40px;
      height: 40px;
      background-size: cover;
      margin-right: 10px;
    }
    .column-item--chunk {
      height: 40px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #EBFFEE;
      line-height: 17px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .column-item--label {}
      .column-item--value {}
    }
  }
}
</style>

