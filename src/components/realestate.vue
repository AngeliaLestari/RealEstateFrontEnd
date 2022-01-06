<template>
<div>

<div id="title">
<h1>{{title}}</h1>
</div>
<br>
<div id='user'>
  <input type='text' v-model='search' id='usr' placeholder="Enter Street Name" @input='getResult'>
<div v-if='this.search==""'>Waiting For Your Input</div>
<div v-else-if='size()===0'>Data is not in our database</div>
<div v-else-if='size()>=1'>There are {{size()}} {{search}} in our database</div></div>

 <table class="table table-striped mt-4" id="myTable">
  <thead>
      <tr class="header">
        <th scope="col">Index</th>
        <th scope="col">Project Name</th>
        <th scope="col">Street Name</th>
        <th scope="col"></th>
      </tr>
  </thead>
  <tbody>
    <tr v-for="(p, index) in posts" :key="p.Project">
        <td>{{index+1}}</td>
        <td>{{p.Project}}</td>
        <td>{{p.street}}</td>
        <td><button type="button" class="btn btn-warning" ><router-link :to="{ name: 'details', params: { projectName: p.Project }}">ShowDetails</router-link></button></td>
    </tr>
  </tbody>

 </table>
</div>
</template>

<script>
import axios from 'axios'
import Details from './Details.vue'

export default {
  components: { Details },
  data () {
    return {
      title: 'Welcome To The Real Estate Information',
      search: '',
      filter: '',
      posts: [],
      visible: false
    }
  },
  methods: {
    getResult: function () {
      if (this.search.length > 2) {
        axios.get('http://localhost:9090/search/' + this.search)
          .then(posts => {
            this.posts = posts.data
            console.log(this.posts.length)
          }).catch((error) => console.log('error is' + error.response))
      }
    },
    size: function () {
      return this.posts.length
    }

  },
  watch: {
    search: function (newSearch) {
      if (newSearch.length > 2) {
        this.getResult()
      }
    }
  },
  created () {
    if (this.posts != null) {
      return this.posts
    } else {
      console.log('search is not in the database')
    }
  }

}

</script>

<style>
#title {
background-color: darkblue;
color:whitesmoke;
font-size:20px;
}
#user {
  font-weight:bold;
  font-size:30px;
  ;
}
</style>
