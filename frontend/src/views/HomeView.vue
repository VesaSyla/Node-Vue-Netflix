<script setup>
import Header from '../components/HeaderComponent.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
const films = ref([])

const getFilms = () => {
  axios
    .get('http://localhost:5000/films')
    .then((res) => {
      films.value = res.data
      // console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
onMounted(() => {
  getFilms()
})
</script>

<template>

  <div>
    <Header />

    <section class="hero-content">
      <div class="container">
        <div class="content">
          <h1 class="title">TV Shows</h1>
          <div class="dec">
            <p>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="collections-block">
      <div class="container">
        <div class="content">
          <div class="title">
            <h2>Popular Movies</h2>
          </div>

          <div class="collections">
            <router-link :to="`/films/${film._id}`" class="card-netflix" v-for="film in films" :key="film.id">
              <img :src="film.image" class="card-img" alt="">
              <h1 class="series-name">{{ film.title }}</h1>
            </router-link>
          </div>

        </div>

        <div class="content">
          <div class="title">
            <h2>Popular TV-Series</h2>
          </div>
          <div class="collections">
            <a href="#" class="card-netflix">
              <img src="./images/film3.jpg" class="card-img" alt="">
              <h3 class="series-name">Wednesday</h3>
            </a>
            <a href="#" class="card-netflix">
              <img src="./images/film2.jpg" class="card-img" alt="">
              <h3 class="series-name">Wednesday</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

