const categoriesDomRef = document.querySelector('#categories');
const itemsDomRef = document.querySelectorAll('.item');

const getNumOfCategories = htmlCatgRef => {
  const htmlRef = htmlCatgRef.children.length;
  console.log(`В списке ${htmlRef} категории.`);
};

const getCatgInfo = htmlRef => {
  htmlRef.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const numOfElem = item.children[1].querySelectorAll('li').length;

    console.log(`Категория: ${categoryName}`);
    console.log(`Количество элементов: ${numOfElem}`);
  });
};

getNumOfCategories(categoriesDomRef);
getCatgInfo(itemsDomRef);
