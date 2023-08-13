import { useUserStore } from '@/context/user'
import Link from 'next/link'
import React from 'react'
import styles from "./style.module.css"

const Header = () => {
  const {auth} = useUserStore()
  return (
    <header className={styles.header}>
      {auth &&
      <>
        <Link href={'/dashboard'}>Profile</Link>
        <Link href={'/news'}>News</Link>
      </>
      }
    </header>
  )
}

export default Header