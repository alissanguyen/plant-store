import * as React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories/Categories';
import Product from '../components/Product/Product';
import SortByMenu from '../components/SortByMenu/SortByMenu';
import { commerce } from '../lib/commerse';
import { ProductInfo } from '../types';
import { dataFormatterMultiple } from '../utils';

interface Props {
    onCartChange: React.Dispatch<React.SetStateAction<number>>;
    cartItemNumber: number;
}

const ShopPage: React.FC<Props> = (props) => {
    // TODO: Add custom type instead of `any`
    const [products, setProducts] = React.useState<any>()


    const fetchProducts = () => {
        commerce.products.list().then((products: any) => {
            console.log(products.data)
            const formattedData = dataFormatterMultiple(products.data)
            setProducts(formattedData)
        }).catch((error: Error) => {
            console.log('There was an error fetching the products', error)
        });
    }

    const handleAddToCart = async (productId: string, quantity: number) => {
        const item = await commerce.cart.add(productId, quantity)
        props.onCartChange(item.cart)
    }
    React.useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className='px-[10%] my-12 custom:my-20 flex flex-col'>
            <div className="flex flex-row items-center">
                <span className="font-semibold text-4xl sm:text-6xl md:text-7xl mb-10">Shop All Plants</span>
                <SortByMenu />
            </div>

            <div className="ProductsLayout grid grid-cols-5 m-auto gap-20">
                <Categories />
                <div className='ProductsGrid grid gap-6 col-span-4'>
                    {products ? (products.map((product: ProductInfo) =>

                        <Product product={product} addToCart={handleAddToCart} handleCartChange={props.onCartChange} cartItemNumber={props.cartItemNumber} />
                    )) : null}
                </div>

            </div>
        </div>
    )
}

export default ShopPage

