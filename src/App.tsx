import * as React from 'react';
import "../src/styles.css"
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Navbar from './components/Navbar/Navbar';
import AboutUsPage from './pages/AboutUsPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import Footer from './components/Footer/Footer';
import BlogPage from './pages/BlogPage';
import CommonIssuesPage from './pages/CommonIssuesPage';
import ReferPage from './pages/ReferPage';
import AccessibilityPage from './pages/AccessibilityPage';
import ContactUsPage from './pages/ContactUsPage';
import { commerce } from './lib/commerse';
import { cartDataFormatter } from './utils';
import { CartData, UpdateCartResponseSuccess } from './types';
import CartPage from './pages/CartPage';
import ListingPage from './pages/$id';
import CategoryPage from './pages/$category';

interface Props {

}

const App: React.FC<Props> = () => {
    const [cart, setCart] = React.useState<CartData | null>(null)

    const fetchCart = async () => {
        const cartDataRaw = await commerce.cart.retrieve()
        const formattedCartData: CartData = cartDataFormatter(cartDataRaw)
        setCart(formattedCartData)
    }

    React.useEffect(() => {
        fetchCart()
    }, []);

    const handleCartChange = (data: any) => {
        const formattedData = cartDataFormatter(data)
        setCart(formattedData)
    }


    const updateCartItem = async (itemId: string, quantity: number) => {
        const updatedCart: UpdateCartResponseSuccess = await commerce.cart.update(`${itemId}`, { quantity: quantity })
        setCart(cartDataFormatter(updatedCart.cart))
    }

    const handleRemoveAllFromCart = async (itemId: string) => {
        const updatedCart = await commerce.cart.remove(`${itemId}`)
        setCart(cartDataFormatter(updatedCart))
    }

    const handleEmptyCart = async () => {
        await commerce.cart.empty();


        setCart(prev => {
            if (!prev) {
                return prev;
            }

            return {
                ...prev,
                items: []
            }
        })
    }

    return (
        <div className="App">
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage onCartChange={handleCartChange} cartItemNumber={cart ? cart.totalItems : 0} />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/termsofuse" element={<TermsOfUsePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/commonissues" element={<CommonIssuesPage />} />
                <Route path="/referafriend" element={<ReferPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/cart/:id" element={<CartPage cart={cart} handleUpdateCartItem={updateCartItem} handleRemoveAllOfAnItem={handleRemoveAllFromCart} emptyCart={handleEmptyCart} />} />
                <Route path="/shop/:id" element={<ListingPage />} />
                <Route path="/shop/:category" element={<CategoryPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App