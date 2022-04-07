/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Button,
  Image as Img,
} from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import certik from 'assets/images/brands/certik.png';
import cmc from 'assets/images/brands/cmc.png';
import coingecko from 'assets/images/brands/coingecko.png';
import cryptocom from 'assets/images/brands/cryptocom.png';
import nord from 'assets/images/brands/nord.png';
import sf from 'assets/images/brands/sf.png';
import watchtower from 'assets/images/brands/watchtower.png';
import { Helmet } from 'react-helmet';
import { Link } from "gatsby";
import WatchtowerAudit from '../../public/static/MemeNFTwatchtowerAudit.pdf';
import CopyLinkComponent from "../components/clipboard/clipboard";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box id="home" as="section" variant="section.banner" sx={styles.bannerContainer}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            The go-to platform for all things NFT. 
            </Heading>
            <Box sx={styles.btnrow}>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x0bcbc5c3506fc10c30daf6fad17866e504ceea33" style={{textDecoration:'none'}}>
            <Button variant="primary" sx={styles.button}>
              Buy MNFT
            </Button></a>
            <a href="" style={{textDecoration:'none'}}>
            <Button variant="primary" sx={styles.button}>
              Shop NFTs
            </Button></a>
            </Box>
            <CopyLinkComponent />
            <Box sx={styles.clients}>
              <a target="_blank" href="https://www.certik.com/projects/memenft"><Img sx={styles.clientImg} src={certik} alt="certik" /></a>
              <a target="_blank" href="https://coinmarketcap.com/currencies/memenft/"><Img sx={styles.clientImg} src={cmc} alt="cmc" /></a>
              <a target="_blank" href="https://www.coingecko.com/en/coins/memenft"><Img sx={styles.clientImg} src={coingecko} alt="coingecko" /></a>
              <a target="_blank" href="https://crypto.com/price/memenft"><Img sx={styles.clientImg} src={cryptocom} alt="cryptocom" /></a>
              <a target="_blank" href="https://t.co/dRUAQe70rS"><Img sx={styles.clientImg} src={nord} alt="nord" /></a>
              <a target="_blank" href="https://solidity.finance/audits/MemeNFT/"><Img sx={styles.clientImg} src={sf} alt="sf" /></a>
              <Link rel="noreferrer"
                        href={WatchtowerAudit}
                        target="_blank"><Img sx={styles.clientImg} src={watchtower} alt="watchtower" /></Link>
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
          <iframe title='ChangeNowWidget' id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.1&backgroundColor=2B2B35&darkMode=true&from=bnbbsc&horizontal=false&lang=en-US&link_id=67c1d82da8cbc6&locales=true&logo=false&primaryColor=00C26F&to=mnft&toTheMoon=true' height= "370px"  width= "100%" frameBorder="none"></iframe>
            <Helmet>
            <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
            </Helmet>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  bannerContainer:{
    '@media screen and (max-width: 767px)':{
      margin:'auto',
      paddingTop:'30px',
      minHeight:'100vh',
    }
  },
  btnrow:{
    display: 'flex',
    alignItems: 'center',
    a: {
      maxWidth: ['100%', '100%', '100%', '100%'],
      '+ a': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
    '@media screen and (max-width: 767px)':{
      justifyContent:'center',
      textAlign:'center',
    }
  },
  clientImg:{
    borderRadius:"50px",
  },
  contentWrapper: {
    display: [null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, '0.9fr 1.1fr', 'repeat(2, 1fr)'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
    '@media screen and (max-width: 767px)':{
      justifyContent:'center',
      textAlign:'center',
      margin:'auto',
    }
  },
  content: {
    maxWidth: [507, 507, 507, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'white',
    textShadow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',

  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: 'flex',
    mt: [45, 45, 45, 25, 25],
    color: 'rgb(var(--text-color))',
    border: '2px double transparent',
    backgroundImage: 'linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192))',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    color:'white',
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    a: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ a': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    mt: ['30px', '30px', 0],
    mb: [0],
    img: {
      maxWidth: [null, null, null, null, '90%', '90%', '100%'],
    },
  },
};
