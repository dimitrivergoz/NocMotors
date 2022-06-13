import React from 'react'
import {Button} from '../Button'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,Heading, Subtitle, BtnWrap, Img, ImgWrap, Logo} from './Info'; 

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap><Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 0:1}>{buttonLabel}</Button></BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />

                                <Logo />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    );
}

export default InfoSection