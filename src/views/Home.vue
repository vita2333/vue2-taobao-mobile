<template>
  <div>
    <p>Layout</p>
    <layout></layout>
    <p>Cell</p>
    <cell></cell>
    <p>Cell group</p>
    <cell-group></cell-group>
    <p>Tabs</p>
    <tabs></tabs>
  </div>
</template>

<script>
import Layout from '@/components/col/demo'
import cell from '@/components/cell/demo'
import tabs from '@/components/tabs/demo'
import cellGroup from '@/components/cell-group/demo'

export default {
  components: {
    Layout,
    cell,
    cellGroup,
    tabs,
  },
}
</script>

<style scoped lang="less">
p {
  border-top: 1px dotted #000000;
  margin-top: 10px;
  padding: 10px;
}
</style>
