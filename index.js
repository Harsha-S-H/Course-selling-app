const express = require("express");
const mongoose=require("mongoose")
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter}=require("./routes/admin")
const app = express();
const port = 3000;

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter)



async function main(){
    await mongoose.connect(
      "mongodb+srv://shharsha40:harsha123@dev.p91px.mongodb.net/course-app"
    );
    
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });
}
main()