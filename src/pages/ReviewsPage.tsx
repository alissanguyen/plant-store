import * as React from 'react';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import { reviews } from '../reviews';

interface Props {

}

const ReviewsPage: React.FC<Props> = ({ }) => {
    return (
        <div className="px-[10%] my-12 custom:my-20">
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl">What Out Customers Say ♥</span>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 sm:mt-12">
                {reviews.map((review) => <ReviewCard review={review} />)}
            </div>
        </div>
    )
}

export default ReviewsPage