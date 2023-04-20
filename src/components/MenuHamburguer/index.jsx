import React, { useState } from 'react';
import styled from 'styled-components';
import Raposinha from "../../assets/raposinha.svg"

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <HamburguerIcon onClick={handleMenuClick} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburguerIcon>
      <MenuWrapper isOpen={isOpen}>
        <MenuItems>

            <Item>Comprar NFT</Item>
            <Item>Sobre</Item>
            <Item>FAQ</Item>
            <Button><Img src={Raposinha} />Conectar Carteira</Button>

        </MenuItems>
      </MenuWrapper>
    </>
  );
};

const Img = styled.img`
    width: 25px;
`

const Button = styled.button`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    color: #000;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    transition: 0.3s ease-in-out;

    :hover {
        cursor: pointer;
        transform: translate(0px, -5px);
        background-color: #ff5b50;
        color: #fff;
    }
`

const Item = styled.h2`
    font-size: 26px;
    font-weight: light;
    text-align: center;
    transition: 0.3s ease-in-out;
    color: #fff;

    :hover {
        transform: translate(0px, -5px)
    }
`

const HamburguerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 100;

    span {
      width: 100%;
      height: 3px;
      margin-bottom: 5px;
      background: #fff;
      transition: transform 0.3s, opacity 0.3s;
    }

    & span:first-child {
      transform: translateY(${props => (props.isOpen ? '8px' : '0')}) rotate(${props => (props.isOpen ? '45deg' : '0')});
    }

    & span:nth-child(2) {
      opacity: ${props => (props.isOpen ? '0' : '1')};
    }

    & span:last-child {
      transform: translateY(${props => (props.isOpen ? '-8px' : '0')}) rotate(${props => (props.isOpen ? '-45deg' : '0')});
    }
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 20;
  align-items: center;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  background: #000;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default HamburguerMenu;