const { Schema, model } = require("mongoose");
const validator = require("validator");

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
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    // location: {
    //   type: {
    //     type: String,
    //     enum: ["Point"],
    //   },
    //   coordinates: {
    //     type: [Number],
    //     index: "2dsphere",
    //   },
    //   formattedAddress: String,
    // },
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

// productSchema.pre("save", function () {});

const Product = model("Product", productSchema);

module.exports = Product;
