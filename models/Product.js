import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ProductId: { ref: "ProductList" },
    Quatity: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema, "Products");
export default Product;
