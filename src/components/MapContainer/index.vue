<template>
  <div class="map-container">
    <!-- 引入天地图-->
    <tdt-map
      :center="state.center"
      :zoom="state.zoom"
    >
      <tdt-tilelayer
        :url="state.url"
        :z-index="1"
      />

      <tdt-marker
        v-for="(marker, markerIndex) in markers"
        :key="markerIndex"
        :position="marker.position"
        :ext-data="marker"
        :icon="{
          iconUrl: marker.icon,
          iconSize: [107, 80],
        }"
        @click="onAction"
      />
      <tdt-infowindow
        :target.sync="currentMarker.position"
        :min-width="471"
        :min-height="333"
        :offset="[0, -30]"
      >
        <div class="marker-container">
          <div class="marker-container-header">
            <div class="marker-container-title">
              {{ currentMarker.title }}
            </div>
          </div>
          <div class="marker-container-content">
            <ScrollBar :view-style="[{ height: '230px'}]">
              <div
                v-for="(item, index) in currentMarker.content"
                :key="index"
                class="marker-container-content--item"
              >
                {{ item.label }}:{{ item.value }}
              </div>
            </ScrollBar>
          </div>
        </div>
      </tdt-infowindow>
    </tdt-map>
  </div>
</template>
<script>
import ScrollBar from '@/components/ScrollBar/index.vue'
import {getPatrolList} from '@/api/cockpit';

const iconMap = {
  10: require('./image/企业@2x.png'),
  20: require('./image/入河排口@2x.png'),
  21: require('./image/入河排口@2x.png'),
  22: require('./image/雨污井@2x.png'),
  23: require('./image/泵站@2x.png'),
  30: require('./image/雨水管网@2x.png'),
  31: require('./image/排口@2x.png'),
  32: require('./image/污水管网@2x.png'),
  33: require('./image/水质@2x.png'),
}
const iconWaringMap = {
  20: require('./image/入河排口@2x.png'),
  30: require('./image/雨水管网告警@2x.png'),
  31: require('./image/排口告警@2x.png'),
  32: require('./image/污水管网告警@2x.png'),
  33: require('./image/水质告警@2x.png'),
}

export default {
  name: 'MapContainer',
  components: {
    ScrollBar,
  },
  props: {
    type: {
      type: [String, Number],
      default: '',
    }
  },
  data() {
    return {
      state: {
        center: [113.280637, 23.125178],
        zoom: 11,
        url: 'http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=7f013d0186775b063d6a046977bbefc6'
      },
      currentMarker: {},
      markers: [
        { type: 'Dialog1', position: [113.280637, 23.125178], icon: require('./image/废气@2x.png') },
        { type: 'text', position: [113.300637, 23.125178],icon: require('./image/废气@2x.png') },
        { type: 'Dialog1', position: [113.320637, 23.125178],icon: require('./image/废气@2x.png') },
        { type: 'text', position: [113.340637, 23.125178],icon: require('./image/废气@2x.png') }
      ],
    }
  },
  watch: {
    type: {
      handler() {
        // this.getPatrolList()
      },
      immediate: true,
    }
  },
  methods: {
    onAction(marker) {
      const miniDialogEmus = [10, 20, 21, 22, 23, 30, 31, 32, 33]
      if(miniDialogEmus.includes(marker.extData.pointType)) {
        this.currentMarker = {}
        this.$emit('action', marker.extData.pointType, {
          title: '哈哈',
          content: [
            {
              label: '这事',
              value: '什么'
            },{
              label: '这事',
              value: '什么'
            },
          ]
        })
      }else {
        this.currentMarker = {
          ...marker.extData,
          title: '点位名称',
          content: [
            {
              label: '这事',
              value: '什么'
            },{
              label: '这事',
              value: '什么'
            },
          ]
        }
      }
    },
    getPatrolList() {
      getPatrolList({
        pointType: this.type
      }).then(res => {
        this.markers = res.data.map(v => {
          const {pointIsAlarm, pointType = 10, pointLongitude, pointLatitude} = v
          v.icon = pointIsAlarm === 1 ? iconWaringMap[pointType] : iconMap[pointType]
          v.position = [pointLongitude, pointLatitude]
          return v
        })
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.map-container {
  height: 100%;
  width: 100%;
}


.marker-container {
  height: 333px;
  width: 471px;
}

.marker-container-header {
  padding: 47px 0 0 31px;
}

.marker-container-title {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #477B29;
  line-height: 20px;
  padding-left: 15px;
  position: relative;
  &:before {
    position: absolute;
    content: ' ';
    width: 1px;
    height: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: #34B84A;
    left: 0;
  }
}
.marker-container-content {
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #EBFFEE;
  line-height: 20px;
  padding: 14px 6px 22px 32px;
  height: 230px;
  .marker-container-content--item + .marker-container-content--item {
    margin-top: 10px;
  }
}
</style>
<style lang="scss" >

.tdt-infowindow {
  .tdt-infowindow-content-wrapper {
    background: url("./bg.png") no-repeat;
    background-size: cover;
    box-shadow: none;
  }
  .tdt-infowindow-content {
    margin: 0;
  }


  a.tdt-infowindow-close-button {
    height: 17px !important;
    width: 17px !important;
    background: url('./icon-close.png') no-repeat !important;
    background-size: cover !important;
    cursor: pointer;
    right: 10px !important;
    top: 7px !important;
    font-size: 0 !important;
    padding: 0 !important;
  }
}

</style>
