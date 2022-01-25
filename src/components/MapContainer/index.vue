<template>
  <div class="map-container">
    <!-- 引入天地图-->
    <!--    <tdt-map
      :center="state.center"
      :zoom="state.zoom"
    />-->
    <div style="padding-left: 900px;padding-top: 600px">
      <DotIcon
        type="1"
        @click.native="onAction('table')"
      />
      <DotIcon
        type="2"
        @click.native="onAction('text')"
      />
    </div>
  </div>
</template>
<script>
import DotIcon from './DotIcon/index.vue'

export default {
  name: 'MapContainer',
  components: {
    DotIcon,
  },
  props: {
  },
  data() {
    return {
      state: {
        center: [113.280637, 23.125178],
        zoom: 12,
      }
    }
  },
  methods: {
    onAction(type) {
      this.$emit('action', type, {
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
    },
  },
}
</script>
<style lang="scss" scoped>
.map-container {
  background-color: silver;
  height: 100%;
  width: 100%;
}
</style>
