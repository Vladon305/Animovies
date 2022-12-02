import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


//описываем интерфейс нашего хранилища
export interface IState {
    buttons: string[]
}


//объявляем хранилище, в которое будем складывать и изменять все что нам нужно
const initialState: IState = {
    buttons: ['Home', 'Anime', 'Movies', 'Kill the Ads']
  }



//создаем модель того, как мы будем взаимодействовать с наших хранилищем с помощью встроенной функции createSlice
//первым параметром принимает в себя название, оно может быть любым
//вторым параметром принимает наше хранилище
//третим параметром набор инструкцый к хранилищу
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      doSmthing: (state, action: PayloadAction<number>) => {
      },
    },
  })


// отдельно экспортируем инструкции и сам файл
export const { doSmthing } = movieSlice.actions

export default movieSlice.reducer