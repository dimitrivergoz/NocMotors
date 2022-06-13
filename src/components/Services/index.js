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
                    <ServicesH2>Locations</ServicesH2>
                    <ServicesP>Pour vos évenements professionnels</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Achat / Vente</ServicesH2>
                    <ServicesP>Nous vous aidons à trouver le véhicule de vos rêves</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reparation</ServicesH2>
                    <ServicesP>Avec ...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    </>
  )
}

export default Services