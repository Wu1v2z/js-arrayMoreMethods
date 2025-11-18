// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
  // 1. Фільтруємо товари, які продані більше 5 разів
  const highSalesProducts = products.filter(product => product.sales > 5);

  // 2. Сортуємо відфільтровані товари за кількістю продажів (від більшого до меншого)
  // Це гарантує, що коли ми пізніше будемо отримувати унікальні категорії,
  // вони будуть у порядку, визначеному найпопулярнішими товарами.
  const sortedProducts = highSalesProducts.sort((a, b) => b.sales - a.sales);

  // 3. Залишаємо тільки категорії товарів за допомогою map
  const sortedCategories = sortedProducts.map(product => product.category);

  // 4. Залишаємо тільки унікальні категорії
  // Конструкція new Set створює об'єкт Set з унікальними елементами,
  // а потім Array.from(...) перетворює його назад у масив.
  const uniqueCategories = Array.from(new Set(sortedCategories));

  return uniqueCategories;
}


// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']
module.exports = getPopularCategories;