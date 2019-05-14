import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Slider from "components/Slider";

const DetailPage = ({ data }) => {
  const place = {
    ...data.airtable.data,
    images: data.airtable.data.images
      ? data.airtable.data.images.raw.map(raw => raw.thumbnails.full.url)
      : []
  };

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
    airtable(data: { Slug: { eq: $slug } }) {
      id
      data {
        name: Name
        slug: Slug
        city: City
        wifiSpeed: WiFi_Speed
        images: Images {
          raw {
            thumbnails {
              full {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
