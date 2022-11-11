import { Schema, model } from "mongoose";

const parkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true, //quita los espacion adicionales al inicio y al final
    },

    description: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Parking", parkSchema)