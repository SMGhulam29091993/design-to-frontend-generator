import mongoose from "mongoose";


const generationSchema = new mongoose.Schema({
    figmaUrl : {
        type : String,
        required : true
    },
    framework : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    
} , {
    timestamps : true
})


const Generation = mongoose.model("Generation", generationSchema);

export default Generation;