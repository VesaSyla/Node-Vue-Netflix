<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()
const router = useRouter()

const films = ref([])
const getFilms = () => {
  axios
    .get(`http://localhost:5000/films`)
    .then((response) => {
      films.value = response.data
    })
    .catch((e) => {
      this.errors.push(e)
    })
}

function deletefilm(filmid) {
  axios
    .delete('http://localhost:5000/films/' + filmid)
    .then((result) => {
      //refresh on same page
      console.log(result);
      toast.success('Successfully deleted');
      router.go({})
    })
    .catch((e) => {
      this.errors.push(e)
    })
}
// function editfilm(filmid) {
//   router.push({
//     name: 'filmedit',
//     params: { id: filmid }
//   })
// }

onMounted(() => {
  getFilms()
})
</script>

<template>
  <div id="deleteproduct ">
    <h4 class="text-center text-white pt-2">Delete / Edit Films (Home Page)</h4>
    <hr>
    <div class="container ">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-4 pt-3" v-for="film in films" v-bind:key="film._id">
          <div class="wrap d-flex justify-content-center">
            <a href="#">
              <div class="foto">
                <img :src="film.image" class="img-fluid">
              </div>
              <span class="d-block text-center">501&reg; {{ film.title }}</span>

            </a>
          </div>

          <div class="d-flex justify-content-around">
            <button class="btn btn-danger " @click.stop="deletefilm(film._id)">Delete </button>
            <!-- <button class="btn btn-warning" @click.stop="editfilm(film._id)">Edit</button> -->
            <router-link class="btn btn-warning" :to="`/movieedit/${film._id}`">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style  scoped>
.foto {
  border: 1px solid #ffffff;
  overflow: hidden;
}
.foto img {
  transition: 0.7s;
}
.foto:hover img {
  transform: scale(1.1);
}
button {
  position: static;
  bottom: 0;
}
.wrap a {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  color: #4f4f4f;
  font-size: 16px;
}
.wrap img {
  opacity: 0.8;
}

.wrap:hover img {
  opacity: 1;
}
</style>