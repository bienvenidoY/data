<template>
  <div class="module2">
    <el-carousel
      class="swiper-container"
      :interval="10000"
      height="140px"
      arrow="never"
    >
      <el-carousel-item
        v-for="(item, index) in options"
        :key="index"
      >
        <div class="flex-center">
          <div>
            <div
              class="module2-icon"
              :style="{ backgroundImage: `url(${item.image})` }"
            />
            <div class="module2-text">
              {{ item.label }}
            </div>
          </div>
          <ChartView
            class="chart-content"
            :chart-option="chartOpt"
            :auto-resize="true"
            height="114px"
            width="211px"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import ChartView from '@/components/ChartView/index.vue'

export default {
  name: 'Module1',
  components: {
    ChartView,
  },
  data() {
    return {
      chartOpt: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: 0,
          top: 'middle',
          icon: 'circle',
          textStyle: {
            color: '#979797',
          },
        },
        series: [
          {
            type: 'pie',
            top: 'middle',
            left: 0,
            radius: ['70%', '90%'],
            avoidLabelOverlap: true,
            center: ['35%', 'center'],
            label: {
              alignTo: 'none',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              fontSize: 10,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              length: 0
            },
            data: [
              { value: 1048, name: '报警' },
              { value: 735, name: '在线' },
              { value: 580, name: '离线' }
            ]
          }
        ]
      }
    }
  },
  computed: {
    options() {
      return [
        {
          label: '管网感知',
          image: require('./image2.png')
        },
        {
          label: '排口感知',
          image: require('./image1.png')
        },
        {
          label: '河道感知',
          image: require('./image3.png')
        },
        {
          label: '视频监控',
          image: require('./image4.png')
        },
      ].map(v =>  {
        v.chartOpt = this.chartOpt
        return v
      })
    }
  },
  mounted() {

  },
  methods: {},

}
</script>
<style lang="scss" scoped>
.module2 {
  padding-left: 39px;
  padding-right: 26px;


}

.swiper-container {
  padding-top: 9px;
  ::v-deep .el-carousel__indicators {
    .el-carousel__button {
      width: 6px;
      height: 6px;
      background: #D8D8D8;
      border-radius: 50%;
    }
  }
  .el-carousel__indicator--horizontal {
    padding: 0 4px;
  }
  .el-carousel__indicators--horizontal {
    bottom: 8px;
  }
}

.module2-icon {
  height: 61px;
  width: 61px;
  background-size: cover;
  margin-right: 7px;
}
.module2-text {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #C8F9CE;
  line-height: 20px;
  margin-top: 10px;
}
</style>

