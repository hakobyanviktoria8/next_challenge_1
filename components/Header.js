import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
         Hello world!
        </h1>
        <div>
            <Link href="/">LOGO</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/follow">Follow</Link>
        </div>
        <div>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/get-started">Get started</Link>
        </div>
    </div>
  )
}

export default Header