import React from 'react';
import { Container } from '../Container';
import Logo from './Logo';
import { Search } from './Search';
import { UserMenu } from './UserMenu';

export function Navbar() {
  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm dark:bg-dark2">
      <div className="py-4 border-b dark:border-primary">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
}
