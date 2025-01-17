const {Router}=require("express")
const adminRouter=Router()

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
adminRouter.post("/login", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/courses", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/courses/bulk", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});


module.exports={
    adminRouter:adminRouter
}