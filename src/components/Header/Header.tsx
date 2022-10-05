import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '../Navbar/Navbar';
import * as React from 'react';
import Thumb1 from "../../assets/headerthumb1.png";
import Thumb2 from "../../assets/headerthumb2.png";
import Thumb3 from "../../assets/headerthumb3.png";
import Thumb4 from "../../assets/headerthumb4.png";
import { Link } from 'react-router-dom';

const Header: React.FC = (props) => {
    return (
        <div className="flex flex-col custom:grid custom:grid-cols-2 px-[10%] gap-10 xl:gap-20 mt-12 custom:mt-20">
            <HeaderTextContent />
            <HeaderThumbs />
        </div>

    )
}

export default Header


const HeaderTextContent = () => {
    return (
        <div className="flex flex-col">
            <span className='text-7xl font-semibold mb-5 custom:mb-10'>Bring the new breeze to your house.</span>
            <span className='text-3xl lg:text-5xl font-light mb-5 custom:mb-10'>Our mission is to provide you great plants at great prices.</span>
            <CatalogButton />
            <div className='spacer-div h-10 custom:h-16'></div>
            <span className='text-base lg:text-xl italic leading-relaxed'>We have shipped more than 150+ plants across 50 states in America. We take pride in our services and commitment to the plant community.</span>
        </div>
    )
}

const CatalogButton = () => {
    return (
        <Link to="/shop" className='Catalog__Button flex flex-row items-center w-fit text-white px-8 py-3 lg:px-10 lg:py-4 text-lg lg:text-xl rounded-full'>
            <button className="pr-2">Browse the Catalog</button>
            <ArrowRightIcon className="text-white h-4 w-4 custom:h-6 custom:w-6" />
        </Link>
    )
}

const HeaderThumbs: React.FC = () => {
    return (
        <div className="Header__Thumbs flex flex-col gap-4 h-[600px]">
            <div className="grid grid-cols-3 gap-4">
                <img src={Thumb1} className="col-span-2 object-cover rounded-2xl" alt="" />
                <img src={Thumb3} className="rounded-2xl bg-cover object-cover h-full" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-4 ">

                <img src={Thumb2} className="rounded-2xl object-cover h-full" alt="" />
                <img src={Thumb4} className="col-span-2 rounded-2xl  object-cover" alt="" />
            </div>
        </div>
    )
}