<template>
  <div>
    <vita-row>
      <vita-col span="2">荆防颗粒时代峰峻</vita-col>
      <vita-col span="4">dsfsdjkflsdjfldsjflj</vita-col>
    </vita-row>
    <vita-row gutter="12">
      <vita-col>荆防颗粒时代大佛</vita-col>
      <vita-col>dsfsdjkflsdjfldsjflj</vita-col>
    </vita-row>
    <vita-row type="flex" align="left" justify="space-between" tag="span">
      <vita-col>align left</vita-col>
      <vita-col>justify space-between</vita-col>
    </vita-row>
    <vita-row type="flex" align="bottom" tag="p">
      <vita-col>align bottom</vita-col>
      <vita-col>justify no</vita-col>
    </vita-row>
    <vita-row type="flex" align="end" tag="p">
      <vita-col>align end</vita-col>
      <vita-col>justify no</vita-col>
    </vita-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import row from '@/components/row/index'
import col from '@/components/col/index'
import '@/components/row/index.less'
import '@/components/col/index.less'

Vue.use(row)
Vue.use(col)
@Component({})
export default class Home extends Vue {}
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
