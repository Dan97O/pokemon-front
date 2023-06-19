<script>
import axios from 'axios';
import PokemonCard from '../components/PokemonCard.vue'
export default {
  name: 'AppHome',
  components: {
    PokemonCard
  },

  data() {
    return {
      host: 'http://127.0.0.1:8000/',
      pkmnPoint: 'api/pokemons',
      pkmnImg: 'storage/',
      pokemons: [],
      nextPage: null,
      prevPage: null,
      currentPage: 1,
      loading: true,
    }
  },
  methods: {
    prevPage(path) {
      //console.log(path);
      this.getPokemons(path);
    },
    nextPage(path) {
      this.getPokemons(path);
    },
    getPokemons(url) {
      axios
        .get(url)
        .then(response => {
          //console.log(response);
          this.pokemons = response.data.pokemons.data;
          //console.log(this.projects);
          this.nextPage = response.data.pokemons.next_page_url;
          this.prevPage = response.data.pokemons.prev_page_url;
          this.currentPage = response.data.pokemons.currentPage;
          this.loading = false;
        })
        .catch(error => {
          //console.log(error);
          this.error = error.message;
        })
    },
  },
  mounted() {
    const url = this.host + this.pkmnPoint;
    this.getPokemons(url);
  }

}
</script>
<template>
  <div v-if="loading">
    <div class="row row-cols-3 g-5">
      <div class="col" v-for="n in 3">
        <div class="card" aria-hidden="true">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="row row-cols-3 g-5">
      <div class="col" v-for="pokemon in pokemons">
        <PokemonCard :pokemon="pokemon" :host="host" :pkmnImg="pkmnImg"></PokemonCard>
      </div>
    </div>
    <nav aria-label="Page navigation" v-if="pokemons">
      <ul class="pagination justify-content-center align-items-center">
        <li class="page-item">
          <button class="page-link" aria-label="Previous" @click="prevPage ? prevPage(pokemons.prev_page_url) : ''">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li>
          <button class="page-link" aria-label="current-page">
            <span>
              {{ this.currentPage }}
            </span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Next" @click="nextPage ? nextPage(pokemons.next_page_url) : ''">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style lang="scss" scoped></style>