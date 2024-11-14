//1. Json => stringify , parse

const student = {
    name: "salib Khan",
    age: 32,
    movies: ['king khan' , 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student); //Normal javaScript ke JSON.stringify JSON eh convert kora
console.log(student);
console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);//json to javaScript conversion

console.log(studentObj);


//2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(date))


//keys , values 
const keys = Object.keys(student);
const values = Object.values(student);

//for 
const numbers = [23 , 54 ,67 ,87 , 23 , 45];
numbers.forEach(num => console.log(num));
numbers.map (num => num*2);

//for of on array like object
// loop on an object using for in

// add or remove of an array


const products = [
    {name : 'laptop' , price : 32000 , brand : 'leneove' , color : 'silver'},

    {name : 'phone' , price : 7000 , brand : 'HTC' , color : 'golden'},

    {name : 'watch' , price : 3200 , brand : 'casio' , color : 'yellow'},

    {name : 'sunglass' , price : 32000 , brand : 'ribon' , color : 'black'},

    {name : 'camera' , price : 32000 , brand : 'canon' , color : 'gray'},

];



const newProduct = {name : 'webcam' , price: 700 , brand: 'nikon' };


//copy products array and then add newProduct
const newProducts = [...products , newProduct];


//create a new array without one specific item
//remove phone menas create a new array without 

const remaining = products.filter(product => product.name !== 'phone');

console.log(remaining);



