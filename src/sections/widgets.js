/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx, Box, Container,  } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import SectionHeader from 'components/section-heading';

// import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';


const Widgets = () => {
  const [windowDimension, setWindowDimension] = useState(null)
    
  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const isBig = windowDimension >= 640

  const data = useStaticQuery(graphql`
    query {
      art1: file(relativePath: { eq: "art1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      art2: file(relativePath: { eq: "art2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      art3: file(relativePath: { eq: "art3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" id="widgets" variant="section.widgets">

      
        <Container>
          <SectionHeader  style={{
            h2:{
            color: "white!important",
            },
            textShadow: 'rgb(255 255 255 / 75%) 0px 0px 80px, rgb(150 180 255 / 24%) 0px 0px 32px',}}
            title="MemeNFT is the world’s most accessible NFT platform for creators, HODLers, and normies alike. From JPEGs, to music, and of course, all-things-meme."
          />
        </Container>

      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
          <Image src={data.art1.childImageSharp.fluid} alt="widgets" style={{borderRadius:"10px"}} />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Learn & Grow"
              description="​​Find out all you need to be confident in the NFT and crypto landscape with no stones left unturned "
            />
          </Box>
        </Box>
        </Container>


        {isBig ? (
        <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="Create & Explore"
              description="​The digital world is an infinite canvas, where the only limit is your imagination. Discover the tools that make it easy. "
            />
          </Box>
          <Box sx={styles.rightContent}>
          <Image src={data.art2.childImageSharp.fluid} alt="widgets" style={{borderRadius:"10px"}} />
          </Box>
        </Box>
        </Container>
        ) : (
          <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
          <Image src={data.art2.childImageSharp.fluid} alt="widgets" style={{borderRadius:"10px"}} />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Create & Explore"
              description="​The digital world is an infinite canvas, where the only limit is your imagination. Discover the tools that make it easy. "
            />
          </Box>
        </Box>
        </Container>
        )}





        <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
          <Image src={data.art3.childImageSharp.fluid} alt="widgets" style={{borderRadius:"10px"}}/>
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Trade & Hodl"
              description="​​Trade and manage your portfolio of digital art, music, metaverse land, wearables, and more."
            />
          </Box>
        </Box>
        </Container>

    </Box>
  );
};

export default Widgets;

const styles = {
  rightContent:{
    '@media screen and (max-width: 767px)':{
      paddingTop:'20px',
    },
  },
  widgetRFlex:{
    display:'flex',
    '&.*':{flexGrow:'1',    
    },
    flexDirection:'column-reverse',
    gap: [0, 0, 0, 0, 10, 100],
    // display: ['flex', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',      
      textShadow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
      color:'white',
    },
    p:{
      color:'white'
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
