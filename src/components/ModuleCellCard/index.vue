<template>
  <div class="module-cell-card">
    <div
      v-for="item in options"
      :key="item.prop"
      class="module-cell-card-item"
    >
      <div class="module-cell-card-item-label">
        {{ item.label }}
      </div>
      <div class="module-cell-card-item-value">
        {{ data[item.prop] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModuleCellCard',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
