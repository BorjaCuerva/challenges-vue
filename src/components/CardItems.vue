<script setup lang="ts">
defineProps({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image_url: String
})
</script>
<template>
  <article class="card">
    <img :src="image_url" alt="" />
    <h2 class="card__h2">{{ name }}</h2>
    <p class="card__p">{{ description }}</p>
  </article>
</template>

<style scoped lang="scss">
.card {
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  padding: 1em;
  margin: 1em 0;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 25em;

  &:hover {
    transform: scale(1.05);
  }

  &__h2 {
    margin-top: 0;
  }

  &__p {
    margin-bottom: 0;
  }
}
</style>
