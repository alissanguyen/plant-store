import * as React from 'react';
import ReferPageThumb from "../assets/planthome.png"

interface Props {

}

// TODO: Implement this
const ReferPage: React.FC<Props> = ({ }) => {
    return (
        <div>
            <img src={ReferPageThumb} className="w-full object-cover" alt="" />
            <div className='absolute right-[10%] top-[20%] flex flex-col items-center bg-green-50 px-20 py-12 text-emerald-900 gap-2 max-w-[700px] min-h-[400px] rounded-xl shadow-sm'>
                <span className="font-semibold text-4xl mb-3">Share some plant obsession</span>
                <span className="text-xl mb-3">Give your friend $10 towards their first purchase, and get $10 off your next order when they purchase.</span>
                <span className="text-lg">Enter your email to start sharing with friends:</span>
                <div className="flex flex-row items-center gap-2">
                    <input placeholder='Your email here..' className="px-4 py-2 text-lg rounded-2xl" />
                    <button className="uppercase bg-teal-800 hover:bg-teal-600 ease-in-out duration-100 text-white px-4 py-2 rounded-xl">Start sharing</button>
                </div>

                <div className="flex flex-row gap-2 items-center mt-1">
                    {/* <input type="checkbox" defaultChecked></input> */}
                    <input type="checkbox" id="switch" />
                    <label htmlFor="switch">Toggle</label>
                    <span>Sign up for our emails</span>
                </div>

            </div>
        </div>
    )
}
export default ReferPage
