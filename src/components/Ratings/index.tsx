import React from 'react'
import { Rating } from "semantic-ui-react";

export interface Props {
    maxRating: number;
    defaultRating: number
}

export const Ratings = (Props: Props) => {
    const { maxRating, defaultRating } = Props
    return (
        <div>
            <Rating
                maxRating={maxRating}
                defaultRating={defaultRating}
                icon="star"
                size="tiny"
            />
        </div>
    )
}
