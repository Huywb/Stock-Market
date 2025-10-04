import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import logo from '../public/icons/logo.svg'
import UserDropdownMenu from './UserDropdownMenu'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/">
          <Image src={logo} alt="Logo" width={140} height={32} className='h-8 w-auto cursor-pointer' />
        </Link>
        <nav className='hidden sm:block'>
          <NavItem />
        </nav>
        <UserDropdownMenu/>
      </div>
    </header>
  )
}

export default Header
