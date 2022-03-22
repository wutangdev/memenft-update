/** @jsx jsx */
import { jsx, Box, Heading, Text, } from 'theme-ui';
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";


const PriceTable = ({ price, isMonthly }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard blur ${price.isRecommended ? 'recommended' : ''}`}
    >
      <Box sx={styles.header}>
        <Box className="priceHeader">
          <Heading as="h3" sx={styles.title}>
            {price.title}
          </Heading>
          <Text as="p" sx={styles.subtitle}>
            {price.subtitle}
          </Text>
        </Box>
        
      </Box>
      <Box as="ul" sx={styles.list}>
        {price?.features?.map((feat) => (
          <li key={feat.id} className={!feat.isAvailable ? 'unavailable' : ''}>
            {feat.isAvailable ? (
              <AiFillCheckCircle color="#207cca" size="1.5rem" />
            ) : (
              <AiFillCloseCircle color="#CED7E1" size="1.5rem" />
            )}
            <span>{feat.title}</span>
          </li>
        ))}
      </Box>

    </Box>
  );
};

export default PriceTable;

const styles = {
  priceTable: {  
    border: `1px solid #F3F4F5`,
    borderRadius: 10,
    position: 'relative',
    padding: ['30px 20px', null, null, '55px 20px', null],
    '&.recommended': {
      background: '#0C115A',
      background: '-webkit-radial-gradient(center, #0C115A, #302136)',
      background: '-moz-radial-gradient(center, #0C115A, #302136)',
      background: 'radial-gradient(ellipse at center, #0C115A, #302136)',
      borderColor: 'primary',
      borderWidth: '2.5px',
      color: 'text',
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
      },
    },
  },


  header: {
    display: 'flex',
    justifyContent: 'space-between',
    color:'white',
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.31,
    letterSpacing: '-0.55px',
    color:'white',
  },
  subtitle: {
    mt: '6px',
  },
  priceLabel: {},
  priceAmount: {
    color: 'primary',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: 1.39,
    textAlign: 'right',
    letterSpacing: 'heading',
  },
  recommended: {
    backgroundColor: 'secondary',
    minHeight: '31px',
    alignItems: 'center',
    display: 'inline-flex',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0 8px',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
    position: 'absolute',
    top: 17,
    left: [20, null, null, null, 40],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [35, null, null, 50],
    maxWidth: 340,
    li: {
      color:'white',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 16,
      lineHeight: 1.62,
      '+ li ': {
        mt: 30,
      },
      svg: {
        mr: '13px',
        mt: '5px',
      },
    },
    '.unavailable': {
      opacity: 0.5,
    },
  },
  button: {
    backgroundColor: '#FCF2E8',
    color: 'secondary',
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: [35, null, null, 70],
    ':hover': {
      backgroundColor: 'secondary',
      color: '#fff',
    },
  },
};
