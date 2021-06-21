import { configureStore } from '@reduxjs/toolkit'
import Search from '../slices/search'

export const store = configureStore({
    reducer : {
       search : Search ,
    },
})
