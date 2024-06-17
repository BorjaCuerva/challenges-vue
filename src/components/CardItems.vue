<script setup lang="ts">
defineProps({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image_url: String,
  url: String
})
</script>
<template>
  <article class="card">
    <router-link
      :to="{
        name: 'detail',
        params: {
          url: url,
          name: name,
          description: description,
          price: price,
          category: category,
          stock: stock,
          image_url: image_url
        }
      }"
    >
      <img class="card__img" :src="image_url" :alt="name" />
      <h2 class="card__h2">{{ name }}</h2>
      <p class="card__p">{{ description }}</p>
      <div class="card__details">
        <span class="card__span">Precio: {{ price }}€</span>
        <span class="card__span">Categoría: {{ category }}</span>
        <span class="card__span">Stock: {{ stock }}</span>
      </div>
    </router-link>
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

  &__img {
    width: 100%;
    height: 15em;
    border-radius: 0.25rem;
  }

  &__h2 {
    margin: 1em 0;
    font-size: 1.3em;
    color: map-get($map: $colors, $key: c-primary);
  }

  &__p {
    max-width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__details {
    @include flex(column, $align_items: flex-start);
  }

  &__span {
    margin: 1em 0 0;
    font-weight: bold;

    &::before {
      content: '•';
      font-weight: bold;
      margin-right: 0.5em;
      color: map-get($map: $colors, $key: c-primary);
    }
  }
}
</style>
