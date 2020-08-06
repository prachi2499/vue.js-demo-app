var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'mydatabase'
 
});
 module.exports=connection;

// let mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost/mytododb");

// module.exports=mongoose;