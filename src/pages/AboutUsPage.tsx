import * as React from 'react';
import AboutUsImage from "../assets/aboutus.png"
import PlantCircle from "../assets/headerplant.svg"

interface Props {

}

const AboutUsPage: React.FC<Props> = () => {
    return (
        <div className='px-[10%] my-12 custom:my-20'>
            <div className='grid xl:grid-cols-3 gap-10 mb-10 xl:mb-20'>
                <div className="flex flex-col gap-4 text-base md:text-xl font-light xl:col-span-2">
                    <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">About Us</span>
                    <span>I am an asian girl living in Seattle with a passion for plants. Started as a hobby and grew into an obsession, I have been collecting more than 200+ varieties of plants. I quickly got into the collectors' plants community and was blown away by the costs of those "rare plants".</span>
                    <span>I want to offer tropical plants at a more affordable price and I have been working on achieving my mission ever since. I, along with the help of my family, are committed to providing the best quality of plants at the best price possible, along with the best services.</span>
                    <span>We have shipped over 500 plants all around America. We pack each and every plant with love and care and all of them have arrived in perfect conditions.</span>
                    <span>We hope you find inspiration from this story and we hope to hear from you soon ♥</span>
                    <span>Love,</span>
                    <span>Alissa</span>
                </div>
                <img src={PlantCircle} alt='' className='hidden xl:flex xl:self-center'/>
            </div>
            <img src={AboutUsImage} alt="" className='rounded-2xl'></img>
        </div>
    )
}

export default AboutUsPage