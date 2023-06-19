const products =
[
  {
    "id": 1,
    "name": "Vestido de baño Bodie sol y luna",
    "img": "../src/assets/img/vestido1.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 2,
    "name": "Vestido de baño Bodie Palmas",
    "img": "../src/assets/img/vestido2.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 3,
    "name": "Vestido de baño Bodie Júpiter",
    "img": "../src/assets/img/vestido3.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 4,
    "name": "Vestido de baño Bodie Rojo Fuego",
    "img": "../src/assets/img/vestido4.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 5,
    "name": "vestidodebañoBikiniGalaxia",
    "img": "../src/assets/img/vestido5.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 6,
    "name": "VestidodebañoBikiniReversible",
    "img": "../src/assets/img/vestido6.png",
    "category": "vestido_de_banio",
    "price": 35000,
    "stock": 1
  },
  {
    "id": 7,
    "name": "Bodie rayas",
    "img": "../src/assets/img/1algomasbodierayas.png",
    "category": "bodiesyalgomas",
    "price": 45000,
    "stock": 1
  },
    {
    "id": 8,
    "name": "Bodie rayas",
    "img": "../src/assets/img/2algomasfaldaflores.png",
    "category": "bodiesyalgomas",
    "price": 45000,
    "stock": 1
  }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}