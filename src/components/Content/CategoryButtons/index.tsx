import React from 'react'
import { Button } from "semantic-ui-react";

export interface Props {
    name: string
}

export const CategoryButtons = (Props: Props) => {
    const { name } = Props
    return (
        <div>
            <Button animated="fade">
                <Button.Content visible>{name}</Button.Content>
                <Button.Content hidden>Aylık TRY 12.99</Button.Content>
            </Button>
        </div>
    )
}
