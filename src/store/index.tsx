import { configureStore } from "@reduxjs/toolkit";
import movieSlice from './slice'


//создаем переменную, которая будет отвечать за хранилище, с помощью встроенной в redux toolkit(далее rtk) функции configureStore
//ConfigureStore принимает параметром объект, который состоит из списка reducer(редьюсер отвечает за то, какие операции мы выполняем с хранилищем) и необязательный параметр Middleware
//Redux thunk уже включен в RTK. Middleware отвечает за асинхронную обработку хранилища
const store = configureStore({
    reducer: {
        movie: movieSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store