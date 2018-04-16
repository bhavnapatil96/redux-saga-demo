const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');

let EventSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    date:{
        type:Date,
    },
    organizer:{
        type:String,
    },
    isDelete:{
        type:Boolean,
        default:true
    },
    likes:{
        type:Number,
        default:0
    }
});
let event=mongoose.model('event',EventSchema);
module.exports={event};