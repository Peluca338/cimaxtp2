<!-- MovieCard.vue -->
<template>
  <div class="movie-card">
      <img class="img-fluid rounded" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title + ' Poster'" />
      <h2 class="text-secondary mt-3">{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      
      <button class="btn btn-outline-secondary w-75 fs-5">Agregar a favoritos</button>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
  movie: Object, 
  });

</script>

<style scoped>
  .movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  margin: 32px;
  height: 100%;
  }

  .movie-card img {
  max-width: 100%;
  height: auto;
  }

  .movie-card h2, .movie-card p {
  margin: 10px 0;
  text-align: center;
  }

  .movie-card p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 4.5em;
  }

  .movie-card {
  flex: 1 1 auto;
  }
</style>