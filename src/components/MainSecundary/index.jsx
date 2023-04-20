import styled from "styled-components"
import BannerImage from "../../assets/banner.png"

const MainSecundary = () => {

    return (

        <Main>

            <Infos>

                <Info>

                    <Numeros>10K+</Numeros>

                    <Texts>Artes</Texts>

                </Info>

                <Info>

                    <Numeros>200+</Numeros>

                    <Texts>Vendas</Texts>

                </Info>

                <Info>

                    <Numeros>20</Numeros>

                    <Texts>Artistas</Texts>

                </Info>


            </Infos>

            <DivBanner>

                <Links>

                    <Linkum>

                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eum commodi consectetur, <Span href="#">repellendus consequatur</Span> culpa obcaecati dignissimos laborum possimus itaque ipsam maxime blanditiis mollitia nisi eveniet nesciunt ea provident in.</P>

                        <A href="#">Lorem ipsum</A>

                    </Linkum>

                    <Linkdois>

                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eum commodi consectetur, <Span href="#">repellendus consequatur</Span> culpa obcaecati dignissimos laborum possimus itaque ipsam maxime blanditiis mollitia nisi eveniet nesciunt ea provident in.</P>

                        <A href="#">Lorem ipsum</A>

                    </Linkdois>

                </Links>

                <Banner src={BannerImage} />

            </DivBanner>

        </Main>

    )

}

const Banner = styled.img`
    width: 100%;
    height: 50%;

    @media (max-width: 768px) {
        height: 35%;
    }

    @media (max-width: 425px) {
        height: 25%;
    }

    @media (max-width: 320px) {
        height: 18%;
    }
`

const Span = styled.a`
    color: #ff5b50;
`

const A = styled.a`
    color: white;

    @media (max-width: 425px) {
        font-size: 14px;
        text-align: center;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

const P = styled.p`
    color: #fff;

    @media (max-width: 425px) {
        font-size: 14px;
        text-align: center;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

const Linkdois = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 80px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 425px) {
        gap: 20px
    }
`

const Linkum = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 80px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 425px) {
        gap: 20px
    }
`

const Links = styled.div`
    width: 100%;
    height: 50%;
    display: flex;

    @media (max-width: 768px) {
        height: 65%;
    }

    @media (max-width: 425px) {
        margin-bottom: 40px;
        height: 75%;
    }

    @media (max-width: 320px) {
        height: 82%;
    }
`

const DivBanner = styled.div`
    width: 80%;
    height: 550px;

    @media (max-width: 425px) {
        width: 100%;
    }
`

const Texts = styled.p`
    color: #5A5757;
`

const Numeros = styled.h2`
    color: #fff;
    font-size: 40px;

    @media (max-width: 375px) {
        font-size: 30px;
    }
`

const Info = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Infos = styled.div`
    border-right: 1px solid #5A5757;
    width: 20%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 425px) {
        flex-direction: row;
        width: 100%;
        margin-top: 50px;
        border-right: none;
        height: 50px;
    }

    @media (max-width: 375px) {
        padding-left: 10px;
    }
`

const Main = styled.main`
    background: #0e0e0e;
    width: 100%;
    min-height: 550px;
    display: flex;
    border-bottom: 1px solid #5A5757;

    @media (max-width: 425px) {
        flex-direction: column;
        border: none;
    }
`

export { MainSecundary }