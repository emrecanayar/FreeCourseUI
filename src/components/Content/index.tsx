import React from 'react'
import { Container, Breadcrumb } from "semantic-ui-react";
import { CategoryList } from './CategoryList';
import { CourseList } from './CourseList';
import "./index.less";

export const Content = () => {
    return (
        <div>
            <Container>
                <Breadcrumb style={{ marginTop: "10px" }}>
                    <Breadcrumb.Section link>Ana Sayfa</Breadcrumb.Section>
                    <Breadcrumb.Divider>/</Breadcrumb.Divider>
                    <Breadcrumb.Section link>Kurslar</Breadcrumb.Section>
                </Breadcrumb>
                <CourseList />
                <CategoryList/>
            </Container>
        </div>
    );
}
