import * as React from 'react';
import { ProductInfo } from '../../../types';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton"
import { formatter, handleProductAvailabilityDisplay } from '../../../utils';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"

interface Props {
    product: ProductInfo
}

const Product: React.FC<Props> = (props) => {
    return (
        <div className="ProductCard max-w-full shadow-md rounded-lg">
            <img className="CardMedia w-full h-80 bg-center rounded-t-lg object-cover" src={props.product.image} title={props.product.name} alt=""></img>
            <div>
                <div className="CardContent justify-between p-5 flex flex-col">
                    <span className="ProductName pb-2 text-2xl">{props.product.name}</span>
                    <span className="ProductPrice text-xl pb-2">{formatter.format(props.product.price)}</span>

                    <span>{handleProductAvailabilityDisplay(props.product.availability)}</span>
                </div>
            </div>
            <CardActions disableSpacing className="CardActions flex justify-end">
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </div>
    )
}

export default Product