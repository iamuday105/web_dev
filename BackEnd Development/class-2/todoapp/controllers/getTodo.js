// import the model

const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async (req, res) => {
    try{
        //    fetch all todo items
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success: true,
            data: todos,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(err){
           console.error(err);
           res.status(500)
           .json({
            success:false,
            error:err.message,
            message:"Server Error",
           })
    }
}

exports.getTodoById = async (req, res) => {
    try{
        // extract todo items basis on Id

        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // data forgiven id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given Id",
            })
        }

        // data for given id FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
         success:false,
         error:err.message,
         message:"Server Error",
        })
    }
}