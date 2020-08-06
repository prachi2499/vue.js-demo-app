 var task=require('../model/task_model');
 var express=require('express');
 var router=express.Router();

 router.get('/',(req,res)=>{
   task.find(function(err,rows){
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

 router.put('/:id', function(req, res, next) {
    task.update({task_id:req.params.id},{title:req.body.title,status:req.body.status}, function(err,rows) {
      if (err) {
        res.json(err);
      } 
      else {
        res.json(rows);
      }
    });
  });

  router.delete('/:id',function(req,res,next)
{
    task.remove({task_id:req.params.id},function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
});

 module.exports=router;



// router.get("/:id?", function(req, res, next) {
//     if (req.params.id) {
//       task.getTaskbyId(req.params.id,function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     } else {
//       task.getAlltask(function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     }
//   });
  
  
// router.put('/:id', function(req, res, next) {
//     task.updateTask(req.params.id,req.body, function(err,rows) {
//       if (err) {
//         res.json(err);
//       } 
//       else {
//         res.json(rows);
//       }
//     });
//   });
  

// router.delete('/:id',function(req,res,next)
// {
//     task.deleteTask(req.params.id,function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//         });
// });
// // router.post('/',function(req,res,next)
// // {
// //  task.addTask(req.body,function(err,rows){
// //         if(err)
// //         {
// //             res.json(err);
// //         }
// //         else{
// //             res.json(rows);
// //         }
// //         });
// // });

// router.post('',function(req,res,next)
// {
//  task.deleteAll(req.body,function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//         });
// });

// module.exports=router;