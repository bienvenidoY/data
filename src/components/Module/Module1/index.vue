
<template>
  <div class="current-time">
    {{ dayText }}
  </div>
</template>
<script>

export default {
  name: 'CurrentTime',
  data() {
    return {
      dayText: '',
      timer: null,
    }
  },
  mounted() {

  },
  methods: {

  },

}
</script>
<style lang="scss" scoped>

</style>

