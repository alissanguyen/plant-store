export function handleProductAvailabilityDisplay(count: number) {
    if (count === 0) {
        return "SOLD OUT"
    }
    if (count === 1) {
        return "ONLY ONE LEFT"
    }
    if (count === 2) {
        return "SELLING FAST"
    }
    else {
        return null
    }
}

export var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
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
        relatedProducts: productData.related_products,
    }
}

export function dataFormatterMultiple(productDataArray: any[]) {
    return productDataArray.map((productData) => dataFormatterSingle(productData))
}