import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { commerce } from '../lib/commerse';
import { FormattedProductData } from '../types';
import { currencyFormatter, formatSingleProductRawData } from '../utils';

interface Props {

}

const ListingPage: React.FC<Props> = ({ }) => {
    const [product, setProduct] = React.useState<FormattedProductData | null>();
    const [count, setCount] = React.useState<number>(1);

    const { id } = useParams();

    const fetchProductData = async () => {
        const productDataRaw = await commerce.products.retrieve(id);
        const formattedData: FormattedProductData = formatSingleProductRawData(productDataRaw);
        setProduct(formattedData)
        console.log(product, "HI")
    }

    React.useEffect(() => { fetchProductData() }, [])

    function handleCountDecrement() {
            if (count === 0) {
                setCount(0)
            }
            else {
                setCount(count - 1)
            }
    }
    return (
        <div className='px-[10%] my-12 custom:my-20 flex flex-col'>
            {
                product ? (
                    <div className="grid grid-cols-2 gap-12 text-xl">
                        <img src={product.image} alt="" className="rounded-xl" />
                        <div className='flex flex-col gap-5'>
                            <span className="font-semibold text-3xl sm:text-5xl md:text-6xl mb-10">{product.name}</span>
                            <span dangerouslySetInnerHTML={{ __html: product.description }} className="flex flex-col gap-3"></span>

                            <div className='flex flex-row items-center mt-12 gap-2'>
                                <span>Price: </span>
                                <span className="text-2xl text-emerald-600">{currencyFormatter.format(product.price)}</span>
                            </div>

                            <div className="flex flex-row items-center gap-2">
                                <button className="Cart_QuantityChangeButton" onClick={(e) => { e.preventDefault(); handleCountDecrement() }}>
                                    <MinusIcon className="w-4 h-4" />
                                </button>
                                <input value={count} className="w-3"></input>
                                <button className="Cart_QuantityChangeButton" onClick={(e) => { e.preventDefault(); setCount((prev) => prev + 1) }}>
                                    <PlusIcon className="w-4 h-4" />
                                </button>
                            </div>


                            <button>Add to Cart</button>
                        </div>
                    </div>
                ) : (
                    <span>Failed to load product, please try again :(</span>
                )
            }
        </div>
    )
}

export default ListingPage