// import the model

const Todo = require("../models/Todo");

// define route handler

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

     await Todo.findOneAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Todo  deleted successfully",
        })
          
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:true,
            error:err.message,
            message:"server error",
        })

    }
}