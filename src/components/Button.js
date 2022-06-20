import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll' 
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";

export const Button = styled(Link)`
  border-radius: 30px;
  background: hsl(0, 0%, 100%, 0.7);
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px':'12px 30px')};
  color: ${(dark) => (dark ? 'black':'#fff')};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Anek Malayalam', sans-serif;
  &:hover{
    transition: all 0.5 ease-in-out;
    background-color: white;
  }
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;

`