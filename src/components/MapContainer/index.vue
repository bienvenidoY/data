<template>
  <div class="map-container">
    <!-- 引入天地图-->
    <tdt-map
      :center="state.center"
      :zoom="state.zoom"
    />
  </div>
</template>
<script>

export default {
  name: 'MapContainer',
  components: {
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
  methods: {},
}
</script>
<style lang="scss" scoped>
.map-container {
  background-color: silver;
  height: 100%;
  width: 100%;
}
</style>
