import React from 'react';
import Logo from 'assets/rccgLogo.png';
import {
  StyledSection,
  StyledLogoContainer,
  StyledLogoTitle,
  Divider,
  StyledFooter,
  Content,
} from './AuthWrapper.styled';

const AuthWrapper = ({ children }) => (
  <StyledSection>
    <StyledLogoContainer>
      <img src={Logo} alt="logo" />
      <Divider />
      <StyledLogoTitle>
        <span>The Redeemed Christian Church of God</span>
        <span>Good Shepherd Pasture</span>
      </StyledLogoTitle>
    </StyledLogoContainer>
    <Content>{children}</Content>
    <StyledFooter>Powered By RCCGTGSP IT © 2020</StyledFooter>
  </StyledSection>
);

export default AuthWrapper;
