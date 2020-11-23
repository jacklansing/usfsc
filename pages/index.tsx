/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../components/utils/meta';

interface Props {}

const Landing: React.FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <motion.main
      initial="initial"
      exit={{ opacity: 0 }}
      animate="animate"
      transition={{ delay: 0.2 }}
    >
      <Meta
        title="Welcome! | Uncle Sam Figure Skating Club"
        canonicalUrl="https://unclesamfsc.com/"
        ogUrl="https://unclesamfsc.com"
        ogTitle="Uncle Sam Figure Skating Club"
        desc="Uncle Sam Figure Skating Club is located in Troy, New York. Get updates on the club and renew your US Figure Skating Membership."
      />
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
            position: ['static', null, null, null, 'absolute'],
            p: [2, null, null, null, 'inherit'],
            top: ['2rem', null, null, null, null, null, '20%'],
            left: ['7rem', null, null, null, null, null, '20%'],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
            transition: 'all .2s ease',
          }}
        >
          <motion.img
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            src={'/unc-sam-logo.png'}
            alt="club logo"
            sx={{
              height: ['150px', null, '250px'],
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
              textAlign: ['center', null, null, null, 'left'],
            }}
          >
            Uncle Sam Figure Sakting Club is based in Troy, NY. Some more stuff
            should totally go here!
          </motion.p>
          <div
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              gap: [4, 4, 0],
              justifyContent: 'space-evenly',
              width: '100%',
            }}
          >
            <motion.div
              initial={{ x: -64, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <NextLink href={`/news`} passHref>
                <motion.a
                  whileHover={{ scale: 1.2, backgroundColor: '#000' }}
                  whileTap={{ scale: 0.8 }}
                  tabIndex={0}
                  sx={{
                    variant: 'text.landingButtonLink',
                    width: 'fit-content',
                  }}
                >
                  Latest News &rarr;
                </motion.a>
              </NextLink>
            </motion.div>
            <motion.div
              initial={{ x: 64, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <NextLink href={`/membership`} passHref>
                <motion.a
                  whileHover={{ scale: 1.2, backgroundColor: '#000' }}
                  whileTap={{ scale: 0.8 }}
                  tabIndex={0}
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
