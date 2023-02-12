import { Schema } from "mongoose";

const ServiceSchema = new Schema({
    title:{
        type: String,
        required: "Title is required",
    },
    description: {
        type: String,
        required: "Description is required"
    },
    slug:{
        type: String, 
        unique: true
    },
    feild:{
        type: String,
        required: true,
        enum: ['initial','tech','non-tech']
    },
    image:{
        type: Schema.Types.String
    }
},{
    timestamps: true,
})

ServiceSchema.pre('save', function(next) {
    this.slug = slugify(this.title);
    next();
  });

export default ServiceSchema

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           
      .replace(/[^\w\-]+/g, '')      
      .replace(/\-\-+/g, '-')         
      .replace(/^-+/, '')             
      .replace(/-+$/, '');            
  }