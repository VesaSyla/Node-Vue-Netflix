<script setup>
</script>

<template >
  <header class="header">
    <div class="container">
      <div class="content">
        <div class="header-logo">
          <router-link to="/">
            <picture>
              <img src="../views/images/netflix-logo.svg" alt="Netflix Logo" class="" />
            </picture>
          </router-link>
        </div>
        <div class="header-right">
          <p>UNLIMITED TV SHOWS &amp; MOVIES</p>
          <div class="header-btns">
            <router-link to="/signup" class="btn btn-bg-r" v-if="!loggedIn">JOIN NOW</router-link>
            <router-link to="/admin" class=" btn btn-bg-no" v-if="loggedIn">Admin Panel</router-link>
            <router-link to="/admin" class=" btn btn-bg-no" v-if="loggedIn" @click="logout">Logout</router-link>
            <router-link to="/login" class=" btn btn-bg-no" v-else>SIGN IN</router-link>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return localStorage.getItem('token') !== null;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      // additional logout logic
    },
  },
};
</script>