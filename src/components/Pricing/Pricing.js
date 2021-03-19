import React from 'react';
import { GrGroup } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>OUR GROUPS</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrGroup />
                </PricingCardIcon>
                <PricingCardPlan>Debug.Go</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>WMSU Clinic Monitoring and Inventory System</PricingCardFeature>
                  
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrGroup />
                </PricingCardIcon>
                <PricingCardPlan>Capstone Project</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Self Regulating Door Handle Sanitizer Using Germicidal UV Light</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrGroup />
                </PricingCardIcon>
                <PricingCardPlan>IT144</PricingCardPlan>    
                <PricingCardFeatures>
                  <PricingCardFeature>Portfolio Website</PricingCardFeature>
                </PricingCardFeatures>          
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
