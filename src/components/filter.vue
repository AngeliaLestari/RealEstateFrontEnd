<template>
  <div>

<div id="title"><h1>{{title}}</h1></div>
<div id='selection'>
<div id='box1'>
<label for="mrktseg">Market Segment</label>&nbsp;&nbsp;&nbsp;&nbsp;
<select id="mrktseg" v-model="market">
    <option value=''></option>
    <option value='OCR'>Outside Central Region</option>
    <option value='RCR'>Rest of Central Region</option>
    <option value='CCR'>Core Central Region</option>
</select>
</div>
<div id='box2'>
<label for="proptype">Property Type</label>&nbsp;&nbsp;&nbsp;&nbsp;
<select id="proptype" v-model="proptype">
    <option value=''></option>
    <option value='Apartment'>Apartment</option>
    <option value='Condominium'>Condominium</option>
    <option value='Semi-detached'>Semi Detached</option>
</select>
</div>
<div id='box3'>
<label for="areatype">Area Type</label>&nbsp;&nbsp;&nbsp;&nbsp;
<select id="areatype" v-model="areatype">
    <option value=''></option>
    <option value='Strata'>Strata</option>
    <option value='Land'>Land</option>
    <option value='Unknown'>Unknown</option>
</select>
</div><br><br>
<b-button variant="info" size="lg" id='submit' @click="submit">SUBMIT</b-button>&nbsp;&nbsp;
<b-button variant="warning" id='reset' size="lg" @click="reset">RESET</b-button>
</div><br><br>

<table class="table table-striped mt-4" id="myTable">
  <thead>
      <tr class="header">
        <th scope="col">Index</th>
        <th scope="col">Project Name</th>
        <th scope="col">Street Name</th>
        <th scope="col">Market Segment</th>
        <th scope="col"></th>
      </tr>
  </thead>
  <tbody>
    <tr v-for="(p, index) in posts" :key="p.Project">
        <td>{{index+1}}</td>
        <td>{{p.Project}}</td>
        <td>{{p.street}}</td>
        <td>{{p.marketSegment}}</td>
        <td><button type="button" class="btn btn-warning" ><router-link :to="{ name: 'details', params: { projectName: p.Project }}">ShowDetails</router-link></button></td>
    </tr>
  </tbody>

 </table>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: 'Welcome To The Advanced Filter',
      market: '',
      proptype: '',
      areatype: '',
      posts: []

    }
  },
  methods: {
    reset: function () {
      this.market = ''
      this.proptype = ''
      this.areatype = ''
    },
    submit: function () {
      const postData = {
        'marketSegment': this.market,
        'propertyType': this.proptype,
        'typeOfArea': this.areatype
      }

      axios.post('http://localhost:9090/multi-search', postData)

        .then(posts => {
          this.posts = posts.data
        }).catch((error) => console.log('error is' + error.response))
    }
  }
}

</script>

<style scoped>

#box1, #box2,#box3 {
  display: inline-block;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  border-width: 3px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 20px;

}
#selection {
  border-width: 1px;
  border-style:dotted;
  background-color: lightblue;
  padding-bottom: 20px;
}
</style>
