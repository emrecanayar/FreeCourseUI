/*eslint-disable */
import React, { useState, useEffect } from 'react'
import { Grid } from "semantic-ui-react";
import CategoryDto from '../../../services/category/dto/categoryDto';
import { useRootState } from '../../../stores/RootStateContext';
import { CategoryButtons } from "../CategoryButtons/index"


export const CategoryList = () => {
    const { categoryStore } = useRootState()
    const [categories, setCategories] = useState<CategoryDto[]>([])

    async function GetCategories() {
        let result = await categoryStore.getAll();
        setCategories(result);
    }

    useEffect(() => {
        GetCategories();
    }, [])


    return (
        <div style={{ marginTop: "10px" }}>
            <h1>Sizin için önerilen konular</h1>
            <Grid style={{ marginTop: "30px" }}>
                <Grid.Row columns={5}>
                    {categories.map((category) => (
                        <Grid.Column>
                            <CategoryButtons name={category.name} />
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}
