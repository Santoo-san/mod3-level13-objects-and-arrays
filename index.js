console.log("Hallo Winc Academy studenten");

//arrays youtube content
/* let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[3] = 5;
console.log(selectedColors);
console.log(selectedColors.length); */

//Opdracht deel 1 objecten
console.log("Opdracht 1_____________________");
const person = { name: "Hans", age: 38 };

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
person.evaluations = [5, 7, 9];
console.log(person);

//Opdracht deel 2 arrays
console.log("Opdracht 2_____________________");
let colors = [];
console.log(colors);

colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);

let newLength = colors.push("geel");
console.log(colors);
colors[4] = 5;
colors.push("test");
console.log(colors);
let textObject = { greeting: "hi ik ben een object" };
colors.push(textObject);
console.log(colors);
//log alleen de begroeting
console.log("alleen de begroeting:");
console.log(colors[colors.length - 1]);

//deel 3
const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts",
    },
  },
  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits",
    },
  },
  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food",
    },
  },
];
console.log(
  "Opdracht DEEL 3_______________________________________________________"
);
console.log("herkomst kat 1:", catBreeds[0].origin);
console.log("laatste kattenras:", catBreeds[catBreeds.length - 1].name);
console.log("energie eerste kat:", catBreeds[0].energy_level);
console.log("temperament 2e kat:", catBreeds[1].temperament[0]);
console.log(
  "temperament 3e kat",
  catBreeds[2].temperament[catBreeds[2].temperament.length - 1]
);
console.log("favo food:", catBreeds[2].food.favourite_food);
