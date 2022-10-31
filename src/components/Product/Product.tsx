import * as React from 'react';
import { ProductInfo } from '../../types';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton"
import { currencyFormatter, handleProductAvailabilityDisplay } from '../../utils';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"
import { Link } from 'react-router-dom';

interface Props {
    product: ProductInfo;
    addToCart: (productId: any, quantity: any) => Promise<void>;
    handleCartChange: React.Dispatch<React.SetStateAction<number>>
    cartItemNumber: number;
}

const Product: React.FC<Props> = (props) => {

    const productAvailability = handleProductAvailabilityDisplay(props.product.availability)

    const productIsSoldOut = props.product.availability === 0;
    return (
        <div className="ProductCard max-w-full font-light relative">
            <Link to={`/shop/${props.product.id}`}>
                <img className={`CardMedia ${productIsSoldOut ? 'SoldOut' : ''} w-full h-80 bg-center object-cover`} src={props.product.image} title={props.product.name} alt=""></img>

                {productAvailability ? (<span className="ProductCard__Availability absolute top-3 right-3 bg-gray-500 rounded-full px-3 py-1 text-white font-normal">{productAvailability}</span>) : null}
                <div>
                    <div className="CardContent justify-between py-5 flex flex-row">
                        <span className="ProductName pb-2 text-lg xl:text-xl font-semibold">{props.product.name}</span>
                        <span className="ProductPrice text-base xl:text-lg ml-10 pb-2">{currencyFormatter.format(props.product.price)}</span>
                    </div>
                </div></Link>
            <CardActions disableSpacing className="CardActions flex justify-end">
                <IconButton aria-label="Add to Cart" onClick={() => { props.addToCart(props.product.id, 1); props.handleCartChange(props.cartItemNumber + 1) }}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </div>
    )
}

export default Product