<script setup>
import { ref, onMounted } from 'vue'
import AddMovies from './AddMovies.vue'
import Header from '../../components/HeaderComponent.vue'
import axios from 'axios'
const isHidden = ref(false)
const isHidden1 = ref(false)
const isHidden2 = ref(false)
const isHidden3 = ref(false)

const getUser = () => {
  //duhet tokenin qe pe ruj ne localStorage me ja dergu ne request t headerit, tek localhost:4000/admin sepse aty osht middleware auth, e cila e kqqyr a eshte tokeni valid, tash un ja dergoj tokenin prej localStorage(sepse prandaj e kom rujt ne localStorage se duhet me rujt per n front dikun qe pastaj me ja dergu kshtu) e dergoj atje ne back end pastaj serveri e kqyr a eshte valid apo jo
  let token = localStorage.getItem('token')
  axios
    .post(
      'http://localhost:5000/users/login',
      (axios.defaults.headers.common['Authorization'] = 'Bearer ' + token)
    )
    .then((res) => {
      if (res.data.role != 'admin') {
        // this.$router.replace('*')
      }
    })
    .catch((err) => {
      // this.$router.replace('/login')
      console.log('Error----->' + err)
    })
}

onMounted(() => {
  getUser()
})
</script>

<template>
  <div id="AdminPanel">
    <!-- v-if="!user.loggedIn " tek divi pt-2-->

    <Header />
    <!-- v-if="user.loggedIn " tek divi pt-5 -->
    <div class=" container pt-5">
      <h1 class="text-center text-white pb-3">Admin panel</h1>
      <hr>
      <div class="row">
        <div class="col-sm-12 col-md-3 pt-5 ">
          <button class="btn " v-on:click="isHidden = !isHidden;isHidden1=false;isHidden2=false;isHidden3=false">Add Movies</button>
          <router-link class="btn" to="deletePanel">Delete / Edit Movies</router-link>
        </div>

        <div class="col-sm-12 col-md-9">
          <AddMovies v-if="isHidden" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.btn {
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

.btn:hover {
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

