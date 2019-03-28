import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Slider from "components/Slider";

const DetailPage = ({ data }) => {
  const place = data.companiesJson;

  return (
    <Layout size="large">
      <SEO title={`${place.name}, ${place.city} | Public Workspaces`} />
      <Slider images={place.images} />
      <h1>
        {place.name} - {place.city}
      </h1>
      <p>Further information follows</p>
    </Layout>
  );
};

export default DetailPage;

export const pageQuery = graphql`
  query PlaceDetailsBySlug($slug: String!) {
    companiesJson(slug: { eq: $slug }) {
      id
      name
      slug
      city
      isOpen
      wifiSpeed
      images
    }
  }
`;
