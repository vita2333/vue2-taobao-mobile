<template>
  <div>
    <p>Layout</p>
    <layout></layout>
    <p>Cell</p>
    <cell></cell>
    <p>Cell group</p>
    <cell-group></cell-group>
  </div>
</template>

<script>
import Layout from '@/components/col/demo'
import cell from '@/components/cell/demo'
import cellGroup from '@/components/cell-group/demo'

export default {
  components: {
    Layout,
    cell,
    cellGroup,
  },
}
</script>

<style scoped lang="less"></style>
