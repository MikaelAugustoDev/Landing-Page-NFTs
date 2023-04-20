import styled from "styled-components"
import Raposinha from "../../assets/raposinha.svg"
import HamburguerMenu from "../MenuHamburguer"

const Header = () => {

    return (

        <Headers>

            <DivLogo>

                <Logo>Rocket<Span>NFTs</Span></Logo>

            </DivLogo>

            <Nav>

                <Item>Comprar NFT</Item>
                <Item>Sobre</Item>
                <Item>FAQ</Item>

            </Nav>

            <DivButton>

                <Button><Img src={Raposinha} />Conectar Carteira</Button>

            </DivButton>

            <MenuHamburguer>

                <HamburguerMenu />

            </MenuHamburguer>

        </Headers>

    )

}

const MenuHamburguer = styled.div`
    width: 80%;
    height: 100%;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

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

const Item = styled.p`
    color: #fff;
    transition: 0.3s ease-in-out;

    :hover {
        color: #ff5b50;
        cursor: pointer;
    }
`

const Span = styled.span`
    color: #ff5b50;
`

const Logo = styled.h1`
    display: flex;
    gap: 5px;
`

const DivButton = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        display: none;
    }
`

const Nav = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
        display: none;
    }
`

const DivLogo = styled.div`
    color: #fff;
`

const Headers = styled.header`
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    @media (max-width: 320px) {
        padding: 0 20px;
    }
`

export { Header }