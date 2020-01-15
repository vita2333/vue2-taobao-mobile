<template>
  <div>
    <p>Layout</p>
    <layout></layout>
    <cell></cell>
  </div>
</template>

<script>
import Layout from '../../tests/demo/layout.vue'
import cell from '../../tests/demo/cell.vue'

export default {
  components: { Layout, cell },
}
</script>

<style scoped lang="less"></style>
