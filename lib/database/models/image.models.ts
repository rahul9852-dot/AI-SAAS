
import { Document, Schema , model, models} from "mongoose";

export interface Image extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  sourceUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: number;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming string representation of ObjectId
  createdAt?: Date;
  updatedAt?: Date;
}
const ImageSchema = new Schema({
  title:{type: String, required: true},
  transformtaionType:{type: String, required: true},
  publicId:{type: String, required: true},
  sourceUrl: {type: URL, required: true},
  width:{type: Number},
  height:{type: Number},
  config:{type: Object},
  transformationUrl:{type: URL},
  aspectRatio:{type: Number},
  color:{type: String},
  prompt:{type: String},
  author:{type: Schema.Types.ObjectId, ref:'User'},
  createdAt:{type:Date, defualt: Date.now},
  updatedAt:{type:Date, default: Date.now}
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;