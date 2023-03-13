<script setup>
import Header from '../components/HeaderComponent.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
// import { useAuthStore } from '../stores/auth'
// import { storeToRefs } from 'pinia'
const router = useRouter()

const toast = useToast()
// const auth_store = useAuthStore()

const customError = ref()
const email = ref()
const password = ref()

const signIn = async () => {
  let User = {
    email: email.value,
    password: password.value
  }
  await axios.post('http://localhost:5000/users/login', User).then(
    (res) => {
      customError.value = ''
      toast.success('Successfully login')
      router.push('/');
      console.log(res);
      localStorage.setItem('token', res.data.token);
      // router.go();
    },
    (error) => {
      toast.error('Something went wrong!')
      console.log(error)
    }
  )
}
</script>

<template>
  <div class="login-wrapper">
    <Header />
    <div class="login-wrapper-background">
      <img src="./images/login-img.jpg" class="concord-img vlv-creative" alt="">
    </div>
    <!-- <div class="login-header">
      <a href="#" class="login-logo">
        <img src="./images/netflix-logo.svg" alt="">
      </a>
    </div> -->

    <div class="login-body">

      <div>
        <div class="login-content login-form">
          <div class="login-form-main">
            <h1 class="login-page-title">Sign In</h1>
            <form method="post" class="login-form1">
              <div class="nfInput login-input">
                <input type="text" name="email" id="email" class="form-control" v-model="email" placeholder="Email" />

              </div>
              <div class="nfInput login-input">
                <input type="password" name="password" id="password" class="form-control" v-model="password" placeholder="Password" />

              </div>

              <div>
                <button @click.prevent="signIn()" class="btn login-btn">Sign In</button>
                <p>{{ customError }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
