import React from "react";
import { Button, Box, Text } from 'theme-ui';
import {  FaClipboardCheck } from "@react-icons/all-files/fa/FaClipboardCheck";

export default function CopyLink() {
    const CopyToClipboard = toCopy => {
        const el = document.createElement(`textarea`)
        el.value = toCopy
        el.setAttribute(`readonly`, ``)
        el.style.position = `absolute`
        el.style.left = `-9999px`
        document.body.appendChild(el)
        el.select('')
        document.execCommand(`copy`)
        document.body.removeChild(el)
      }
      
  return (
    <> 
    
                <Box  sx={styles.adressWrap}>
                  <Box  sx={styles.adressLeft}>
                    <Text  sx={styles.adressTxt}>0x0BCbC5c3506fc10c30dAf6fAD17866E504cEea33</Text>
                    <Box  sx={styles.adressHider}></Box>
                  </Box>
                        <Button  sx={styles.button}
                            onClick={() => {
                            CopyToClipboard('0x0BCbC5c3506fc10c30dAf6fAD17866E504cEea33')
                            }}
                        >
                            <FaClipboardCheck size={'2rem'} />
                        </Button>
                </Box>
            
    </>
  );

  
}

const styles = {
  adressWrap: {
      display: 'flex',
      marginTop: '40px',
      padding: '5px',
      msFlexpack: 'justify',
      justifyContent: 'space-between',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      borderRadius: '16px',
      backgroundColor: '#18171f',
    },
    
  button: {
    display: 'flex',
    color: 'rgb(var(--text-color))',
    border: '2px double transparent',
    backgroundImage: 'linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192))',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    color:'white',
  },
    
    adressLeft: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '388px',
    },
    
    adressTxt: {
      color: '#fff',
    },
    
    adressHider: {
      position: 'absolute',
      left: 'auto',
      top: '0%',
      right: '0%',
      bottom: '0%',
      width: '50%',
      backgroundImage: '-webkit-gradient(linear, right top, left top, color-stop(22%, #18171f), to(rgba(24, 23, 31, 0)))',
      backgroundImage: 'linear-gradient(270deg, #18171f 22%, rgba(24, 23, 31, 0))',
    },
  };

