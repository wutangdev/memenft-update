/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Step One: Create MetaMask/Trustwallet wallet',
    contents: (
      <div>
        Create a MetaMask or Trustwallet Wallet using either a desktop computer or an iOS/Android mobile device. This will allow you to buy, sell, send, and receive $MNFT.
      </div>
    ),
  },
  {
    title: 'Step Two: Send BNB to your wallet',
    contents: (
      <div>
        You can buy BNB directly on MetaMask and Trustwallet, or transfer it to your MetaMask or Trustwallet Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the BEP-20 network when transferring BNB.
      </div>
    ),
  },
  {
    title: `Step Three: Swap BNB for $MNFT`,
    contents: (
      <div style={{textOverflow:'ellipsis', overflow:'hidden'}}>
        <a href="https://pancakeswap.finance/swap?outputCurrency=0x0bcbc5c3506fc10c30daf6fad17866e504ceea33">Click here</a> to head over to PancakeSwap or use this address 0x0BCbC5c3506fc10c30dAf6fAD17866E504cEea33 to select $MNFT. Set the slippage tolerance to 10% (sometimes it may be a bit more, depending on how much demand there is)
      </div>
    ),
  },
];
export default function HowToBuy() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader  style={{
          h2:{
          color: "white!important",
          },
          textShadow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',}}
          title="How do I buy $MNFT"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs}/>
        </Box>
      </Container>
    </Box>
  );
}
