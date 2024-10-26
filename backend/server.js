const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importamos las funciones desde cart.js
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} = require('./cart');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Obtener el carrito
app.get('/cart', (req, res) => {
  res.json(getCart());
});

// Agregar al carrito
app.post('/cart', (req, res) => {
  const product = req.body;
  const newProduct = addToCart(product);
  res.status(201).json(newProduct);
});

// Limpiar el carrito
app.delete('/cart/clear', (req, res) => {
  clearCart();
  res.status(200).json({ message: 'Carrito limpiado' });
});

// Eliminar un producto del carrito
app.delete('/cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  if (isNaN(productId)) {
    return res.status(400).json({ message: 'ID de producto inválido' });
  }

  const result = removeFromCart(productId);
  if (result) {
    res.status(200).json({ message: 'Producto eliminado' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});