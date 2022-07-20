const { Schema, model } = require("mongoose");
const validator = require("validator");

const geoSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/oluwatobiloba/image/upload/v1628753027/Grazac/avatar_cihz37.png",
    },
    geo_details: geoSchema,
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.index({ coordinates: "2dsphere" });

const Product = model("Product", productSchema);

module.exports = Product;
