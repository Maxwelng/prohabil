'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useHeaderViewModel } from './Header.viewmodel';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const { isScrolled, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useHeaderViewModel();

  const navLinks = [
    { href: '#inicio', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#areas', label: ' Áreas de atuação' },
    //{ href: '#', label: 'Parceiros' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div
            className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            <Image
              src={isScrolled ? '/logo-prohabil-dark.svg' : '/logo-prohabil-light.svg'}
              alt="ProHabil Logo"
              width={160}
              height={40}
              priority
            />
          </div>
        </Link>


        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors hover:text-gold ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`md:hidden bg-white border-t transform transition-all duration-300 ease-in-out
    ${mobileMenuOpen
            ? 'max-h-96 opacity-100 translate-y-0 pointer-events-auto'
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}
      `}
      >
        <ul className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`transition-all duration-300
          ${mobileMenuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'}
        `}
            >
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-gold font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}