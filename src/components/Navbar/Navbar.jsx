import React from 'react'
import Link from 'next/link'
import  styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
        <Link href="/">Accueil</Link>
        <Link href="/listes">Listes</Link>
        <Link href="/isr">ISR</Link>
        <Link href="/BTC">BTC</Link>
        <Link href="/add">Add</Link>
        <Link href="/exercises">Exercises</Link>
    </nav>
  )
}
 