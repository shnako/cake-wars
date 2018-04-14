import React from 'react';
import StarRatings from 'react-star-ratings';

const YumFactor = (props) => (
  <p>
    <StarRatings
      rating={Number(props.rating)}
      changeRating={props.onChange}
      starDimension='3em'
      starSpacing='0.75em'
      starHoverColor='plum'
      starRatedColor='plum'
    />
  </p>
);

export default YumFactor;