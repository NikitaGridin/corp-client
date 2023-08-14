import Link from "next/link"
import React from "react"
import styles from "./style.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={"/dashboard"}>Profile</Link>
            <Link href={"/news"}>News</Link>
        </header>
    )
}

export default Header
