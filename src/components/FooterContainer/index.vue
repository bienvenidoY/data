<template>
  <div
    class="footer-container"
    :class="[injectLayoutType() === 0 ? 'small' : 'large']"
  />
</template>
<script>
export default {
  inject: ['injectLayoutType'],
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.footer-container {
  height: var(--footer-height);
  background: url(./small-bg.png)  no-repeat;
  background-size: cover;
}
.large.footer-container {
  height: var(--footer-height);
  background: url(./big-bg.png)  no-repeat;
  background-size: cover;
}
</style>
