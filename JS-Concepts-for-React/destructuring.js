//1. array destructuring
const numbers = [42,65];

const [x,y] = [42,65];

//const [x,y] = numbers;

function boxify (num1,num2){
    const nums = [num1 , num2];
    return nums;
}
const [first , second] = boxify(90,34);
//const [first , second] = [90 , 34];
//console.log(boxify(90,34));

const student = {
    name: "salib Khan",
    age: 32,
    movies: ['king khan' , 'Dhakar Mastan']
}

const [firstMovie , secondMovie] = student.movies;

//Object Desstructuring 

const {name , age}= {name : 'alu' , age: '14'};

// const {name , age}= {id:12 ,name : 'alu' , salary:32000,age: '14'};

const employee = {
    ide : 'VS Code',
    designation : 'developer',
    mechine : 'mac',
    languages : ['html' , 'css' , 'js'],
    specification: {
        height : 66,
        weight: 67,
        address: 'kumarKhali',
        drink : 'water',
        watch : {
            color : 'black',
            price : 500,
            brand: 'garmin',
        }
    }
}

const {machine , ide} = employee;
const {weight , address} = employee.specification;
const {brand} = employee.specification?.watch;

