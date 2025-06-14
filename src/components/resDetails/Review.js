import React from 'react';

const Review = ({ name, date, review, rating }) => {
    return (
        <div className="flex flex-col shadow-lg p-4 items-start w-full sm:w-[350px] md:w-[450px] h-auto md:h-[240px] bg-white rounded-lg">
            <div className="flex items-center mb-2 w-full">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
                <div className="flex flex-col flex-grow">
                    <div className="text-sm font-medium">{name}</div>
                    <div className="text-xs text-gray-500">{date}</div>
                </div>
                <div className="text-xs ml-1 mt-2 md:mt-0">⭐{rating}</div>
            </div>
            <div className="flex-grow mt-2">
                <p className="text-sm">{review}</p>
            </div>
        </div>
    );
};

const Reviews = () => {
    const reviews = [
        {
            name: 'St Glx',
            date: '24th September, 2023',
            review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard-hot and satisfying',
            rating: '3.4',
        },
        {
            name: 'St Olx',
            date: '24th September, 2023',
            review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard-hot and satisfying',
            rating: '3.4',
        },
        {
            name: 'St Olx',
            date: '24th September, 2023',
            review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard-hot and satisfying',
            rating: '3.4',
        },
        // ... more reviews
    ];

    return (
        <div className="w-full mx-auto max-w-3xl p-4 md:p-8">
            <h2 className="text-xl font-medium mb-4">Customer Reviews</h2>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
                {reviews.map((review) => (
                    <Review key={review.name} {...review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
