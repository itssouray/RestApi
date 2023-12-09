const mongoose = require("../db/conn");

//topic schema
const Topics = mongoose.Schema({
    TopicName:{type:String,required:false},
    description:{type:String,required:false},
    example:{type:String,required:false},
    imgExample:{type:String,required:false}
})

//chapter schema
const Chapters = mongoose.Schema({
    chapterName:{type:String,required:true},
    topic:{Topics,type:Array}
})

//language schema
const languageSchema = mongoose.Schema({
    subjectName:{type:String,required:true},
    imgUrl:{type:String,required:true},
    ratings:{type:Number,required:true},
    chapters:{Chapters,type:Array,require:true}
})

const Language = mongoose.model("Language",languageSchema)

module.exports = Language;