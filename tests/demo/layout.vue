<template>
  <div>
    <vita-row>
      <vita-col span="2">span 2</vita-col>
      <vita-col span="4">span 4</vita-col>
    </vita-row>
    <vita-row gutter="12">
      <vita-col>gutter 12</vita-col>
      <vita-col>gutter 12</vita-col>
    </vita-row>
    <vita-row type="flex" align="left" justify="space-between" tag="span">
      <vita-col>flex left space-between</vita-col>
      <vita-col>flex left space-between</vita-col>
    </vita-row>
    <vita-row type="flex" align="bottom" tag="p">
      <vita-col>flex bottom</vita-col>
      <vita-col>flex bottom</vita-col>
    </vita-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Col from '@/components/col'
import '@/components/col/index.less'
import Row from '@/components/row'
import '@/components/row/index.less'

Vue.use(Col)
Vue.use(Row)
export default {}
</script>

<style scoped lang="less">
.vita-col {
  color: #fff;
  text-align: center;
  background-clip: content-box;
  margin-bottom: 10px;

  &:nth-child(odd) {
    background-color: #2a7654;
  }

  &:nth-child(even) {
    background-color: #42b983;
  }
}
</style>
