import * as React from 'react';
import "../src/styles.css"
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Navbar from './components/Navbar/Navbar';

interface Props {

}

const App: React.FC<Props> = () => {

    return (
        <div className="App h-[1400px] lg:h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </div>
    )
}

export default App