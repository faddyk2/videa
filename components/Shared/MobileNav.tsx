"use client";
import React from 'react'
import { navLinks } from '@/app/(root)/Constants'
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';


const MobileNav = () => {
    const pathname = usePathname()
  return (     
        <header className="header">
        <Link href="/" className='flex items-center gap-2
        md:py-2'>
       <h1 className="text-2xl ont-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300">
       Vid.ai
        </h1>    
         </Link>
         <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'></UserButton>
                <Sheet>
  <SheetTrigger>
    <Image src="assets/icons/menu.svg"
    alt='menu'
    width={32}
    height={32}
    className='cursor-pointer'
    />
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <>
    <h1 className="text-2xl ont-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300">
       Vid.ai
    </h1>  
    <ul className='header-nav_elements'>
  <li className='flex-center cursor-pointer  gap-2 p-4'>
		<UserButton afterSignOutUrl='/' showName/>
	</li>
    {navLinks.map(link => {
      const isActive = link.route === pathname; // Fixed variable name to be camelCase
      return (
        <li key={link.route} 
        className={`${isActive && 'gradient-text'} padding-18 flex whitespace-nowrap
        text-dark-700
        `}
        >
			<Link className='sidebar-link' href={link.route}>
			<Image src = {link.icon} 
			alt= 'logo'
			width={20}
			height={20}
			/>
			{link.label}
			</Link>
        </li>
      );
    })}
	


  </ul>
    </>
  </SheetContent>
</Sheet>

            </SignedIn>
            <SignedOut>
		<Button asChild className='bg-purple-gradient bg-cover'>
			<Link href='/sign-in'>Sign In</Link>
		</Button>
	</SignedOut>
         </nav>
       </header>

  )
}

export default MobileNav