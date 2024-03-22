import { Schema, model, models } from "mongoose";

 export interface IImage extends Document {
    title: string;
    TransformationType: string;
    publicId: string;
    secureId: URL;
    width?: number;
    height?: number;
    config?: Record<string, any>; // Assuming config is an object with dynamic keys and values
    TransformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: Schema.Types.ObjectId | string; // Assuming Schema is imported from Mongoose
    createdAt: Date;
    updatedAt: Date;
}


const ImageSchema = new Schema({
    title:{type:String ,required:true},
    TransformationType:{type:String ,required:true},
    publicId :{type:String , required:true},
    secureId :{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    TransformationUrl:{type:URL},
    aspectRatio :{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt :{type:Date,default:Date.now},
    updatedAt :{type:Date,default:Date.now}

});

const Image = models?.Image || model('Image',
ImageSchema);

export default Image;