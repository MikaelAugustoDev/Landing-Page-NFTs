import styled from "styled-components"
import backgroundMain from "../../assets/background.png"
import { Header } from "../Header"
import ImageExplore from "../../assets/badge.svg"
import ImagemArt from "../../assets/group-avarts.png"
import ImgGalery1 from "../../assets/galeria-1.png"
import ImgGalery2 from "../../assets/galeria-2.png"
import ImgGalery3 from "../../assets/galeria-3.png"
import ImgGalery4 from "../../assets/galeria-4.png"
import ImgGalery5 from "../../assets/galeria-5.png"
import ImgGalery6 from "../../assets/galeria-6.png"
import ImgGalery7 from "../../assets/galeria-7.png"
import ImgGalery8 from "../../assets/galeria-8.png"

const MainPrincipal = () => {

    return (

        <Main>

            <Header />

            <DivTexts>

                <DivTextOne>

                    <TextP>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</TextP>

                    <ImagesArtists>

                        <img src={ImagemArt}/>

                        <p><Numbers>+10</Numbers>Artistas selecionados</p>

                    </ImagesArtists>

                </DivTextOne>

                <DivTextPrincipal>

                    <TextPrincipal>Descubra a verdadeira arte digital e colecione diversas <Span>NFTs</Span></TextPrincipal>

                </DivTextPrincipal>

                <DivImageRocket>

                    <img src={ImageExplore}/>

                </DivImageRocket>

            </DivTexts>


            <DivImages>

                <ImgGalery src={ImgGalery1}/>
                <ImgGalery src={ImgGalery2}/>
                <ImgGalery src={ImgGalery3}/>
                <ImgGalery src={ImgGalery4}/>
                <ImgGalery src={ImgGalery5}/>
                <ImgGalery src={ImgGalery6}/>
                <ImgGalery src={ImgGalery7}/>
                <ImgGalery src={ImgGalery8}/>

            </DivImages>

        </Main>

    )

}

const ImgGalery = styled.img`
    width: 300px;
    height: 190px;
    border: 1px solid #fff;
    border-radius: 3px
`

const DivImages = styled.div`
    max-width: 100%;
    min-height: 400px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 50px 0 ;
    justify-content: center;
`

const Numbers = styled.p`
    font-weight: bold;
`

const Span = styled.span`
    color: #ff5b50;
`

const DivImageRocket = styled.div`
    padding: 0 20px
`

const TextPrincipal = styled.h2`
    color: #fff;
    font-size: 50px;
    width: 100%;
`

const DivTextPrincipal = styled.div`
    height: 85%;
    max-width: 650px;
    padding: 0px 30px;
`

const ImagesArtists = styled.div`
    display: flex;
    color: #fff;
    align-items: flex-end;
`

const TextP = styled.p`
    color: #fff;
    max-width: 100%;
`

const DivTextOne = styled.div`
    width: 350px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        height: 200px;
    }

    @media (max-width: 320px) {
        padding: 0 30px;
        width: 320px;
        gap: 20px;
    }
`

const DivTexts = styled.div`
    width: 100%;
    min-height: 320px;
    padding: 0 50px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 20px;
        text-align: center;
    }
`

const Main = styled.main`
    width: 100%;
    min-height: 120vh;
    background-image: url("${backgroundMain}")
`

export { MainPrincipal }