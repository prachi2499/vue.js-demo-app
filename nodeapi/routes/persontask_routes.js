var task=require('../model/task_model');
var person=require('../model/person_model');
var express=require('express');
var router=express.Router();

router.get('/',(req,res)=>{
  task.aggregate([
     
    {$lookup:

        {

            from: 'persons',

            localField: 'task_id',

            foreignField: 'fktask_id',

            as: 'persontask'

        }

}

  ],function(err,rows){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  });
});

module.exports=router;