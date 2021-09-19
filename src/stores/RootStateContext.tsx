import React from 'react'
import CategoryStore from '../stores/category/categoryStore'
import CourseStore from './course/courseStore';

type RootStateContextValue = {
    categoryStore: CategoryStore
    courseStore: CourseStore
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)
const categoryStore = new CategoryStore();
const courseStore = new CourseStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <RootStateContext.Provider value={{ categoryStore, courseStore }}>
        {children}
    </RootStateContext.Provider>
}

export const useRootState = () => React.useContext(RootStateContext)