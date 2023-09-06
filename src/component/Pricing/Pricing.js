import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features: [
            'awesome features',
            'Extra Features',
            'unnecessary features', 
            'will never use features'
        ]
    },
        { id: 2, name: 'Medium', price: 99.9 , features: [
            'Everything on free',
            'Extra Features',
            'unnecessary features', 
            'will never use features'
        ]},
        { id: 3, name: 'Premium', price: 19.99 , features: [
            'Everything on premium',
            'Extra Features',
            'unnecessary features', 
            'will never use features'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-200 text-white'>Best deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}

                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;