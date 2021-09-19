import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { Cards } from '../../Cards';
import CourseDto from '../../../services/course/dto/courseDto';
import { useRootState } from '../../../stores/RootStateContext';

export const CourseList = () => {
    const { courseStore } = useRootState();
    const [courses, setCourses] = useState<CourseDto[]>([]);

    async function GetCourses() {
        let result = await courseStore.getAll();
        setCourses(result);
    }

    useEffect(() => {
        GetCourses();
    }, [])

    return (
        <div style={{ marginTop: "10px" }}>
            <h1>Kurslar</h1>
            <Grid style={{ marginTop: "10px" }}>
                <Grid.Row columns={5}>
                    {courses.map((course) => (
                        <Grid.Column>
                            <Cards
                                image={course.image}
                                header={course.name}
                                meta="Emre Can Ayar"
                                description={course.description}
                                price={course.price}
                                maxRating={5}
                                defaultRating={course.rating}
                            ></Cards>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}
