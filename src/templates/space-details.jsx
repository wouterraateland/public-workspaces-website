import React from "react";

import useSpaces from "hooks/useSpaces";

import IndexPage from "pages/index";
import DetailModal from "components/DetailModal";

const DetailPage = ({ pageContext }) => {
  const { allSpaces } = useSpaces();
  const space = allSpaces.find(({ slug }) => slug === pageContext.slug);

  return <IndexPage modal={<DetailModal space={space} />} />;
};

export default DetailPage;
