// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) =>{
     try{
        //  extract jwt token
        // PENDING OTHER WAYS TO FETCH TOKEN
        
        const token =req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            });
        }

        // verify the token
         try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
                //  why this
            req.user = payload;

         }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is invalid",
            });
         }

         next();

     }catch(error){
            return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying the token!",
        });
     }
}

exports.isStudent = (req,res,next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for student",
            });
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error user role cannot be verifyied",
        });
    }
}

exports.isAdmin = (req,res,next) =>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin",
            });
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error user role cannot be verifyied",
        });
    }
}