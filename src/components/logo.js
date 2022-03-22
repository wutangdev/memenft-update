/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/favicon.png';
import logoWhite from 'assets/images/favicon.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="memenft logo"  sx={styles.logoImg}/>
    </Link>
  );
}

const styles = {
  logoImg:{
    maxHeight:'45px',
  },
  
};
