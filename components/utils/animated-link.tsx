/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  /**
   * href passed to next/link
   */
  href: string;
  /**
   * as prop passsed to next/link
   */
  hrefAsProp?: string;
  /**
   * theme-ui variant. pass 'none' to easily ditch the variant styling
   * (theme-ui will not complain about invalid variants)
   */
  variant?: string;
}

/**
 * A Next/Link component that uses framer-motion to animate scale on hover and click.
 * Automatically passes href to the anchor tag. Href and as props are provided to NextLink, while any other
 * props e.g. sx prop for styling are sent to the <motion.a> element.
 */
const AnimatedLink: React.FC<Props> = ({
  href,
  hrefAsProp,
  variant = 'text.postPreviewLink',
  children,
  ...props
}) => {
  return (
    <NextLink href={href} as={hrefAsProp ? hrefAsProp : href} passHref>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        {...props}
        sx={{
          variant: `${variant}`,
        }}
      >
        {children}
      </motion.a>
    </NextLink>
  );
};

export default AnimatedLink;
