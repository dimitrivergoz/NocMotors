import React from 'react'
import Icon1 from '../../images/1.svg'
import Icon2 from '../../images/1.svg'
import Icon3 from '../../images/1.svg'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesP, ServicesIcon, ServicesCard} from './Services'
function Services() {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>H2</ServicesH2>
                    <ServicesP>P</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>H2 2</ServicesH2>
                    <ServicesP>P 2</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>H2 3</ServicesH2>
                    <ServicesP>P 3</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    </>
  )
}

export default Services