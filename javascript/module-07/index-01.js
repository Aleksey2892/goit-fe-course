const getCategoriesInfo = () => {
  const categoriesRef = document.querySelector('#categories');
  const itemsRef = document.querySelectorAll('.item');

  const catgQuantity = categoriesRef.children.length;
  console.log(`В списке ${catgQuantity} категории.`);

  itemsRef.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const elemQuantity = item.children[1].querySelectorAll('li').length;

    console.log(`Категория: ${categoryName}`);
    console.log(`Количество элементов: ${elemQuantity}`);
  });
};

getCategoriesInfo();
