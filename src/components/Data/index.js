const products = [
  {
    id: 1,
    name: "Pottery",
    description: "Pottery",
    price: 350,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Marble",
    description: "Marble",
    price: 550,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Pottery",
    description: "Pottery",
    price: 350,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Marble",
    description: "Marble",
    price: 550,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Pottery",
    description: "Pottery",
    price: 350,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
    name: "Marble",
    description: "Marble",
    price: 550,
    gender: "women",
    type: "blouse",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
    name: "Pottery",
    description: "Pottery",
    price: 350,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "Marble",
    description: "Marble",
    price: 550,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Pottery",
    description: "Pottery",
    price: 350,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 550,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    gender: "women",
    type: "watch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    gender: "women",
    type: "necklace",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lVaZmqWKYl_gJTuL6DDeorqMsG-d03dwEA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 13.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrAeBeAlpkhAuMRk4Mw-HC8yJEAvPO7S8ZQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
];

export default products;
