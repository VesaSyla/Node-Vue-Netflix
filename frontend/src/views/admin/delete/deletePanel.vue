<script setup>
import { ref } from 'vue'
import deleteFilm from './deleteFilm.vue'
import Header from '../../../components/HeaderComponent.vue'
const isHidden = ref(false)
</script>

<template>
  <div id="AdminPanel">

    <Header />
    <div class="container pt-5">
      <h1 class="text-center text-white pb-3">Admin panel (Delete)</h1>
      <hr>
      <div class="row">
        <div class="col-sm-12 col-md-3 pt-5 ">
          <button class="btn " v-on:click="isHidden = !isHidden">Delete / Edit Films</button>

        </div>

        <div class="col-sm-12 col-md-9">
          <deleteFilm v-if="isHidden" />

        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
button {
  display: block;
  margin: 20px 0 0 0;
  width: 100%;
  border-radius: 0;
  box-shadow: none !important;
  border: 1px solid transparent;
  background: #e50914;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: bolder;
  color: #f9f9f9;
}

button:hover {
  background: none;
  color: #333333;
  border: 1px solid #e50914;
  color: white;
}
h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
}
</style>

