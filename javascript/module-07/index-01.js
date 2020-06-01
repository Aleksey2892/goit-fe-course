// refs
const categoriesDomRef = document.querySelector('#categories');
const itemsDomRef = document.querySelectorAll('.item');

// fn
const getNumOfCategories = domCatgRef => {
  const numOfCatg = domCatgRef.children.length;
  console.log(`В списке ${numOfCatg} категории.`);
};

const getCatgInfo = domRef => {
  domRef.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const numOfElem = item.children[1].querySelectorAll('li').length;

    console.log(`Категория: [${categoryName}].`);
    console.log(`Количество элементов: [${numOfElem}].`);
  });
};

// call fn
getNumOfCategories(categoriesDomRef);
getCatgInfo(itemsDomRef);
