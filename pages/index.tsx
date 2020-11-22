/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface Props {}

const Landing: React.FC<Props> = ({}) => {
  const router = useRouter();

  const handleKeyboard = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    destination: string,
  ) => {
    if (e.key === 'Enter') {
      router.push(destination);
    }
  };

  return (
    <motion.main
      initial="initial"
      exit={{ opacity: 0 }}
      animate="animate"
      transition={{ delay: 0.2 }}
    >
      <div
        sx={{
          height: '100vh',
          backgroundImage: 'url("/landing-bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
          }}
        >
          <motion.img
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            src={'/unc-sam-logo.png'}
            alt="club logo"
            sx={{
              height: '250px',
            }}
          />
          <motion.h1
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            sx={{
              textAlign: 'center',
              variant: 'headings.h2',
              color: '#fff',
              textShadow: '6px 1px 1px #111fff11, 4px 3px 2px #053c52',
              margin: 0,
            }}
          >
            Fire up the zamboni!
          </motion.h1>
          <motion.p
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            sx={{
              color: 'white',
              fontSize: 3,
              maxWidth: '50ch',
            }}
          >
            Uncle Sam Figure Sakting Club is based in Troy, NY. Some more stuff
            should totally go here!
          </motion.p>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%',
            }}
          >
            <NextLink href={`/news`}>
              <motion.div
                initial={{ x: -64, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, backgroundColor: '#000' }}
                  whileTap={{ scale: 0.8 }}
                  onKeyDown={(e) => handleKeyboard(e, '/news')}
                  tabIndex={1}
                  sx={{
                    variant: 'text.landingButtonLink',
                    width: 'fit-content',
                  }}
                >
                  Latest News &rarr;
                </motion.a>
              </motion.div>
            </NextLink>
            <motion.div
              initial={{ x: 64, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <NextLink href={`/membership`}>
                <motion.a
                  whileHover={{ scale: 1.2, backgroundColor: '#000' }}
                  whileTap={{ scale: 0.8 }}
                  onKeyDown={(e) => handleKeyboard(e, '/membership')}
                  tabIndex={1}
                  sx={{
                    variant: 'text.landingButtonLink',
                    width: 'fit-content',
                  }}
                >
                  Membership &rarr;
                </motion.a>
              </NextLink>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Landing;
