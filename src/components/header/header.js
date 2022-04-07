/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from 'theme-ui';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import menuItems from './header.data';
import { Link } from "gatsby";
import MemeNFTwhitepaper from '../../../public/static/MemeNFTwhitepaper.pdf';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
        <Box
          as="header"
          variant="layout.header"
          className={mobileMenu ? 'is-mobile-menu' : ''}
        >
          <Container>
            <Box sx={styles.headerInner}>
            <Logo isWhite={mobileMenu} sx={styles.logo} />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? 'navbar active' : 'navbar'}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? 'active' : ''}
                >
                  {menuItems.map(({ path, label }, i) => (
                    <li key={i}>
                      <NavLink
                        path={path}
                        label={label}
                        onClick={closeMobileMenu}
                      />
                    </li>
                  ))}
                  <Link sx={styles.linkOut} to=''
                        onClick={closeMobileMenu}
                      >Marketplace
                  </Link>
                  <Link sx={styles.linkOut} to='https://staking.memenft.com/'
                        onClick={closeMobileMenu}
                      >Staking
                  </Link>
                  {/* <Link sx={styles.linkOut} rel="noreferrer"
                        href={MemeNFTwhitepaper}
                        target="_blank" onClick={closeMobileMenu}>
                          Whitepaper
                  </Link> */}

                </Box>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose
                    onClick={closeMobileMenu}
                    color="white"
                    size="20px"
                  />
                </Button>
              ) : (
                <MenuButton aria-label="Toggle Menu" onClick={openMobileMenu} />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  
  logo:{
    maxHeight:'60px!important',
  },
  linkOut:{
    margin:'0 20px',
    textDecoration:'none',     
    color:'white',
  },
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        '::before': {
          boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
          height: '100%',
        },
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'black',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
          a: {
            color: 'white',
          },
        },
        a:{
          display: 'block',
          marginTop: 5,
          a: {
            color: 'white',
          },
        },
      },
    },
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: '0 20px',
    },
    '.active': {
      background: 'linear-gradient(to right, #30CFD0, #c43ad6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 900,
    },
  },
  explore: {
    display: ['block', 'block', 'block', 'block', 'none'],
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: '#fff',
    },
  },
};
