/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import NextLink from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <NextLink href={href}>
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
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
    </motion.a>
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
        mt: 4,
        textTransform: 'uppercase',
      }}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/membership">Membership</NavLink>
    </nav>
  );
};

export default Nav;
