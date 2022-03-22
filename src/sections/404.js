/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Button,
  } from 'theme-ui';
  
  const NotFound = () => {
    return (
      <Box as="section" variant="section.notFound" sx={styles.bannerContainer}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.content}>
              <Heading sx={styles.title}>
                Looks like something went wrong :(              </Heading>
              <Box sx={styles.btnrow}>
              <a href="https://memenft.com/" style={{textDecoration:'none'}}>
              <Button variant="primary" sx={styles.button}>
                MNFT Home
              </Button></a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default NotFound;
  
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
  