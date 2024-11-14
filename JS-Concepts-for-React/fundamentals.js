// 1. How to declare a variable using let and const
const fatherName = 'Abul Kalam' ;
let season = 'winter' ;
season = 'winter' ;

//2. 6 basic condition > , < , === ,!== <-- not equal  , <= , >=
// multiple conditions :  দুইটা বা একাধিক কন্ডিশনকে যদি ফুলফিল করতে হয় তখন & condition use  করতে হয় ----> && ,  OR condition ------> || 

if(fatherName === 'abul Kalam' || season === 'rainy'){
    console.log('season name');

}
else if(fatherName === 'Abul Kalam'){
    console.log('True');

}

else{

}


// 3. array
// index , 
//length , push , 
const numbers = [89 , 35 , 98 , 12]
numbers[0] = 56;


//4.  loop

for (let i = 0; i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function 
function multiply(num1 , num2){
    const result = num1 * num2;
    return result;

}

const output = multiply(35 ,78);

//6.Object
// 3 way to access property by name
const student = {
    name: "salib Khan",
    age: 32,
    movies: ['king khan' , 'Dhakar Mastan']
}

const myVariable = 'age';



console.log(student.age); // direct by property
console.log(student['age'] ) // access via property name string
console.log(student[myVariable]); // access via property name i a variable