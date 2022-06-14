import styled from "styled-components";


export const CarouselContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index:1;
  :before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
`;

export const CarouselContent =styled.div`
  z-index:3;
  max-width: 750px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-template-columns: 2fr 2fr;

`;


export const InfoContainer = styled.div`
    color:#fff;
    background: white;
    padding: 40px 0;    
    @media screen and (max-width: 768px){
        padding: 10px 0;
    }

`
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height:550px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 -22px;
    margin-top: -50px;
    justify-content: center;
    @media screen and (max-width: 1150px){
        margin: -10px 10px;
        height: 400px;
    }
    @media screen and (max-width: 768px){
        height: 420px;
    }

`

export const Logo = styled.img`
    color: white;
    background-image: url('../../images/logo.svg');
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(2fr, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) =>(imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart) ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` };
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 800px;
    grid-area: col1;
    padding-top: 15px;
    display: grid;
    @media screen and (max-width: 1150px){
        width: 530px;
    }
    @media screen and (max-width: 768px){
        width: 400px;
    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    width: 200px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px){
        grid-area: col2;
        width: 1fr;
    }
`

export const Column3 = styled.div`
    margin-bottom: 15px;
    width: 200px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: -10px;
    }
`

export const TopLine = styled.p`
    color: #696969;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 1150px){
        font-size: 20px;
        margin-bottom: 12px;
    }
    @media screen and (max-width: 768px){
        font-size: 12px;
        margin-bottom: 6px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 600;
    color: black;
    @media screen and (max-width: 1150px){
        font-size: 24px;
        margin-bottom: 12px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        margin-bottom: 6px;
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: black;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        grid-area: col3;
        margin-left: 200px;
        margin-top: -90px;
    }
`

export const ImgWrap = styled.div`
    max-width: auto;
    height: 100%;
`

export const Img = styled.img`
    width: 750px;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 4px;
    @media screen and (max-width: 750px){
        max-width: 500px;
    }
`

