<template>
<div>
  <div id='title'>
  <div><span id='frontdetail'>PROJECT NAME</span> <span id='titdetail'>{{projectName}}</span></div>
  <div><span id='frontdetail'>STREET NAME </span><span id='titdetail'>{{posts.street}}</span></div>
  <div><span id='frontdetail'>PROPERTY TYPE </span><span id='titdetail2'>{{posts.transaction[0].propertyType}}</span></div>
  <div><span id='frontdetail'>TENURE </span><span id='titdetail2'>{{posts.transaction[0].tenure}}</span></div>
  <div><span id='frontdetail'>TYPE OF AREA </span><span id='titdetail2'>{{posts.transaction[0].typeOfArea}}</span></div>
  <div><span id='frontdetail'>TYPE OF SALE </span><span id='titdetail2'>{{posts.transaction[0].typeOfSale}}</span></div>
  </div><br>
  <div id='translist'>TRANSACTION LIST</div>

<div id=thetable>
      <table class="table table-striped mt-4">
      <thead>
      <tr>
        <th scope="col">Index</th>
        <th scope="col">Area</th>
        <th scope="col">Contract Date</th>
        <th scope="col">District</th>
        <th scope="col">Floor Range</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(p, index) in posts.transaction" :key="p.Project">
        <td>{{index +1}}</td>
        <td>{{p.area}}</td>
        <td>{{p.contractDate}}</td>
        <td>{{p.district}}</td>
        <td>{{p.floorRange}}</td>
        <td>{{p.price}}</td>
      </tr>
      </tbody>
    </table>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: [],
      projectName: this.$route.params.projectName
    }
  },
  created () {
    axios.get('http://localhost:9090/project/' + this.$route.params.projectName)
      .then(posts => {
        this.posts = posts.data
        console.log(this.posts.length)
      }).catch((error) => console.log('error is' + error.response))
  }

}

</script>

<style scoped>
#titdetail{
  color:greenyellow;
  font-weight: bold;
  font-size: 40px;
  text-transform:uppercase;
  -webkit-text-stroke: 0.5px darkolivegreen;
}
#titdetail2{
  color:darkturquoise;
  font-weight: bold;
  font-size: 20px;
  text-transform:uppercase;

}
#frontdetail{
  font-size: 20px;
}
#translist{
  background-color:#FFFF00;
  font-weight: bold;
}
table {
  width: 100%;
}

th {
  height: 70px;
}

#thetable {
text-align:center;
width: 800px;
margin: 0 auto;
border-style: dotted;
}
</style>
