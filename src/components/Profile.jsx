import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5em;
  border: 0.1em solid #0002;
  border-radius: ${props => props.theme.borderRadius};
`;

const AvatarContainer = styled.div`
  position: relative;
  overflow: hidden;

  width: 6em;
  height: 6em;
  margin: 0 auto 1em;
  border-radius: 100%;

  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const Profile = ({ avatar: Avatar, linkedIn, name }) => (
  <Container>
    <AvatarContainer>
      <Avatar />
    </AvatarContainer>
    <InfoContainer>
      <h2>{name}</h2>
      <a href={`https://linkedin.com/in/${linkedIn}`}>LinkedIn</a>
    </InfoContainer>
  </Container>
);

export default Profile;
