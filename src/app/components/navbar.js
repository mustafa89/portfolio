'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel, Button } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`border-b border-[#232323] backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-[#0a0a0a]/70'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <span className="sr-only">Mustafa Mujahid</span>
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#5E6AD2] to-[#8A94E5] flex items-center justify-center mr-3 shadow-[0_0_10px_rgba(94,106,210,0.5)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(94,106,210,0.8)]">
              <span className="text-white font-bold">MM</span>
            </div>
            <span className="font-semibold text-[#ededed] transition-colors duration-200 group-hover:text-white">Mustafa Mujahid</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#a9a9a9] hover:text-[#ededed] hover:bg-[#232323] transition-colors duration-200 button-press"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          <Button
            as={Link}
            href="/about"
            className="text-sm text-[#a9a9a9] hover:text-[#ededed] transition-colors duration-200 button-press relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#5E6AD2] after:transition-all hover:after:w-full"
          >
            About Me
          </Button>
          <Button
            as={Link}
            href="/profile"
            className="text-sm text-[#a9a9a9] hover:text-[#ededed] transition-colors duration-200 button-press relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#5E6AD2] after:transition-all hover:after:w-full"
          >
            Profile
          </Button>
          <Button
            as={Link}
            href="/projects"
            className="text-sm text-[#a9a9a9] hover:text-[#ededed] transition-colors duration-200 button-press relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#5E6AD2] after:transition-all hover:after:w-full"
          >
            Projects
          </Button>
          
          <Button
            as={Link}
            href="/contact"
            className="ml-4 px-4 py-2 text-sm linear-button rounded-md"
          >
            Contact
          </Button>
        </div>
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a0a0a] px-6 py-6 sm:max-w-sm border-l border-[#232323] shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#5E6AD2] to-[#8A94E5] flex items-center justify-center mr-3 shadow-[0_0_10px_rgba(94,106,210,0.5)]">
                <span className="text-white font-bold">MM</span>
              </div>
              <span className="font-semibold text-[#ededed]">Mustafa Mujahid</span>
            </Link>
            <Button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-[#a9a9a9] hover:text-[#ededed] hover:bg-[#232323] transition-colors duration-200 button-press"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-1 py-6">
              <Button
                as={Link}
                href="/about"
                className="block w-full rounded-md px-3 py-2.5 text-left text-base font-medium text-[#ededed] hover:bg-[#232323] transition-colors duration-200 button-press"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Button>
              <Button
                as={Link}
                href="/profile"
                className="block w-full rounded-md px-3 py-2.5 text-left text-base font-medium text-[#ededed] hover:bg-[#232323] transition-colors duration-200 button-press"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Button>
              <Button
                as={Link}
                href="/projects"
                className="block w-full rounded-md px-3 py-2.5 text-left text-base font-medium text-[#ededed] hover:bg-[#232323] transition-colors duration-200 button-press"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Button>
              <Button
                as={Link}
                href="/contact"
                className="mt-6 block w-full rounded-md px-3 py-2.5 text-center text-base font-medium linear-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
