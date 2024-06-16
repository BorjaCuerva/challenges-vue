<script setup lang="ts">
import { getAllUrls } from '@/api/getUrls'

const url = '../data/urls.json'
const { data, error } = getAllUrls(url)
</script>
<template>
  <h1 class="title">Listado de ejercicios</h1>
  <section class="container" v-if="!error">
    <router-link class="card" v-for="item in data" :key="item.id" :to="item.slug">
      <img class="card__top-image" :src="item.image_url" alt="Imagen de {{ item.name }}" />
      <div class="card__top-div">
        <h2 class="card__title">{{ item.name }}</h2>
        <img class="card__img" :src="item.icon_url" alt="Icono Vue" />
      </div>
      <p class="card__description">{{ item.description }}</p>
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.container {
  @include flex($wrap: wrap, $gap: 1em);
}
.title {
  text-align: center;
  margin: 1em 0;
  color: map-get($map: $colors, $key: c-primary);
  font-size: 3em;
  font-weight: bold;
}
.card {
  background-color: map-get($map: $colors, $key: c-secondary);
  border-radius: 0.5em;
  padding: 1em;
  margin: 1em;
  width: 18em;
  transition: all 0.3s ease;
  background: -webkit-linear-gradient(315deg, #42d392 60%, #647eff);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.5);
  }

  &__top-image {
    filter: drop-shadow(0.625em 0.625em 0.3125em rgba(0, 0, 0, 0.4));
    border-radius: 0.5em;
  }

  &__top-div {
    @include flex($justify_content: space-between);
  }

  &__title {
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: underline;
    margin: 0.5em 0;
  }

  &__img {
    width: 2em;
    height: 2em;
    filter: drop-shadow(0.625em 0.625em 0.3125em rgba(0, 0, 0, 0.8));
  }

  &__description {
    margin: 0.5em 0;
    text-overflow: ellipsis;
    font-weight: 500;
  }
}
</style>
