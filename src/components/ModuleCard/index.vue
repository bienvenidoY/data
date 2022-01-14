<template>
  <div class="module-card">
    <div class="module-card-title">{{ title }}</div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ModuleCard',
  props: {
    title: {
      type: String,
      default: '模块标题',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
