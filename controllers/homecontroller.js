import userModel from "../model/userModel.js"


const homeController = async(req,res)=>{
    try{

    } catch (eroor){
        console.log(error.message)
    }
    
    res.render('index')
}

export {homeController}