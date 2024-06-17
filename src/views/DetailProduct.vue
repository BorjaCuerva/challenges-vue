<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image_url: String,
  url: String,
  hola: Object
})

const route = useRoute()

console.log(props.hola)

console.log(route)
</script>
<template>
  <div>
    <h1>Product Detail</h1>

    <p>{{ route.params }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
