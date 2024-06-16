<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getAllItems } from '@/api/getAllItems'
const CardItems = defineAsyncComponent(() => import('@/components/CardItems.vue'))
const url = '../data/items.json'

const { data, error } = getAllItems(url)
</script>
<template>
  <h1 class="title">Catálogo de productos</h1>
  <section class="container" v-if="!error">
    <CardItems v-for="item in data" :key="item.id" v-bind="item" />
  </section>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  margin: 1em 0;
  color: map-get($map: $colors, $key: c-primary);
  font-size: 3em;
  font-weight: bold;
}
.container {
  @include flex($wrap: wrap, $gap: 1em);
}
</style>
