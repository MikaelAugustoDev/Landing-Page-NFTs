import styled from "styled-components"
import { CardArtist } from "../CardArtist"
import ArtistaUm from "../../assets/artista-1.png"
import ArtistaDois from "../../assets/artista-2.png"
import ArtistaTres from "../../assets/artista-3.png"
import ArtistaQuatro from "../../assets/artista-4.png"
import ArtistaCinco from "../../assets/artista-5.png"
import ArtistaSeis from "../../assets/artista-6.png"
import ArrowLink from "../../assets/arrow-orange.svg"

const MainQuartenery = () => {

    return (

        <Main>

            <Title>Melhores <Span>artistas</Span></Title>

            <DivArtistas>

                <CardArtist
                    img={ArtistaUm}
                    name="Mikael"
                    fotos="80"
                />

                <CardArtist
                    img={ArtistaDois}
                    name="Karini"
                    fotos="99"
                />

                <CardArtist
                    img={ArtistaTres}
                    name="Daniel"
                    fotos="50"
                />

                <CardArtist
                    img={ArtistaQuatro}
                    name="Ingrid"
                    fotos="43"
                />

                <CardArtist
                    img={ArtistaCinco}
                    name="Angélica"
                    fotos="28"
                />

                <CardArtist
                    img={ArtistaSeis}
                    name="Marcelo"
                    fotos="20"
                />

            </DivArtistas>

            <DivLink>

                <LinkArtists href="#">Ver todos os artistas<ImgLink src={ArrowLink} /></LinkArtists>

            </DivLink>

        </Main>

    )

}

const ImgLink = styled.img``

const LinkArtists = styled.a`
    color: #fff;
    display: flex;
    gap: 20px;
    text-decoration: none;
`

const DivLink = styled.div`
    width: 100%;
    text-align: center;
    display: flex;;
    justify-content: center;
`

const DivArtistas = styled.div`
    display: flex;
    height: 100%;
    gap: 100px;
    padding: 30px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 70px;
    }

    @media (max-width: 425px) {
        gap: 40px;
    }
`

const Span = styled.span`
    color: #ff5b50;
`

const Title = styled.h2`
    color: #fff;
    font-size: 40px;
    text-align: center;
`

const Main = styled.main`
    background: #0e0e0e;
    width: 100%;
    min-height: 300px;
    padding: 30px 0px;
`

export { MainQuartenery }