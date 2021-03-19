import React from 'react';

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
 
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            DOM & Rey
          </SocialLogo>
          <WebsiteRights>ALL RIGHTS RESERVED DOM & Rey © 2021</WebsiteRights>  
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
