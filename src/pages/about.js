import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "../components/Image";
import Image2 from "../components/Image2";

const AboutPage = () => (
  <Layout>
    <SEO title="About Public Workspaces" />
    <h1>A 24 hour story</h1>
    <p>From time to time we like to work on projects from outside of home. Trying to find nice places online did not result in much success.
      This had to change.
      <br />
      <br />
      One day we decided to spend 24 hours to build our own startup, that would tackle this problem... And here we are now.
        Public Workspaces is a merge of visitors wishis and possibilities created by owners.
      The main goal is to offer both parties a platform where they can communicate to create understanding
      <br />      <br />
      <Image/>

      <a href="hhttps://www.linkedin.com/in/swaab/">LinkdIn Daniel</a>.

      <Image2/>
      <a href="https://www.linkedin.com/in/wouterraateland/">LinkedIn Wouter</a>.

      Currently only Delft is becoming available, but we hope to soon release more cities!
    </p>
  </Layout>
);

export default AboutPage;
