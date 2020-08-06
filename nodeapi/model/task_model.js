// var db=require('../dbconnec');
// var task={
//     getAlltask:function(callback){
//         return db.query('select * from task',callback);
//     },
//     deleteTask:function(id,callback){
//         return db.query('delete from task where id=?',[id],callback);
//     },
//     addTask:function(item,callback){
//      return db.query("insert into task values(?,?,?)",[item.id,item.title,item.status],callback);
//  },
//  getTaskbyId:function(id,callback){
//     return db.query("select * from task where id=?",[id],callback);
// },
// updateTask:function(id,item,callback){

//     return db.query("update task set title=?,status=? where id=?",[item.title,item.status,id],callback);
// },

// deleteAll:function(item,callback)
// {
//       var delarr=[];
//       for(i=0;i<item.length;i++)
//       {
//           delarr[i]=item[i].id;
//       }
//       return db.query("delete from task where id in (?)",[delarr],callback);
// }

// };
// module.exports=task;

// let mongoose=require("../dbconnec");

// let taskSchema=new mongoose.Schema({
//     task_id:Number,
//     title:String,
//     status:String
// });
// module.exports=mongoose.model('tasks',taskSchema);
// let mongoose=require("../dbconnec");

// let taskSchema=new mongoose.Schema({
//     task_id:Number,
//     title:String,
//     status:String
// });
// module.exports=mongoose.model('tasks',taskSchema);