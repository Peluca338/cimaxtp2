<template>
  <div>
    <header>
      <div class="headerDiv">
        <div class="headerLogo">
          <img src="img/cimaxLogoNegativo.png" alt="Cinemax Logotipo">
          <img src="img/logo2.png" alt="Cinemax Isotipo">
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="busquedaEstilos">
          <form id="form" class="formClass">
            <input class="rounded" v-model="titulo" type="text" placeholder="¿Qué vamos a ver?">
          </form>
          <div class="btnsClass">
            <div>
              <button type="button" id="btnBuscar" @click="realizarBusqueda">Buscar</button>
            </div>
            <div>
              <Router-link to="/pelisGuardadas">
                <button type="button" id="btnFavoritas">Favoritas</button>
              </Router-link>
            </div>
          </div>
        </div>
      </section>
      <section id="resultados" class="row w-75 mx-auto mt-4">
        <div v-for="movie in movies" :key="movie.id" class="col-12 col-md-6 col-lg-4 mb-4 d-flex">
          <MovieCard :movie="movie" class="w-100" />
        </div>
      </section>
    </main>
    <footer>
      <div class="footerInfo">
        <div class="isoImg">
          <img src="img/logo2.png" alt="">
        </div>
        <div class="copyTxt">
          <p>© 2024, Cimax.com, Inc. o sus filiales</p>
        </div>
        <div class="autoresTxt">
          <ul>
            <li>Alumnos:</li>
            <li>Victoria Taño</li>
            <li>Joaquín Preiti</li>
            <li>Alvaro Manuel Avendaño</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MovieCard from './components/peliCard.vue';
import { RouterLink } from 'vue-router';

const titulo = ref('');
const movies = ref([]);


async function realizarBusqueda() {
  try {
    const apiKey = 'd9f8901bd28b4f1405c103168a6467e0'; // Tu API Key de TMDb
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${titulo.value}`;
    const resp = await fetch(endPoint);
    const data = await resp.json();
    console.log('Respuesta de la API:', data);
    if (data.results && data.results.length > 0) {
      // Aquí puedes manejar la respuesta y renderizar las películas
      Swal.fire({
        title: "¡Pelicula encontrada!",
        text: `Se encontraron ${data.results.length} resultados.`,
        icon: "success"
      });
      movies.value = data.results;
    } else {
      movies.value = [];
      Swal.fire({
        title: "Mmm, que extraño...",
        text: "No se han encontrado peliculas, intenta buscar nuevamente",
        icon: "question"
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "¡Ha ocurrido un error!",
      text: "Ocurrió un error en el servidor. Por favor, intenta nuevamente más tarde.",
    });
  }
}
</script>

<style scoped>
.headerDiv {
  display: flex;
  justify-content: center;
  background-color: #2B2B2B;
  height: 15em;
}

.busquedaEstilos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footerInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #080A1B;
  color: white;
  padding: 5em;
  margin-top: 26em;
}
</style>
