import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartData, CartItemData } from '../types';
import { calculateCartSubtotal, cartItemsDataFormatter, currencyFormatter } from '../utils';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface Props {
    cart: CartData | null;
    handleUpdateCartItem: (itemId: string, quantity: number) => Promise<void>;
    handleRemoveAllOfAnItem: (itemId: string) => Promise<void>;
    emptyCart: () => Promise<void>
}

const CartPage: React.FC<Props> = (props) => {

    const formattedCartItems: CartItemData[] = props.cart ? cartItemsDataFormatter(props.cart.items) : []

    const formattedCartSubtotal = currencyFormatter.format(calculateCartSubtotal(formattedCartItems))

    return (
        <div className="px-[10%] mt-12 custom:mt-20 mb-20 text-lg">
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl">Your Cart</span>
            {formattedCartItems.length === 0 ? (<EmptyCart />) : (
                <>
                    <FilledCart cartItems={formattedCartItems} cartSubtotal={formattedCartSubtotal} handleUpdateCartItem={props.handleUpdateCartItem} removeAll={props.handleRemoveAllOfAnItem} />
                    <button className='bg-teal-800 hover:bg-teal-600 ease-in-out duration-100 text-white px-4 py-2 rounded-lg uppercase' onClick={() => props.emptyCart()}>Empty Cart</button>
                </>)}

        </div>
    )
}

export default CartPage



const EmptyCart: React.FC = ({ }) => {
    return (
        <div className="flex flex-col m-auto w-max mt-16 gap-4">
            <span className="text-xl">You have no item in your cart :(</span>
            <Link to="/shop" className='m-auto'>
                <button className='bg-teal-800 hover:bg-teal-600 ease-in-out duration-100 text-white px-4 py-2 rounded-lg uppercase'>Start Shopping now</button></Link>
        </div>
    )
}

interface FilledCartProps {
    cartSubtotal: string;
    cartItems: CartItemData[] | [];
    handleUpdateCartItem: (itemId: string, quantity: number) => Promise<void>
    removeAll: (itemId: string) => Promise<void>;
}
const FilledCart: React.FC<FilledCartProps> = (props) => {
    return (
        <>
            <div className="grid grid-cols-7 gap-10">
                <ul className="list-none mt-12 col-span-5 flex flex-col gap-5">
                    {props.cartItems.map((item) =>
                        <li className="flex flex-row items-center gap-10 w-full">
                            <img src={item.image} alt="" className="w-44" />
                            <div className="grid grid-cols-6 items-center justify-between w-full">
                                <span className="font-semibold col-span-2">{item.productName}</span>
                                <span>PRICE: {currencyFormatter.format(item.price)}</span>
                                <div className="flex flex-row gap-2 items-center">
                                    <button className="Cart_QuantityChangeButton" onClick={(e) => { e.preventDefault(); props.handleUpdateCartItem(item.id, item.quantity - 1) }}>
                                        <MinusIcon className="w-4 h-4" />
                                    </button>
                                    <span>QTY: {item.quantity}</span>
                                    <button className="Cart_QuantityChangeButton" onClick={(e) => { e.preventDefault(); props.handleUpdateCartItem(item.id, item.quantity + 1) }}>
                                        <PlusIcon className="w-4 h-4" />
                                    </button>
                                </div>

                                <span>TOTAL: {currencyFormatter.format(item.totalPrice)}</span>
                                <button className="bg-red-400 px-3 py-1 w-fit rounded-md hover:bg-red-500 ease-in-out duration-75" onClick={() => { props.removeAll(item.id) }}>Remove All</button>
                            </div>

                        </li>)}
                </ul>

                <div className="Subtotal__Section flex flex-col gap-3 items-start w-full col-span-2 bg-white p-10 rounded-xl border-2 shadow-lg">
                    <span className="font-semibold text-2xl">SUBTOTAL: {props.cartSubtotal}</span>
                    <button className="uppercase bg-teal-800 hover:bg-teal-600 ease-in-out duration-100 text-white px-4 py-2 w-full">Proceed to checkout</button>

                    <span className="uppercase mt-2">Apply Promocode:</span>
                    <div className="flex flex-row">
                        <input placeholder='Enter your promo code..' className="px-4 py-2 rounded-2xl border-2"></input>
                        <button className="uppercase bg-teal-800 hover:bg-teal-600 ease-in-out duration-100 text-white px-4 py-2 w-full ml-1 rounded-xl">Apply</button>
                    </div>

                </div>
            </div>
        </>
    )
}