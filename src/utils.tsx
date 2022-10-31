import { CartItemData } from "./types";

export function handleProductAvailabilityDisplay(count: number) {
    if (count === 0) {
        return "SOLD OUT";
    }
    if (count === 1) {
        return "ONLY ONE LEFT";
    }
    if (count === 2) {
        return "SELLING FAST";
    } else {
        return null;
    }
}

export var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

function dataFormatterSingle(productData: any) {
    return {
        id: productData.id,
        name: productData.name,
        availability: productData.inventory.available,
        price: productData.price.raw,
        image: productData.image.url,
        status: productData.active,
        category: productData.categories.slug,
        description: productData.description,
        relatedProducts: productData.related_products
    };
}

export function dataFormatterMultiple(productDataArray: any[]) {
    return productDataArray.map((productData) =>
        dataFormatterSingle(productData)
    );
}

export function cartDataFormatter(cartDataRaw: any) {
    return {
        id: cartDataRaw.id,
        created: cartDataRaw.created,
        items: cartDataRaw.line_items, //This is an array that also needs to be cleaned up
        totalItems: cartDataRaw.total_items
    };
}

interface CartItemsDataRaw {
    id: string;
    price: {
        raw: number;
    };
    product_name: string;
    product_id: string;
    image: {
        url: string;
    };
    quantity: number;
    line_total: {
        raw: number;
    };
}

export function cartItemsDataFormatter(cartDataItemsArray: CartItemsDataRaw[]) {
    return cartDataItemsArray.map((item) => {
        return {
            id: item.id,
            image: item.image.url,
            price: item.price.raw,
            productId: item.product_id,
            productName: item.product_name,
            quantity: item.quantity,
            totalPrice: item.line_total.raw
        };
    });
}

export function calculateCartSubtotal(items: CartItemData[]) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].totalPrice;
    }
    return subtotal;
}

export function formatSingleProductRawData(rawProductData: any) {
    return {
        category: {
            id: rawProductData.categories.id,
            name: rawProductData.categories.name
        },
        description: rawProductData.description,
        id: rawProductData.id,
        image: rawProductData.image.url,
        inventory: rawProductData.inventory.available,
        name: rawProductData.name,
        price: rawProductData.price.raw,
        relatedProducts: rawProductData.related_products
    };
}
