"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    return (
        <ul className="navigation">
            <li>
                <Link href="/signup" className={pathname === "/signup" ? "active" : ""}>Sign Up</Link>
            </li>
            <li>
                <Link href="/registration" className={pathname === "/registration" ? "active" : ""}>Login</Link>
            </li>
            <li>
                <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            </li>
            <li>
                <Link href="/dynamicroute/userlist/1" className={pathname === "/dynamicroute/userlist/1" ? "active" : ""}>User 1</Link>
            </li>
            <li>
                <Link href="/dynamicroute/userlist/2" className={pathname === "/dynamicroute/userlist/2" ? "active" : ""}>User 2</Link>
            </li>
            <li>
                <Link href="/route/about" className={pathname === "/route/about" ? "active" : ""}>About</Link>
            </li>
            <li>
                <Link href="/route/contact" className={pathname === "/route/contact" ? "active" : ""}>Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar