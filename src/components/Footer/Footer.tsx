import * as React from 'react';
import { Link } from 'react-router-dom';
import { InstagramLogo, DiscordLogo, Storefront } from "phosphor-react"

interface Props {

}

const Footer: React.FC<Props> = ({ }) => {
    return (
        <div className="Footer pt-10 px-[10%] w-full flex flex-col h-inherit text-lg">
            <div className="grid grid-cols-5 gap-10 font-light border-b-2 pb-5">
                <div className="flex flex-col col-span-2 gap-2 pr-32">
                    <span className="font-semibold text-xl">No spam here.</span>
                    <span>We would love to tell your about our restocks, promotions, giveaways, and plant care tips ♥♥</span>
                    <div className="Subscribe flex flex-row items-center w-full gap-2">
                        <input className="rounded-lg grow px-4 py-2" placeholder='Enter your email address'>
                        </input>
                        {/* TODO: Enable subscribing */}
                        <button className="bg-emerald-700 px-4 py-2 rounded-lg text-white hover:bg-emerald-800 ease-in duration-100">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-semibold text-xl">Helpful Links</span>
                    <Link to="/commonissues" className="hover:text-emerald-400">Common Issues</Link>
                    <Link to="/referafriend" className="hover:text-emerald-400">Refer a Friend</Link>
                    <Link to="/blog" className="hover:text-emerald-400">Plant Care Blog</Link>
                    <Link to="/contactus" className="hover:text-emerald-400">Contact Us</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-semibold text-xl">Compliance</span>
                    <Link to="/accessibility" className="hover:text-emerald-400">Accessibility Statement</Link>
                    <Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
                    <Link to="/termsofuse" className="hover:text-emerald-400">Terms of Use</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-semibold text-xl">Join our Discord community! <DiscordLogo size={30} className="inline-flex" /></span>
                    <span>Connect with our other plant lovers here on our discord.</span>
                    <span className="font-semibold text-xl">Check out our shop on other platforms!</span>
                    <div className="flex flex-row items-center gap-3"><a href="https://www.instagram.com" target={"_blank"} rel="noreferrer"><InstagramLogo size={32} className="hover:text-emerald-400"/></a>
                        <a href="blossm"><Storefront size={32} className="hover:text-emerald-400"/></a>
                    </div>
                </div>
            </div>
            <span className="flex flex-row items-center pt-2 pb-5 text-sm justify-between">
                <span>Alissa's Garden © 2022 All Rights Reserved</span>
                <span>Seattle, WA 98101, USA</span>
            </span>
        </div>
    )
}

export default Footer