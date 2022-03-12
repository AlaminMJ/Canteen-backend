import mongoose from "mongoose";

const ProductListSchema = new mongoose.Schema(
  {
    ProductName: { type: String, required: true, trim: true },
    ProductimgUrl: { type: String, required: true, trim: true },
    ProductCode: { type: Number, required: true, trim: true },
    ProductUnit: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const ProductList = mongoose.model(
  "ProductList",
  ProductListSchema,
  "ProductLists"
);
export default ProductList;
