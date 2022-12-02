import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


//описываем интерфейс нашего хранилища
interface IButton {
  title: string,
  link: string
}

export interface IState {
    buttons: IButton[],
}


//объявляем хранилище, в которое будем складывать и изменять все что нам нужно
const initialState: IState = {
    buttons: [{title: 'Home', link: '/'}, {title: 'Anime', link: '/anime'}, {title: 'Movies', link: '/movies'}, {title: 'Kill the ads', link: '/kill_the_ads'}],
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