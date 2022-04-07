import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center p-5 justify-between max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
       <Link href="/">LOGO</Link>
       <div className="hidden md:inline-flex items-center space-x-5">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/follow">
              <a  className="bg-green-600 rounded-full px-5 py-2 text-white">
                Follow
              </a>
            </Link>
        </div>
      </div>
        <div className="flex items-center space-x-5 text-green-600">
        <Link href="/sign-in">Sign in</Link>
        <Link href="/get-started">
          <a className='border-green-600 px-4 py-1 border rounded-full'>Get started</a>
        </Link>
        </div>
    </div>
  )
}

export default Header