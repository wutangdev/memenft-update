/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import {  FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";




export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">
              Copyright MemeNFT {new Date().getFullYear()} 
            </Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            <li>            
              <Link to="https://t.me/MemeNFTCom" target="_blank" variant="footer"><FaTelegram size={'2rem'} /></Link>
            </li>
            <li>
              <Link to="https://twitter.com/MemeNFTOfficial/" target="_blank" variant="footer"><FaTwitter size={'2rem'} /></Link>
            </li>
            <li>
              <Link to="https://discord.io/MemeNFTOfficial" target="_blank" variant="footer"><FaDiscord size={'2rem'} /></Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/c/MemeNFTOfficial" target="_blank" variant="footer"><FaYoutube size={'2rem'} /></Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/MemeNFTOfficial/" target="_blank" variant="footer"><FaFacebookF size={'2rem'} /></Link>
            </li>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {

  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: 'white',
      mt: ['18px', '18px', '7px'],
    },
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'white',
    },
  },
};
