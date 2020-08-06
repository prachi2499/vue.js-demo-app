var db=require('../dbconnec');
var cat={
    getAllCat:function(callback){
        return db.query('select * from category',callback);
    },
    addCat:function(item,callback){
        return db.query("insert into category values(?,?,?)",[item.id,item.cat_name,item.is_active],callback);
    },
    deleteCat:function(id,callback){
        return db.query("delete from category where id=?",[id],callback);
    },
   
    getCatbyid:function(id,callback){
        return db.query("select * from category where id=?",[id],callback);
    },
    updateCat:function(id,item,callback){

        return db.query("update category set cat_name=?,is_active=? where id=?",[item.cat_name,item.is_active,id],callback);
    }

};
module.exports=cat;