var db=require('../dbconnec');
var student={
    getAllstudent:function(callback){
        return db.query('select * from student',callback);
    },
   deleteStudent:function(id,callback){
       return db.query('delete from student where id=?',[id],callback);
   },
   addStudent:function(item,callback){
    return db.query("insert into student values(?,?,?,?,?,?)",[item.id,item.name,item.mobile,item.gender,item.city,item.fees],callback);
},
getStudentbyId:function(id,callback){
    return db.query("select * from student where id=?",[id],callback);
},
updateStudent:function(id,item,callback){

    return db.query("update student set name=?,mobile=?,gender=?,city=?,fees=? where id=?",[item.name,item.mobile,item.gender,item.city,item.fees,id],callback);
}
};
module.exports=student;