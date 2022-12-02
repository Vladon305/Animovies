import React, { FC, ReactNode } from 'react'
import Button from '../../components/button/Button'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/index'
import styles from './Layout.module.scss'


type Props = {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

    const stuff = useSelector((state: RootState) => state.movie.buttons)
    return (
        <>
            <div className={styles.header}>
                {stuff.map(item => {
                    return (<Button link={item.link}>{item.title}</Button>)
                })}
            </div>


            {children}

            <div className={styles.footer}>
                <span>(C) 2022 NoBull cinema</span>
            </div>
        </>
    )
}

export default Layout