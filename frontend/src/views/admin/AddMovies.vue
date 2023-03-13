<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import axios from 'axios'
const toast = useToast()
const router = useRouter()
const title = ref()
const description = ref()
const starring = ref()
const creators = ref()
const image = ref()

const selectImages = (e) => {
  let selectedFile = e.target.files[0]
  image.value = selectedFile
}
function upload() {
  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('image', image.value)
  formData.append('description', description.value),
    formData.append('starring', starring.value),
    formData.append('creators', creators.value),
    axios
      .post('http://localhost:5000/films', formData)
      .then((res) => {
        toast.success('Success ', 'Notification')
        router.replace('/');
        console.log(res.data);
      })
      .catch((err) => console.log(err))
}
</script>
<template>
  <div id="shtomovies">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-10 mt-3 pb-2">
          <h3 class="text-center text-secondary pb-2">Regjistro Filma (Home)</h3>
          <form @submit.prevent="upload" method="post">

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Title" v-model="title">
              <span class="text-danger">This field is required</span>
            </div>
            <div class="form-group">
              <!-- <input type="file" multiple ref="files" class="form-control" placeholder="Image url" @change="selectFiles"> -->
              <input type="file" id="image" name="image" @change="selectImages">
              <span class="text-danger">This field is required</span>
            </div>

            <div class="form-group">
              <textarea class="form-control" rows="4" placeholder="Description" v-model="description"></textarea>
              <span class="text-danger">This field is required</span>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Starring" v-model="starring">
              <span class="text-danger">This field is required</span>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Creators" v-model="creators">
              <span class="text-danger">This field is required</span>
            </div>

            <input type="submit" class="btn btn-secondary btn-block" value="Regjistro">
          </form>

        </div>
      </div>

    </div>

  </div>
</template>

