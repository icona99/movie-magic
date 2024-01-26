const {mongoose } = require("mongoose")

const movieSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    genre:{
        
    },
    director:{
       
    },
    year:{
        
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    description:{
         type:String,
        required:true,
        maxLength:1000,
    },
imageUrl:{
    type:String,
        required:true,
        match:/^http?/
}
});

const Movie=mongoose.model('Movie',movieSchema);

module.exports=Movie;