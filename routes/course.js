const express=require('express')
const courseRouter=express.Router()

courseRouter.get("/preview", function(req, res)  {
  res.json({
    message: "signup endpoint",
  });
});

courseRouter.get("/purchase", function(req, res)  {
  res.json({
    message: "signup endpoint",
  });
});

module.exports ={
    courseRouter:courseRouter
}

