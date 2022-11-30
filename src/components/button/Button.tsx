import React from 'react'
import styles from './Button.module.scss'

type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <div className={styles.button}>
      <div className={styles.button__inner}>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  )
}

export default Button
