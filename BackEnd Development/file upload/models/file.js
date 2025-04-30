const mongoose = require("mongoose");
const nodemailer = require("nodemailer");


const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags:{
    type:String,
  },
  email: {
    type: String,
  },
});

// post middelware
 fileSchema.post("save", async function(doc) {
    try{
      console.log("doc",doc);
      // transpoter
      let transpoter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
             user:process.env.MAIL_USER,
             pass:process.env.MAIL_PASS,
        }
      });

      // mail send 
      let info = await transpoter.sendMail({
        from:"codezada",
        to:doc.email,
        subject:"New file uploaded on cloudinary",
        html:`<h2>Hello jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</p></a>`
      })

      console.log("imfo", info);

    }catch(error){
       console.error(error);
    }
 })

const file = mongoose.model("File", fileSchema);
module.exports = file;
