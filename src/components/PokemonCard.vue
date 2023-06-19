<script>
export default {
  name: 'PokemonCard',
  props: {
    host: String,
    pokemon: Object,
    pkmnImg: String,
  }
}
</script>
<template>
  <div class=" card h-100 shadow">
    <div>
      <div class="card-header">


        <h3>
          #{{ pokemon.id }} {{ pokemon.name }}
        </h3>

      </div>
      <div class="card-body text-center h-100">
        <router-link :to="{ name: 'single-pokemon', params: { name: pokemon.name } }">
          <a role="button">
            <img class="img-fluid" :src="pokemon.gif" alt="">
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>