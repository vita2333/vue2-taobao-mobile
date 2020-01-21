<template>
  <div>
    <vita-tabs>
      <vita-tab :title="'tab' + index" v-for="index in 9" :key="index">{{ index }}</vita-tab>
    </vita-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import tabs from '@/components/tabs'
import '@/components/tabs/index.less'

Vue.use(tabs)
export default {}
</script>

<style scoped lang="less"></style>
