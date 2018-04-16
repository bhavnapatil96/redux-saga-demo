const mongoose=require('mongoose');

let LikeSchema=new mongoose.Schema({
    eventId:{
        type:String,
    },
    userId:{
        type:String,
    }
});
let like=mongoose.model('like',LikeSchema);
module.exports={like};