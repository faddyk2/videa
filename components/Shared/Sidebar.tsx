"use client";
import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/app/(root)/Constants'
import { link } from 'fs'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { Button } from '../ui/button';

const Sidebar = () => {

  const pathname = usePathname()
  return (
    <aside className="sidebar">
    <div className='flex size-full flex-col gap-4'>
     <Link href='/'>
     <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300' >Vid.ai</h1>
     </Link>
     <nav className='sidebar-nav'>
	 <SignedIn>
  <ul className='sidebar-nav_elements'>
  <li className='flex-center cursor-pointer  gap-2 p-4'>
		<UserButton afterSignOutUrl='/' showName/>
	</li>
    {navLinks.map(link => {
      const isActive = link.route === pathname; // Fixed variable name to be camelCase
      return (
        <li key={link.route} className={`sidebar-nav_element group  ${
			isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
		}`}>
			<Link className='sidebar-link' href={link.route}>
			<Image src = {link.icon} 
			alt= 'logo'
			width={20}
			height={20}
			className={`${isActive && 'brightness-200'}`}
			/>
			{link.label}
			</Link>
        </li>
      );
    })}
	


  </ul>
	</SignedIn>
	<SignedOut>
		<Button asChild className='bg-purple-gradient bg-cover'>
			<Link href='/sign-in'>Sign In</Link>
		</Button>
	</SignedOut>
        </nav>
    </div>

    </aside>

  )
}

export default Sidebar
