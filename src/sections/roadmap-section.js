/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import { rgba } from 'polished';

const monthly = [
    {
        id: 1,
        title: 'Phase 1',
        subtitle: 'Complete',        
        isRecommended: true,
        features: [
          {
            id: 1,
            isAvailable: true,
            title: 'Project Inception',
          },
          {
            id: 2,
            isAvailable: true,
            title: `Smart Contract Creation`,
          },
          {
            id: 3,
            isAvailable: true,
            title: `Tokenomic Development`,
          },
          {
            id: 4,
            isAvailable: true,
            title: `Initial Branding`,
          },
        ],
      },
      {
        id: 2,
        title: 'Phase 2',
        subtitle: 'Complete',        
        isRecommended: true,
        features: [
          {
            id: 1,
            isAvailable: true,
            title: 'Community Creation',
          },
          {
            id: 2,
            isAvailable: true,
            title: `MemeNFT Domain Secured`,
          },
          {
            id: 3,
            isAvailable: true,
            title: `First Phase Website Built`,
          },
          {
            id: 4,
            isAvailable: true,
            title: `Marketplace Developer hired`,
          },
          {
            id: 5,
            isAvailable: true,
            title: `Watchtower Audit Secured`,
          },
          {
            id: 6,
            isAvailable: true,
            title: `Solidity Audit Secured`,
          },
        ],
      },
      {
        id: 3,
        title: 'Phase 3',
        subtitle: 'Complete',        
        isRecommended: true,
        features: [
          {
            id: 1,
            isAvailable: true,
            title: 'Pre Launch Marketing',
          },
          {
            id: 2,
            isAvailable: true,
            title: `Minting Function added to Marketplace`,
          },
          {
            id: 3,
            isAvailable: true,
            title: `Wallet Integration added to Marketplace`,
          },
          {
            id: 4,
            isAvailable: true,
            title: `Website & Marketplace Security Measure installed`,
          },
        ],
      },
      {
        id: 4,
        title: 'Phase 4',       
        isRecommended: false,
        features: [
          {
            id: 1,
            isAvailable: true,
            title: 'DXSale Presale',
          },
          {
            id: 2,
            isAvailable: true,
            title: `Certik Application`,
          },
          {
            id: 3,
            isAvailable: true,
            title: `Public Offering and Launch on PCS`,
          },
          {
            id: 4,
            isAvailable: true,
            title: `First MNFT/MNFT Staking pool launched`,
          },
          {
            id: 5,
            isAvailable: false,
            title: `MemeNFT Marketplace goes Live to Public`,
          },
          {
            id: 6,
            isAvailable: false,
            title: `Marketplace Developer Contract Renewed for Further Utility`,
          },
        ],
      },
      {
        id: 5,   
        title: 'Phase 5',    
        isRecommended: false,
        features: [
          {
            id: 1,
            isAvailable: false,
            title: 'MemeNFT introduces Metaverse/Gaming NFT arm to Marketplace',
          },
          {
            id: 2,
            isAvailable: false,
            title: `Audit for Game Code Secured`,
          },
        ],
      },
      {
        id: 6,
        title: 'Phase 6',       
        isRecommended: false,
        features: [
          {
            id: 1,
            isAvailable: false,
            title: 'MemeNFT introduces Music/Audio NFT arm (Musilee) to Marketplace',
          },
          {
            id: 2,
            isAvailable: false,
            title: `MemeNFT Begins Development of Meme Universe NFT Playable Universe `,
          },
          {
            id: 3,
            isAvailable: false,
            title: `Game and Gallery`,
          },
          {
            id: 4,
            isAvailable: false,
            title: `MemeNFT pursues Token Listings on Major Exchanges`,
          },
        ],
      },
];


const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };
  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What's Coming"
        />
        <Grid sx={styles.priceWrapper}>
          {plan.pricingPlan.map((price, index) => (
            <PriceTable price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],  
    h2:{   
    textShadow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
    color:'white',    
    },
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${rgba('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px',
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(2,1fr)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
