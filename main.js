// PRODUCTS ARRAY
const products = [
  {
    name: 'Aloe Vera',
    price: 150,
    category: 'indoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870739/Plantique/opt/ys1wguejzsao1f8se4ad_w8ta4e.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Golden Pothos',
    price: 75,
    category: 'indoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870730/Plantique/opt/golden_pothos_wljaai_qgjpsu.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Bamboo',
    price: 30,
    category: 'indoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870740/Plantique/opt/bamboo_dyxygv_ck9dqa.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Philodendrons Scandens',
    price: 200,
    category: 'indoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870734/Plantique/opt/Philodendrons_Scandens_qfvyjp_iciwcc.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Croton',
    price: 64,
    category: 'indoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870728/Plantique/opt/croton_f2dstn_kmudds.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Banyan Ficus',
    price: 450,
    category: 'outdoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870741/Plantique/opt/Banyan_Ficus_jsunpi_jxome7.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Monstera',
    price: 150,
    category: 'outdoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870733/Plantique/opt/monstera_opsosc_qovml1.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'Cyclamen',
    price: 150,
    category: 'outdoor',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870729/Plantique/opt/Cyclamen_c9gxpu_yikjsv.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'bougainvillea',
    price: 150,
    category: 'climbing plants',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870742/Plantique/opt/bougainvillea_x0wyoz_drqnl1.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'chinese jasmine',
    price: 150,
    category: 'climbing plants',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870728/Plantique/opt/chinese_jasmine_w76lkf_kjcsz0.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'honeysuckle',
    price: 150,
    category: 'climbing plants',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870731/Plantique/opt/honeysuckle_zqfvk7_kyjgnb.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'mangifera indica',
    price: 300,
    category: 'fruit trees',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870733/Plantique/opt/mangifera_indica_gdygjf_muicdu.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'fig',
    price: 70,
    category: 'fruit trees',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870729/Plantique/opt/fig_bmxnro_szlyy4.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  },
  {
    name: 'pomegranate',
    price: 250,
    category: 'fruit trees',
    imageUrl:
      'url(https://res.cloudinary.com/dgrhbsilh/image/upload/v1699870736/Plantique/opt/pomegranate_yww32e_itg0qp.jpg)',
    description:
      'This spiky, low-maintenance houseplant was the top-searched plant in nearly a dozen states, according to a recent survey by home furnishings site Joybird.'
  }
]

// PRODUCT FILE
const createProductFile = (object) => {
  let productDom = document.createElement('div')
  productDom.className = 'product'
  productDom.style.backgroundImage = object.imageUrl

  let glassBox = document.createElement('div')
  glassBox.className = 'glass-box'
  productDom.append(glassBox)

  let arrowProductIconContainer = document.createElement('div')
  arrowProductIconContainer.classList.add('arrow-icon-product-container')

  let arrowProductIconImage = document.createElement('img')
  arrowProductIconImage.src =
    'https://res.cloudinary.com/dgrhbsilh/image/upload/v1699351368/Plantique/arrow-down_d51tvb.png'

  glassBox.append(arrowProductIconContainer)
  arrowProductIconContainer.append(arrowProductIconImage)

  let productTextContainer = document.createElement('div')
  productTextContainer.classList.add('product-text')
  let productTitle = document.createElement('h4')
  productTitle.innerText = object.name
  productTitle.className = 'product-title'
  let productDescription = document.createElement('p')
  productDescription.innerText = object.description
  productDescription.className = 'product-description'
  let productPrice = document.createElement('p')
  productPrice.className = 'subtitles'
  productPrice.innerText = object.price + '€'

  productTextContainer.append(productTitle)
  productTextContainer.append(productDescription)
  productTextContainer.append(productPrice)
  glassBox.append(productTextContainer)

  return productDom
}

// NEW ARRIVALS PRODUCTS
const getNewArrivalsProducts = (arr) => {
  let newArrivalsProducts = []
  let arrLength = arr.length
  newArrivalsProducts = arr.slice(arrLength - 3, arrLength)
  return newArrivalsProducts
}
let newArrivalsProducts = getNewArrivalsProducts(products)
const printNewArrivalsProducts = (arr) => {
  const newArrivalsProductsDiv = document.querySelector(
    '#new-arrivals-products'
  )
  newArrivalsProducts.forEach((product) => {
    let newProduct = createProductFile(product)
    newArrivalsProductsDiv.append(newProduct)
  })
}
printNewArrivalsProducts(newArrivalsProducts)

// FILTERED PRODUCTS IN THE FILTERED SECTION
const filteredProductsArticle = document.querySelector('#filtered-products')
const testPrintProducts = (arr) => {
  arr.forEach((object) => {
    let productDom = createProductFile(object)
    filteredProductsArticle.append(productDom)
  })
}
testPrintProducts(products)

// GET CATEGORIES FROM PRODUCTS AND PRINT THEM
const getCategoryTemplate = (category) => {
  return `
<option value="${category}">${category}</option>
`
}
let categoriesArray = []
const getCategoriesFromProducts = (arr) => {
  arr.forEach((object) => {
    let objectCategory = object.category
    if (!categoriesArray.includes(objectCategory)) {
      categoriesArray.push(objectCategory)
    } else {
    }
  })
  return categoriesArray
}
getCategoriesFromProducts(products)
const categorySelector = document.querySelector('#category-selector')
const printCategoriesInSelect = (arr) => {
  arr.forEach((category) => {
    let newCategoryOption = getCategoryTemplate(category)
    categorySelector.innerHTML = categorySelector.innerHTML += newCategoryOption
  })
}
printCategoriesInSelect(categoriesArray)

