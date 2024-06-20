<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getSpecificProduct } from '@/composables/getSpecificProduct'

const { url } = useRoute().params

const product = getSpecificProduct(url.toString())
</script>
<template>
  <div>
    <h1>Product Detail</h1>
    {{ product }}
  </div>
</template>

<style scoped lang="scss"></style>
