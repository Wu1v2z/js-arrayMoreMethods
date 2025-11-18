// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."

const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 }
];

function getProductsNotInPriceRange(products) {
  // 1. Фільтруємо: залишаємо товари з ціною < 100 АБО > 500
  const highLowProducts = products.filter(product => {
    return product.price < 100 || product.price > 500;
  });

  // 2. Трансформуємо (map): перетворюємо масив об'єктів на масив рядків (імен товарів)
  // Це виправляє помилку тесту, який очікує лише імена.
  const productNames = highLowProducts.map(product => product.name);

  return productNames;
}

console.log(getProductsNotInPriceRange(products));
module.exports = getProductsNotInPriceRange;