<template>
  <div>
    <vita-tabs>
      <vita-tab :title="'tab' + index" v-for="index in 15" :key="index">{{ index }}</vita-tab>
    </vita-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import tabs from '@/components/tabs'
import tab from '@/components/tab'
import '@/components/tabs/index.less'

Vue.use(tabs)
Vue.use(tab)
export default {}
</script>

<style scoped lang="less"></style>
