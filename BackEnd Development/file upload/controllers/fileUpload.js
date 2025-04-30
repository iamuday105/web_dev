const File = require("../models/file");
const path = require('path');
const cloudinary = require("cloudinary").v2;

// localfileUpload  -> handler function

exports.localFileUpload = async (req, res) => {
    try{
    //    fetch file
    const file = req.files.file;
    console.log("FILE AAGYI JEE", file);

    const filePath = path.join(__dirname, Date.now() + `.${file.name.split('.')[1]}`);

    console.log("path",filePath);

    file.mv(filePath, (err)=>{
            console.log(err);
    });

    res.json({
        success: true,
        message: "Local file Uploaded Successfully",
    })



    }catch(error){
        console.log("Not able to upload file on server");
       console.log(error);
    }
    
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder,quality) {
    const options = {folder};

    if(quality){
        options.quality = quality;
    }
    options.resource_type ="auto";
   return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload ka handler

exports.imageUpload = async (req,res) => {
    try{
     
        // data fetch

        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        // validation

        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

        // file format supported hai
         const response = await uploadFileToCloudinary(file,"codezada");
         console.log(response);

        //  db me entry save krni hai
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded",
        })
        
    }catch(error){
         console.error(error);
         res.status(400).json({
            success:false,
            message:"Something went wrong during uploading image"
         })
    }
}

// video upload ka handler

exports.videoUpload = async (req, res) => {
    try{
  // data fetch

  const { name, tags, email} = req.body;
  console.log(name,tags,email);

  const file = req.files.imageFile;
  console.log(file);

   // validation

   const supportedTypes = ["mp4","mov"];
   const fileType = file.name.split('.')[1].toLowerCase();

//    TODO: add a upper limit of 5MB for video

   if(!isFileTypeSupported(fileType, supportedTypes)){
       return res.status(400).json({
           success:false,
           message:"File format not supported",
       })
   }
 
   // file format supported hai
   const response = await uploadFileToCloudinary(file,"codezada");
   console.log(response);

     //  db me entry save krni hai
     const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url,
    })

    res.json({
        success:true,
        imageUrl:response.secure_url,
        message:"Video successfully uploaded",
    })
    


    }catch(error){
        console.error(error);
        res.status(400).json({
           success:false,
           message:"Something went wrong during uploading video"
        })
    }
}

// imageReducer 

exports.imageSizeReducer = async (req, res) => {
    try{

         // data fetch

         const { name, tags, email} = req.body;
         console.log(name,tags,email);
 
         const file = req.files.imageFile;
         console.log(file);

          // validation

        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

        // file format supported hai
         const response = await uploadFileToCloudinary(file,"codezada",30);
         console.log(response);

           //  db me entry save krni hai
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image size successfully reduced",
        })




    }catch(error){
        console.error(error);
        res.status(400).json({
           success:false,
           message:"Something went wrong during reducing image"
        })
    }
}