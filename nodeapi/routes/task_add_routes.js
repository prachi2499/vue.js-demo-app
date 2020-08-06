var taskadd=require('../model/task_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next)
{
 taskadd.insertMany({task_id:req.body.task_id,title:req.body.title,status:req.body.status},function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
});

// router.get("/:id?", function(req, res, next) {
//     if (req.params.id) {
//       taskadd.getTaskbyId(req.params.id,function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     } else {
//       taskadd.getAlltask(function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     }
//   });

module.exports=router;