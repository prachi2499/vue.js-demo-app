<template>

<div class="addform">

<h2>Edit Category Form</h2>

<form>
<p >
<label>Category Id:</label>
<input type="text"  class="idbox" v-model="catarr[0].id"></input>
</p>
<p>
<label>Category Name:</label>
<input type="text" v-model="catarr[0].cat_name" ></input>
</p>
<p>
<label>Category Status:</label>
<input type="text" placeholder="Active/Not Active" v-model="catarr[0].is_active" ></input>
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
  data()
  {
    return{
         catarr:[],
         id:'',
         cat_name:'',
         is_active:''


    }
  },
  methods:{
    onback:function(){
      this.$router.push("/cat");
    },

    onsave:function(){
      this.$http.put("http://localhost:3000/category/"+this.$route.params.id,{
         id:this.$route.params.id,
        cat_name:this.catarr[0].cat_name,
        is_active:this.catarr[0].is_active

      });
      this.$router.push("/cat");
    }

  },
  created()
  {


   this.$http.get("http://localhost:3000/category/"+this.$route.params.id).then(result=>{
     this.catarr=result.body;
     console.log(this.catarr);
   })
  }
}
</script>
