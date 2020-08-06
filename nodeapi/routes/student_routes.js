var student=require('../model/student_model');
var express=require('express');
var router=express.Router();
router.get("/:id?", function(req, res, next) {
    if (req.params.id) {
      student.getStudentbyId(req.params.id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
      student.getAllstudent(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });
router.delete('/:id',function(req,res,next)
{
    student.deleteStudent(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
});
router.put('/:id', function(req, res, next) {
    student.updateStudent(req.params.id,req.body, function(err,rows) {
      if (err) {
        res.json(err);
      } 
      else {
        res.json(rows);
      }
    });
  });
  
router.post('/',function(req,res,next)
{
    student.addStudent(req.body,function(err,rows){
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