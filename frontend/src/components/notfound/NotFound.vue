<script setup>
import Header from '../HeaderComponent.vue'
</script>
<template>
  <main>
    <Header />
    <div class="d-flex align-items-center justify-content-center vh-100 ">
      <div class="text-center text-white">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
          The page you’re looking for doesn’t exist.
        </p>
        <router-link to="/" class="btn btn-danger">Go Home</router-link>
      </div>
    </div>
  </main>
</template>

<style></style>