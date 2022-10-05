import * as React from 'react';
import Products from '../components/Products/Products';

interface Props {

}

const ShopPage: React.FC<Props> = ({ }) => {
    return (
        <div> <Products /> </div>
    )
}

export default ShopPage