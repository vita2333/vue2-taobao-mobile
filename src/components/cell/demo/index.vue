<template>
  <div>
    <vita-cell title="新消息提醒" is-link></vita-cell>
    <vita-cell title="新消息提醒" value="点击查看" is-link></vita-cell>
    <vita-cell
      title="新消息提醒"
      :is-link="true"
      label="关闭后,手机淘宝不运行时将不受到新消息提醒,关闭后,手机淘宝不运行时将不受到新消息提醒"
      value="哈哈哈哈"
    ></vita-cell>
    <vita-cell
      size="large"
      title="新消息提醒"
      label="关闭后,手机淘宝不运行时将不受到新消息提醒,关闭后,手机淘宝不运行时将不受到新消息提醒"
      value="哈哈哈哈"
    ></vita-cell>
    <vita-cell
      size="large"
      title="新消息提醒"
      label="关闭后,手机淘宝不运行时将不受到新消息提醒,关闭后,手机淘宝不运行时将不受到新消息提醒"
      value="哈哈"
    >
      <vita-icon slot="right-icon" name="ellipsis"></vita-icon>
    </vita-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import cell from '@/components/cell'
import icon from '@/components/icon'
import '@/components/cell/index.less'
import '@/components/icon/index.less'

Vue.use(cell)
Vue.use(icon)
export default {}
</script>

<style scoped lang="less"></style>
