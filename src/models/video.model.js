import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const postSchema = new Schema(
  {
    postFile: {
      type: String, //cloudinary
      required: true,
    },


    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    
    },
    isPublished: {
      type: Boolean,
      default: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

postSchema.plugin(mongooseAggregatePaginate )

export const Post = mongoose.model("Post", postSchema);
