import * as React from 'react';
import Grid from "@mui/material/Grid"
import { products } from '../data';
import Product from "./product/Product"

interface Props {

}

const Products: React.FC<Props> = () => {
    return (
        <main>
            <Grid container justifyContent={"center"} spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products