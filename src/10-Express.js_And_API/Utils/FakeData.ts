import { faker } from '@faker-js/faker';
import { IPruduct } from '../Interfaces';

export const generateFakeProduct  = () : IPruduct[] =>  {
    return Array.from({length: 25}, ( item, idx) => {
        return {
            id : idx + 1,
            title : faker.commerce.productName(),
            price : +faker.commerce.price({min : 100, max : 200}),
            description : faker.commerce.productDescription()
        }
    })
}