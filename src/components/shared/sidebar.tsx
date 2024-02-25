'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li
                    key={link.route}
                    className={cn(
                      'sidebar-nav_element group text-gray-700',
                      isActive && 'bg-purple-gradient text-white'
                    )}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={cn(isActive && 'brightness-200')}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li
                    key={link.route}
                    className={cn(
                      'sidebar-nav_element group text-gray-700',
                      isActive && 'bg-purple-gradient text-white'
                    )}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={cn(isActive && 'brightness-200')}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}
