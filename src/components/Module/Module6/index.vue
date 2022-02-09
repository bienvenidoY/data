<template>
  <div class="module6">
    <ModuleCellCard
      :options="options"
      :data="data"
    />
  </div>
</template>
<script>
import ModuleCellCard from '@/components/ModuleCellCard/index.vue'
import {getAlarmAlarmNum} from '@/api/cockpit';

export default {
  name: 'Module6',
  components: {
    ModuleCellCard,
  },
  data() {
    return {
      options: [
        {
          label: '管网告警',
          prop: 'a',
          suffix: '起'
        },
        {
          label: '排口告警',
          prop: 'b',
          suffix: '起'
        },
        {
          label: '河道告警',
          prop: 'c',
          suffix: '起'
        },
        {
          label: '巡检问题',
          prop: 'd',
          suffix: '起'
        },
        {
          label: '监管问题',
          prop: 'e',
          suffix: '起'
        },
      ],
      data: {},
    }
  },
  mounted() {
    this.getAlarmAlarmNum()
  },
  methods: {
    getAlarmAlarmNum() {
      getAlarmAlarmNum().then(res => {
        let data = {}
        const responseData = res.data || []

        responseData.forEach(alarm => {
          data[alarm.name] = alarm.value
        })
        this.options = responseData.map(alarm => {
          return {
            label: alarm.name,
            prop: alarm.name,
            suffix: '起',
          }
        })
        this.data = data
      })
    }
  },

}
</script>
<style lang="scss" scoped>
.module6 {
  padding-top: 24px;
  flex-wrap: wrap;
}
.module6-item {
  width: 150px;
}
</style>

