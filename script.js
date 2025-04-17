// 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let amount = 0;
// let sum = 0;
// let arr = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0) {
//     amount++;
//   } else {
//     sum += nums[i];
//   }
// }
// arr.push(amount);
// arr.push(sum);
// console.log(arr, "amount of nums > 0 & sum of nums < 0");

// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// const doubleArr = nums.map((el) => el * 2).filter((el) => el % 3 === 0);

// console.log(doubleArr, "double numbers that are /3");

// 3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7

// const nums = [19, 5, 42, 2, 77];

// function Sum(nums) {
//   let smallest = Math.min(...nums);
//   nums.splice(smallest);
//   let secSmallest = Math.min(...nums);
//   console.log(smallest + secSmallest, "sum of smallest ones");
// }

// Sum(nums);

// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// let arr3 = [];

// function getLargerNumbers(arr1, arr2, arr3) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       arr3.push(arr1[i]);
//     } else {
//       arr3.push(arr2[i]);
//     }
//   }
//   console.log(arr3, "biggests");
// }
// getLargerNumbers(arr1, arr2, arr3);

//5)
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
// * Get an array of all names
// let namesArr = [];
// for (let i = 0; i < characters.length; i++) {
//   namesArr.push(characters[i].name);
// }
// console.log(namesArr, "names");

// *  Get an array of all first names
// let FirstnamesArr = [];
// for (let i = 0; i < characters.length; i++) {
//   FirstnamesArr.push(characters[i].name.split(" ")[0]);
// }
// console.log(FirstnamesArr, "First names");
// * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
// {blue: 2, brown: 1, yellow: 1}
// როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.

// const grouped = characters.reduce((tot, curr) => {
//   const eyecolor = curr.eye_color;
//   if (!tot[eyecolor]) {
//     tot[eyecolor] = 0;
//   }
//   tot[eyecolor] += 1;
//   return tot;
// }, {});

// console.log(grouped, "group");

// 6)
const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "Tenet", year: 2020, rating: 7.5 },
  { title: "Dunkirk", year: 2017, rating: 7.9 },
];
// * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
// const filteredArr = movies.filter((el) => el.rating > 8);
// console.log(filteredArr, "rating > 8");

// * ამოიღეთ მხოლოდ სახელები
// const namesArr = [];
// for (let i = 0; i < movies.length; i++) {
//   namesArr.push(movies[i].title);
// }
// console.log(namesArr, "names");

// * დაალაგეთ ეს სახელები ანბანის მიხედვით\
// const namesArr = [];

// for (let i = 0; i < movies.length; i++) {
//   namesArr.push(movies[i].title);
// }

// console.log(namesArr.sort(), "names");

// 7)
const students = [
  { name: "Lia", scores: [90, 85, 100] },
  { name: "Tom", scores: [70, 60, 75] },
  { name: "Mia", scores: [88, 92, 95] },
];
// * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.
//1
// const newArr2 = students
//   .map((el) => {
//     let some = 0;
//     for (let i = 0; i < el.scores.length; i++) {
//       some += el.scores[i];
//     }
//     el.average = Math.round(some / el.scores.length);
//     return el;
//   })
//   .filter((el) => el.average > 85);
// console.log(newArr2, "B+ students");

//2
// const newArr2 = students
//   .map((student) => {
//     const average = Math.round(
//       student.scores.reduce((tot, cur) => tot + cur, 0) / student.scores.length
//     );
//     return { ...student, average };
//   })
//   .filter((el) => el.average > 85);
// console.log(newArr2, "B+ students");

// 8)
const employees = {
  alice: { department: "HR", active: true },
  bob: { department: "Engineering", active: false },
  charlie: { department: "Engineering", active: true },
};
// * გადაუარეთ თითოეულ ობიექტს Object.entries მეთოდით, დაითვალეთ რამდენი აქტიური იუზერია თითოეულ დეპარტამენტში და დააბრუნეთ შემდეგი ობიექტი:
// { HR: 1, Engineering: 1 }
// let newAr = {};

// for ([key, value] of Object.entries(employees)) {
//   if (!newAr[value.department]) {
//     newAr[value.department] = 0;
//   }
//   if (value.active != false) {
//     newAr[value.department] += 1;
//   }
// }
// console.log(newAr, "active users");
