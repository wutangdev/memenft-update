import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Widgets from 'sections/widgets';
import Pricing from 'sections/roadmap-section';
import HowToBuy from 'sections/how-to-buy';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="MemeNFT" />
      <Banner />
      <Widgets />
      <HowToBuy />
      <Pricing />
    </Layout>
  );
}
