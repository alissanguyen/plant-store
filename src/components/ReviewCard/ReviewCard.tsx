import * as React from 'react';
import { ReviewInfo } from '../../types';
import PlantImage from "../../assets/reviewcardplant.svg"
interface Props {
    review: ReviewInfo
}

const ReviewCard: React.FC<Props> = (props) => {
    return (
        <div className="bg-white text-black shadow-md p-8 rounded-xl font-light flex flex-col justify-between relative text-base xl:text-lg">
            <div className="flex flex-col gap-2">
                <span >"{props.review.description}"</span>
                <div className="flex flex-row items-center gap-5">
                    <span className="font-bold">{props.review.buyer}</span>
                    {props.review.buyerUsername ? (<span className="text-gray-600 italic">{props.review.buyerUsername}</span>) : null}
                </div>
                <span className="flex flex-row items-center gap-5">{props.review.location}</span></div>
            <div className='z-10 flex flex-row items-center gap-5 mt-1'>
                <span>{props.review.time}</span>
                <span className="text-emerald-800 font-semibold italic">from {props.review.from}</span>
            </div>
            <img src={PlantImage} className="absolute ReviewCardPlant" alt='' />
        </div>
    )
}

export default ReviewCard