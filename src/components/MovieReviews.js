// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        {reviews.map((review) => (
        <div className='review'>{review.url}</div>
        ))}
    </div>
);

export default MovieReviews