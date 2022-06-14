import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    color: black;

    @media screen and (max-width: 1000px){
        height: 1000px;
    }
    @media screen and (max-width: 768px){
        height: 1100px;
    }

`

export const ServicesWrapper = styled.div`
    margin: 0 0;
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 1Opx;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    width: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 1000px){
        width: 360px;
    }

    @media screen and (max-width: 1000px){
        width: 350px;
    }
`

export const ServicesIcon = styled.img`
    margin-top: 20px;
    height: 150px;
    width: 400px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 2rem;
    
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 80%;
`
