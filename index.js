import express from 'express';
import routes from './routes/routes.js'
import path from 'path'
import connectDB from './model/userModel.js';

const app =express();
const port = process.env.PORT || 3000
const DATABASEURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/portfolio';

//database connection
connectDB(DATABASEURL)


//setting up for statoc files
app.use(express.static(path.join(process.cwd(),'public')));

//set up ejs 
app.set('view engine' , 'ejs');
app.set('views' , './views');


// creating route
app.use('/',routes)
// app.get('/',(req,res)=>{
//     res.send("welcome to home ,tihs is my portfolio")
// })

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
