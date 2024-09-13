//1-vazifa
let obj = {};
console.log(obj.someProperty);  // undefined, ichida ma'lumot bo'lmagunicha
//2-vazifa
let name = prompt("Ismingizni kiriting:");
let age = prompt("yoshingizni kiriting:");

let user = {
    name: name,
    age: age
};

console.log(user);
//3-vazifa
let car = {
     brand: "Toyota",
     model: "Camry"
 };
 
 car.year = 2020;  // yangi qiymat qo'shish
 console.log(car.year);
//4-vazifa
let person = {
     name: "John",
     age: 25
 };
 
 person.name = "Alice";
 person.age = 30;
 
 console.log(person);
//5-vazifa
let book = {
     title: "Yolg'on Umidlar Dashti",
     author: "Tohir Malik"
 };
 
 let description = `${book.title} kitobi ${book.author} tomonidan yozilgan.`;
 console.log(description);
 //6-vazifa
 let smartphone = {
     brand: "Samsung",
     model: "Galaxy"
 };
 
 smartphone.price = 1000;
 console.log(smartphone);
// 7-vazifa
let person2 = {
     name: "Ali",
     age: age
 };
 
 if (person2.age >= 16) {
     console.log("Siz Astrumda o'qisangiz bo'ladi.");
 } else {
     console.log("Siz hali yoshsiz oldin maktabni tugatub oling.");
 }
//8-vazifa
let fruitObject = {
     fruit1: "Apple",
     fruit2: "Banana",
     fruit3: "Cherry"
 };
 
 let fruitsArray = [fruitObject.fruit1, fruitObject.fruit2, fruitObject.fruit3];
 console.log(fruitsArray);
 
