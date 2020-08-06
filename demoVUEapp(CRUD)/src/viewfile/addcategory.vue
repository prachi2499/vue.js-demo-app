<template>

<div class="addform">

<h2>Add Category Form</h2>

<form>
<p >
<label>Enter Category Id:</label>
<input type="text" v-model="cat.id" class="idbox"></input>
</p>
<p>
<label>Enter Category Name:</label>
<input type="text" v-model="cat.cat_name"></input>
</p>
<p>
<label>Enter Category Status:</label>
<input type="text" placeholder="Active/Not Active" v-model="cat.is_active"></input>
</p>

<button v-on:click="onback">Back</button>
<button v-on:click="onsave">Save</button>
<br>
<br>
</form>

</div>
</template>

<style>
.addform{
  margin-left:500px;
  margin-top:200px;
 border:3px solid black;
  height:40%;
   width:30%;
   background-color:whitesmoke;
}
button{
  margin-left:20px;
  width:40%;
  height:40px;
}
p {

margin-left:20px;
}
h2
{
margin-left:120px;
}
input{
  margin-left:70px;
}
.idbox{
  margin-left:94px;
}
</style>

<script>
export default{

components:{

},
data(){
  return{
    cat:{
       id:"",
       cat_name:"",
       is_active:""
    }

  }
},
methods:{
  onback:function(){
    this.$router.push("cat");

  },
  onsave:function(){
this.$http.post("http://localhost:3000/category",{
 id:this.cat.id,
 cat_name:this.cat.cat_name,
 is_active:this.cat.is_active
}).then(function(data){

  console.log(data);

});
this.$router.push("cat");
  }

}
}
</script>
