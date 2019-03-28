import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Half from "components/Half";
import Profile from "components/Profile";
import Swaab from "components/Avatars/Swaab";
import Wouter from "components/Avatars/Wouter";

const AboutPage = () => (
  <Layout>
    <SEO title="About Public Workspaces" />
    <h1>Public Workspaces, a 24 hour story</h1>
    <p>
      From time to time we like to work from outside of home. Trying to find
      suitable places herefor online, wasn't successful. This had to change.
    </p>
    <p>
      One day we decided to spend 24 hours to build our own startup, that would
      tackle this problem... And here we are now. Public Workspaces is a
      collaboration between visitors and possibilities created by workspace
      owners.
    </p>
    <p>
      The main goal of Public Workspaces is to offer both workers a great
      experience working in public spaces and to offer public workspace the
      exposure they deserve.
    </p>
    <h2>Current status</h2>
    <p>
      At this moment, information on public spaces in Delft is becoming
      available. Next, we will launch in more cities in the Netherlands!
    </p>
    <p>Public workspaces is build by:</p>
    <Half>
      <Profile avatar={Swaab} linkedIn="swaab" name="Daniël Swaab" />
    </Half>
    <Half>
      <Profile
        avatar={Wouter}
        linkedIn="wouterraateland"
        name="Wouter Raateland"
      />
    </Half>
    <br />
    <br />
    <br />
    <br />
  </Layout>
);

export default AboutPage;
