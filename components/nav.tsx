/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import NextLink from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <NextLink href={href}>
    <Link
      px={2}
      py={1}
      mx={2}
      sx={{
        fontSize: [null, null, 3, 3, 3, 4, 4],
        textDecoration: 'none',
        color: 'black',
        letterSpacing: '1px',
        height: 'fit-content',
        fontWeight: 'bold',
        position: 'relative',
        cursor: 'pointer',
        '::after': {
          content: [null, null, "''"],
          position: 'absolute',
          bottom: -2,
          left: 0,
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomWidth: '4px',
          borderColor: 'primary',
          opacity: 0,
          transition: 'all .222s ease',
        },
        ':hover': {
          '::after': {
            opacity: 1,
          },
        },
      }}
    >
      {children}
    </Link>
  </NextLink>
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
        marginTop: 4,
        opacity: 0.6,
        textTransform: 'uppercase',
      }}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/membership">Membership</NavLink>
    </nav>
  );
};

export default Nav;
