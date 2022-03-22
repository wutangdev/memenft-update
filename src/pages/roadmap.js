import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Pricing from 'sections/roadmap-section';

export default function Buy() {
  return (
    <Layout>
      <SEO title="Startup Landing 010" />
      <Pricing />
    </Layout>
  );
}