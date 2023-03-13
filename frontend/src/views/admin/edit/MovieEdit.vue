<template>
  <div>
    <div class="container">
      <h2 class="title">Edit Film</h2>
      <form @submit.prevent="save">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Title:</label>
              <input id="title" class="form-control" v-model="movie.title" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
             <label for="image">Image:</label>
              <input id="image" class="form-control" type="file" @change="onImageChange" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="description">Description:</label>
              <textarea id="description" class="form-control" v-model="movie.description"></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="creators">Creators:</label>
              <input id="creators" class="form-control" v-model="movie.creators" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="starring">Starring:</label>
              <input id="starring" class="form-control" v-model="movie.starring" />
            </div>
          </div>
        </div>

        <button type="submit" class="btn">Save</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  data() {
    return {
      movie: {},
      imageFile: null
    };
  },
  created() {
    axios.get(`http://localhost:5000/films/${this.$route.params.id}`)
      .then(response => {
        this.movie = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
  save() {
    const formData = new FormData();
    formData.append('title', this.movie.title);
    formData.append('description', this.movie.description);
    formData.append('creators', this.movie.creators);
    formData.append('starring', this.movie.starring);
    formData.append('image', this.imageFile);

    axios.put(`http://localhost:5000/films/${this.$route.params.id}`, formData)
      .then(response => {
        console.log(response)
        this.$router.push('/admin');
        toast.success('Film has been successfully edit');
      })
      .catch(error => {
        console.error(error);
      });
  },
    onImageChange(event) {
      this.imageFile = event.target.files[0];
    },
  }
}
</script>

<style scoped>
.title, label {
  color: #fff;
}

.form-group {
  margin-bottom: 16px;
}

.btn {
    border: 1px solid transparent;
    background: #e50914;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: bolder;
    color: #f9f9f9;
}
</style>
