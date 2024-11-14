
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";



const PriceOption = ({option}) => {

    const{name,price,features} = option;

    return (
        <div className="bg-blue-500 rounded-md p-4  text-white">
<h2 className="text-center">
    <span className="text-7xl font-extrabold">{price} </span>
    <span className="text-3xl">/month</span>
</h2>

<h4 className="text-5xl text-center my-8">{name}</h4>

<div className="pl-6">
{
    features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
}
</div>

<button className="mt-112 bg-green-300 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy Now</button>

        </div>
    );
};


PriceOption.propTypes = {
    option : PropTypes.object
}


export default PriceOption;