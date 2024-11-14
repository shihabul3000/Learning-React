const products = [
    {name : 'laptop' , price : 32000 , brand : 'leneove' , color : 'silver'},

    {name : 'phone' , price : 7000 , brand : 'leneove' , color : 'golden'},

    {name : 'watch' , price : 3200 , brand : 'casio' , color : 'yellow'},

    {name : 'sunglass' , price : 32000 , brand : 'ribon' , color : 'black'},

    {name : 'camera' , price : 32000 , brand : 'canon' , color : 'gray'},

];

const brands =  products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price)
console.log(prices);

//forEacth()

products.forEach(product => console.log(product.color))


products.forEach(prompt => {

})

//filter

const cheap = products.filter(product => product.price <=5000);
console.log(cheap);

const SpecificName = products.filter(product => product.name.includes('n'));
console.log(SpecificName);

//4. find

const special = products.find (product => product.name.includes('n'));

console.log(special);