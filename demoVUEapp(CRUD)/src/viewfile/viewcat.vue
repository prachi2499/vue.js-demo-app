<template>
<div id="ListCategory">
<h1>list of categories</h1>
<div class="add">
<button v-on:click="onadd">ADD CATEGORY</button>
</div>
<br>
<table >

<thead>

<tr>



<td>ID</td>
<td>NAME</td>
<td>STATUS</td>
<td>ACTION</td>

</tr>
</thead>
<tbody>
<tr v-for="(cat,index) in catarr">

<td>{{ cat.id }}</td>

<td>{{ cat.cat_name }}</td>

<td>{{ cat.is_active }}</td>
<td>
<button v-on:click="onedit(cat.id)">Edit</button>
<button v-on:click="ondelete(cat.id,index)">Delete</button>
</td>


</tr>
</tbody>
</table>
<div>
</div>
</div>

</template>

<style>

.add{

  margin-left:400px;
}
h1{
  margin-left:560px;
}
table{
  margin-left:400px;
  border:3px solid black;
 padding:5px;
 font-size:20px;
 width:50%;
 height:10%;


}

</style>
<script>

export default {

name: 'ListCategory',

components: {

},

data() {

return {
catarr: []

};

},

methods: {
  onadd:function()
  {
    this.$router.push('addcat');
  },

  ondelete:function(id,index){
   this.$http.delete("http://localhost:3000/category/"+id).then(
    result=>{
    this.catarr.splice(index,1);
  },

)
},
onedit(id)
{
 this.$router.push("/editcat/"+id);
}
},
created(){
      this.$http.get("http://localhost:3000/category").then(function(data){
        console.log(data);
        this.catarr=data.body;
      });
    }


}
</script>
