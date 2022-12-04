import React from 'react'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  link: string
}

const Button = ({ children, link }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={link}>
        {children}
      </Link>
    </div>
  )
}

export default Button
