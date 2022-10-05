import * as React from 'react';
import Grid from "@mui/material/Grid"
import { products } from '../../data';
import Product from "./Product/Product"

interface Props {

}

const Products: React.FC<Props> = () => {
    return (
        <div className="pt-24 px-5 sm:px-10 md:px-20 grid gap-6 m-auto md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
            {products.map((product) => <Product product={product} />)}
        </div>
    )
}

export default Products