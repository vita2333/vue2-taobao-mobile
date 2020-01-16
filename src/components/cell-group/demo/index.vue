<template>
  <div>
    <vita-cell-group title="标题">
      <vita-cell title="新消息提醒" is-link></vita-cell>
    </vita-cell-group>
    <vita-cell-group>
      <vita-cell title="新消息提醒" is-link></vita-cell>
      <vita-cell title="新消息提醒" value="点击查看" is-link></vita-cell>
    </vita-cell-group>
    <vita-cell-group title="标题">
      <vita-cell title="新消息提醒" is-link></vita-cell>
    </vita-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import cellGroup from '@/components/cell-group'
import '@/components/cell-group/index.less'

Vue.use(cellGroup)
export default {}
</script>

<style scoped lang="less"></style>
