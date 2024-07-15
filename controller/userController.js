const demo = require("../model/userModel")
const userController = async(req, res)=> {
    try {
        const {name, email, password, contactnumber} = req.body

        // cosnt user
        
        const user1 = await demo.create({
            name : name,
            email : email,
            password : password,
            contactnumber : contactnumber,
        })
        res.status(201).json({
            message : "your form created successfully",
            data : user1,
    
        })
    
    }    
     catch (error) {
        console.log(error.message)
    }
}

    
module.exports = {
    userController
}