import { Card } from 'semantic-ui-react'
import { Ratings } from '../Ratings';

export interface Props {
    image: string;
    header: string;
    meta: string;
    description: string
    price: number;
    maxRating: number;
    defaultRating: number;
}

export const Cards = (Props: Props) => {
    const { image, header, meta, description, price, maxRating, defaultRating } = Props

    const extra = (
        <a>
            <div style={{ textAlign: "center" }}>
                <Ratings maxRating={maxRating} defaultRating={defaultRating}></Ratings>
            </div>
            <div style={{ textAlign: "right" }}>
                <b style={{ fontSize: "20px" }}>{price} TL </b>
            </div>
        </a>
    );
    return (
        <div>
            <Card
                image={image}
                header={header}
                meta={meta}
                description={description}
                extra={extra}
            />
        </div>
    )
}
