import { Schema, model } from "mongoose"; // importamos Schema y model de Mongoose

// Definimos el esquema de productos con los campos más usados por la UI
const productsSchema = new Schema(
  {
    id: { type: String },
    name: {
      // el nombre del producto es un string requerido
      type: String,
      required: true,
    },
    description: {
      // la descripción del producto es un string opcional
      type: String,
    },
    category: { type: String },
    status: {
      type: String,
      enum: ["top", "stable", "low"],
      default: "stable",
      required: true,
    },
    sku: { type: String },
    supplier: { type: String },
    price: {
      // el precio del producto es un Decimal128 requerido
      type: Schema.Types.Decimal128,
      required: true,
    },
    stock: {
      // el stock del producto es un número requerido
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // agrega campos createdAt y updatedAt automáticamente
    strict: false, // permite guardar campos adicionales que no estén definidos en el esquema (opcional)
  },
);

export default model("products", productsSchema); // exportamos el modelo de productos para usarlo en los controladores y rutas
