import * as React from 'react';
import { ProductInfo } from '../../types';
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton"
import { handleProductAvailabilityDisplay } from '../../utils';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"

interface Props {
    product: ProductInfo
}

const Product: React.FC<Props> = (props) => {
    return (
        <Card className="ProductCard">
            <CardMedia className="CardMedia" image={props.product.image} title={props.product.name}></CardMedia>
            <CardContent>
                <div className="CardContent">
                    <Typography variant={"h5"} gutterBottom>
                        {props.product.name}
                    </Typography>
                    <Typography variant={"h5"}>
                        {props.product.price}
                    </Typography>
                    <Typography variant={"h3"} color="textSecondary">
                        {handleProductAvailabilityDisplay(props.product.availability)}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className="CardActions">
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product