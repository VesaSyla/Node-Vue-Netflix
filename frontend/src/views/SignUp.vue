<script setup>
import Header from '../components/HeaderComponent.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
// import { useAuthStore } from '../stores/auth'
// import { storeToRefs } from 'pinia'
const host = import.meta.env.VITE_API_URL
const router = useRouter()

const toast = useToast()
// const auth_store = useAuthStore()

const customError = ref()

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const signUp = async (values) => {
  await axios.post(`${host}/users/register`, values, {}).then(
    (res) => {
      customError.value = ''
      toast.success('Successfully sign up,now you can login')
      router.push({ name: 'login' })
      // router.go();
    },
    (error) => {
      toast.error('Something went wrong!')
      customError.value = error.response.data.msg
      // console.log(error.response.data.msg);
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
            <h1 class="login-page-title">Sign Up</h1>
            <Form @submit="signUp" method="post" :validation-schema="schema" v-slot="{errors}" class="login-form1">
              <div class="nfInput login-input">
                <Field type="text" name="email" id="email" class="form-control" placeholder="Email" />
                <p class="text-danger text-sm">{{errors.email}}</p>
              </div>
              <div class="nfInput login-input">
                <Field type="password" name="password" id="password" class="form-control" placeholder="Password" />
                <p class="text-danger text-sm">{{errors.password}}</p>
              </div>

              <div>
                <button type="submit" class="btn login-btn">Sign Up</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
