<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '../components/HeaderComponent.vue'
const route = useRoute()
const film = ref({})
const getFilms = () => {
  axios
    .get(`http://localhost:5000/films/` + route.params.id)
    .then((res) => {
      film.value = res.data
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
  <main>
    <div>
      <Header />
    </div>
    <section class="nmtitle-section section-hero" id="section-hero">
      <div class="hero-container">
        <div class="info-container">
          <div class="logo-container logo-other">
            <img :src="film.image" class="logo" alt="image">
          </div>
          <div class="details-container">
            <div class="title-info">
              <h1 class="title-title">{{ film.title }}</h1>
              <div class="title-info-metadata-wrapper">
                <span class="title-info-metadata-item item-year">2007</span>
                <span role="presentation" class="info-spacer"> | </span>
                <span class="title-info-metadata-item item-maturity">
                  <span class="maturity-rating">
                    <span class="screen-reader-text">Maturity Rating:</span>
                    <span class="maturity-number">All </span>
                  </span>
                </span>
                <span role="presentation" class="info-spacer"> | </span>
                <span class="title-info-metadata-item item-runtime">
                  <span class="duration">
                    <span class="test_dur_str">NETFLIX</span>
                  </span>
                </span>
                <span role="presentation" class="info-spacer"> | </span>
                <a class="title-info-metadata-item item-genre" href="#">FILM</a>
              </div>
              <div class="title-info-synopsis-talent">
                <div class="title-info-synopsis">{{ film.description }}</div>
                <div class="title-info-talent">
                  <div class="title-data-info-item item-starring">
                    <span class="title-data-info-item-label">Starring:</span>
                    <span class="title-data-info-item-list">{{ film.starring }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-image-container">
          <div class="hero-image hero-image-desktop">

          </div>
        </div>
      </div>
    </section>
  </main>
</template>