<script>

export default {
  name: 'AppHeader'
}
</script>
<template>
  <div class="d-flex justify-content-between align-items-center">

    <router-link :to="{ 'name': 'home' }">
      <img height="100"
        src="https://user-images.githubusercontent.com/69367907/105195232-72462e00-5b08-11eb-9bd0-dfa95f8e7e9a.png"
        alt="">
    </router-link>
    <nav class="nav justify-content-end align-items-center">
      <a class="nav-link" href="#" aria-current="page">Regions</a>
      <a class="nav-link" href="https://github.com/Dan97O/pokemon-front">GitHub Code</a>
    </nav>
  </div>
</template>


<style lang="scss" scoped></style>