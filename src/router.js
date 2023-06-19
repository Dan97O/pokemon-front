import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue'
import SinglePokemon from './views/SinglePokemon.vue'
import NotFound from './views/NotFound.vue'
import AppRegions from './views/AppRegions.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/pokemons/:name',
      name: 'single-pokemon',
      component: SinglePokemon
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/region',
      name: 'regions',
      component: AppRegions
    },
  ]
});

export { router }