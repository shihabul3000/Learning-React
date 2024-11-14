import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


   const priceOption = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "1 personal training session per month"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Unlimited group classes",
            "2 personal training sessions per month",
            "Free fitness assessment"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "24/7 gym access",
            "Locker facilities with towels",
            "Unlimited group classes",
            "5 personal training sessions per month",
            "Access to VIP lounge",
            "Free nutritional consultation"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": 109.99,
          "features": [
            "24/7 gym access",
            "Private locker room",
            "Unlimited group classes",
            "Unlimited personal training sessions",
            "Access to VIP lounge",
            "Monthly fitness assessment",
            "Weekly nutritional consultation",
            "Complimentary sports massage"
          ]
        }
      ]
      


    return (
        <div className="m-12">
            <h2 className="tex-5xl">Best Price in the town</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {

priceOption.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)

            }

            </div>
        </div>
    );
};

export default PriceOptions;