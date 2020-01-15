<template>
  <div>
    <p>Layout</p>
    <layout></layout>
    <p>Cell</p>
    <cell></cell>
  </div>
</template>

<script>
import Layout from '@/components/col/demo'
import cell from '@/components/cell/demo'

export default {
  components: { Layout, cell },
}
</script>

<style scoped lang="less"></style>
