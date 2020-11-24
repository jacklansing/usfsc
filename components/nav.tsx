/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import AnimatedLink from './utils/animated-link';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <AnimatedLink
    href={href}
    sx={{
      px: 2,
      py: 1,
      mx: 3,
      fontSize: [null, null, 3, 3, 3, 4, 4],
      textDecoration: 'none',
      letterSpacing: '1px',
      height: 'fit-content',
      fontWeight: 'bold',
      position: 'relative',
      cursor: 'pointer',
      padding: 1,
    }}
  >
    {children}
  </AnimatedLink>
);

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <nav
      sx={{
        listStyle: 'none',
        display: 'flex',
        flexFlow: 'row no-wrap',
        justifyContent: 'center',
        marginRight: 1,
        mt: 4,
        textTransform: 'uppercase',
      }}
    >
      <NavLink href="/news">Home</NavLink>
      <NavLink href="/membership">Membership</NavLink>
    </nav>
  );
};

export default Nav;
