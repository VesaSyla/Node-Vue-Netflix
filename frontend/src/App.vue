<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>

<style >
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #181818;
  font-family: sans-serif;
}

/* general */
a,
a:active,
a:focus,
a:hover,
a:visited {
  text-decoration: none;
}

.btn-bg-r {
  background-color: #e50914;
  border: 1px solid #e50914;
  border-radius: 2px;
}

.btn-bg-r:hover {
  background-color: red;
  border: 1px solid red;
}

.btn-bg-no {
  border: 1px solid #888;
  border-radius: 2px;
  margin-left: 10px;
}

.btn-bg-no:hover {
  background-color: hsla(0, 0%, 53%, 0.459);
}

.title {
  margin: 20px 0;
}

/* general */

.header {
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 99;
}

.header .content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.header-right {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.header-right p {
  font-weight: 400;
  line-height: 1.1;
  font-size: 13px;
  color: #fff;
  margin-bottom: 0;
}

.header-btns a.btn {
  display: inline-block;
  padding: 8px 20px;
  font-size: 13px;
  color: #fff;
}

/* header finish */

.hero-content {
  padding: 50px 0;
}

.hero-content .content h1.title {
  color: #fff;
  font-size: 2.75rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 10px;
  margin-top: 1vw;
}

.hero-content .content div.dec {
  margin-top: 20px;
}

.hero-content .content div.dec p {
  color: #fff;
  font-family: sans-serif;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 10px;
}

/* hero finish */
.collections-block {
  margin-bottom: 50px;
}

.collections-block .content {
  margin-bottom: 50px;
}

.collections {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
}

.card-netflix {
  display: block;
  transition: 0.3s;
  width: 32.5%;
}

.card-netflix:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.collections-block .content .title h2 {
  color: #fff;
  font-family: sans-serif;
}

.card-netflix .card-img {
  display: block;
}

img.card-img {
  height: auto;
  width: 100%;
}

.card-netflix .series-name {
  color: #fff;
  display: block;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 30px;
  line-height: 1;
  margin: 2px 0 0;
  padding: 5px 0;
  text-align: center;
}

/* single movie */
.section-hero {
  line-height: 1.4;
  overflow: hidden;
}

.nmtitle-section.section-hero {
  padding-top: 0;
}

.nmtitle-section {
  background: #181818;
  margin: 0 auto;
  max-width: 1600px;
  padding: 25px 5vw;
  position: relative;
}

.section-hero .hero-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  width: 100%;
}

.section-hero .info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  min-width: 500px;
  padding: 16px 32px 64px 0;
  position: relative;
  width: 35%;
  z-index: 2;
}

.section-hero .logo-container {
  position: relative;
  width: 90%;
}

.section-hero .logo {
  height: auto;
  width: 100%;
}

.section-hero .details-container {
  margin: 40px 0 0;
}

.section-hero .details-container .title-info {
  margin-bottom: 22px;
}

#section-hero .title-title {
  margin-top: 10px;
}

.section-hero h1.title-title {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
}

.section-hero .title-info-metadata-wrapper {
  margin-top: 16px;
}

#section-hero .title-info-metadata-item {
  position: relative;
  color: #a3a3a3;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

#section-hero .title-info-metadata-wrapper .info-spacer {
  color: #a3a3a3;
  margin: 0 4px;
}

.maturity-rating {
  display: inline-block;
}

.screen-reader-text {
  left: -9999px;
  position: absolute;
  top: -9999px;
}

.maturity-rating .maturity-number {
  border: 1px solid #a1a1a1;
  padding: 0 5px;
}

#section-hero .title-info-synopsis-talent {
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 5px;
  margin-top: 5px;
  max-width: 100%;
}

.section-hero .title-info-synopsis,
.section-hero .title-info-talent {
  padding-top: 16px;
}

#section-hero .title-info-synopsis,
#section-hero .title-info-talent {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  max-width: 100%;
}

.section-hero .info-container:after {
  background: linear-gradient(
    90deg,
    #181818 10%,
    hsla(0, 0%, 9%, 0.98) 20%,
    hsla(0, 0%, 9%, 0.97) 25%,
    hsla(0, 0%, 9%, 0.95) 35%,
    hsla(0, 0%, 9%, 0.94) 40%,
    hsla(0, 0%, 9%, 0.92) 45%,
    hsla(0, 0%, 9%, 0.9) 50%,
    hsla(0, 0%, 9%, 0.87) 55%,
    hsla(0, 0%, 9%, 0.82) 60%,
    hsla(0, 0%, 9%, 0.75) 65%,
    hsla(0, 0%, 9%, 0.63) 70%,
    hsla(0, 0%, 9%, 0.45) 75%,
    hsla(0, 0%, 9%, 0.27) 80%,
    hsla(0, 0%, 9%, 0.15) 85%,
    hsla(0, 0%, 9%, 0.08) 90%,
    hsla(0, 0%, 9%, 0.03) 95%,
    hsla(0, 0%, 9%, 0)
  );
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: -200px;
  top: 0;
  z-index: -1;
}

.section-hero .hero-image-container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  height: 0;
  padding-bottom: 55%;
  z-index: 1;
}

.section-hero .hero-image.hero-image-desktop {
  background-image: url(./images/single-movie1.1.png);
  display: block !important;
}

.section-hero .hero-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  right: -6%;
  width: 103%;
}

/* single movie */

/* login */
.login-wrapper {
  margin: 0;
  min-height: 100%;
  padding: 0;
  position: relative;
  z-index: 0;
}

.login-wrapper-background {
  opacity: 0.5;
}

.login-body {
  color: #333;
  margin: 0 auto;
  padding: 0 5%;
}

.login-content {
  min-height: 550px;
}

.login-form-main {
  flex-grow: 1;
}

.login-form h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
}

.login-input input {
  display: block;
  padding-bottom: 16px;
  margin-bottom: 16px;
  max-width: 100%;
  /* max-width: 500px; */
  border: 0;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px;
  width: 100%;
  font-size: 15px;
}

.login-form {
  background-color: unset;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  min-height: 280px;
}

.login-btn {
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  background: #e50914;
  width: 100%;
  padding: 8px;
  color: #fff;
}
.login-wrapper-background {
  display: none;
}

.login-header {
  height: 90px;
  background: none;
  border: none;
}
.login-header a {
  margin-left: 3%;
  padding-top: 3%;
  display: block;
}
@media only screen and (min-width: 500px) {
  .login-content {
    min-width: 380px;
  }
}

@media only screen and (min-width: 740px) {
  .login-wrapper {
    background-color: #000;
    color: #fff;
  }
  .login-wrapper-background {
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .login-wrapper-background .vlv-creative {
    min-height: 100%;
    min-width: 100%;
  }

  .login-header {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
    border-bottom: transparent;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .login-header a {
    margin-left: 3%;
    fill: #e50914;
    display: inline-block;
    line-height: 90px;
    text-decoration: none;
    vertical-align: middle;
  }

  .login-body {
    background-color: transparent;
    margin: 0 auto -236px;
    max-width: 450px;
    min-height: 100vh;
  }

  .login-body:before {
    content: '';
    display: block;
    height: 91px;
  }

  .login-content {
    /* min-height: 660px; */
    margin-bottom: 90px;
    padding: 60px 68px 40px;
  }

  .login-form {
    background-color: rgba(0, 0, 0, 0.75);
  }
}
/* login */
@media screen and (min-width: calc(600px)) {
  .hero-content .content {
    max-width: 598px;
  }
}

@media screen and (max-width: 1065px) {
  .card {
    width: 32.4%;
  }
}

@media screen and (max-width: 952px) {
  .card {
    width: 32.3%;
  }
}

@media screen and (max-width: 860px) {
  .card {
    width: 32.2%;
  }
}

@media screen and (max-width: 783px) {
  .card {
    width: 32.1%;
  }
}

@media screen and (max-width: 720px) {
  .card {
    width: 31.5%;
  }
}

@media screen and (max-width: 599px) {
  .card {
    width: 31.1%;
  }
}

@media screen and (max-width: 398px) {
  .card {
    width: 47%;
  }
}
</style>
