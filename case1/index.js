var fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// no1
console.log("============no1=================");
fruits.forEach((element) => {
  console.log("Buah " + element.fruitName);
});

// no2
console.log("============no2=================");
let importFruit = [];
let localFruit = [];
let typeFruits = [];
let fruitNameData = [];
let fruitNameData2 = [];

fruits.forEach((element) => {
  typeFruits.push(element.fruitType);
});

let totalFruits = Array.from(new Set(typeFruits));
console.log("ada " + totalFruits.length + " wadah");

totalFruits.forEach((element) => {
  console.log("wadah " + element + " : ");
  console.log("(");
  fruits.forEach((elementData) => {
    if (elementData.fruitType == element) {
      console.log(elementData.fruitName);
    }
  });
  console.log(")");
});
// no3
console.log("============no3=================");
totalFruits.forEach((element) => {
  let countStock = 0;
  fruits.forEach((elementData) => {
    if (elementData.fruitType == element) {
      countStock += elementData.stock;
    }
  });
  console.log(element + " : " + countStock);
});

// no4
console.log("============no4=================");
console.log(
  "ada kejanggalan pada fruitId 5 karena terjadi duplikat, seharusnya Id tidak boleh sama"
);
