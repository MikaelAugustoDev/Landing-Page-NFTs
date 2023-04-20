import styled from "styled-components"
import ArrowBlack from "../../assets/arrow-black.svg"
import Insta from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"
import Twitter from "../../assets/twitter.svg"
import Email from "../../assets/email.svg"

const Footer = () => {

    return (

        <Footers>

            <DivLogoFooter>


                <Logo>Rocket<Span>NFTs</Span></Logo>

                <Button><Img src={ArrowBlack} /></Button>


            </DivLogoFooter>

            <DivInfo>

                <DivEmail>

                    <TitleEmail>Fique por dentro de <SpanEmail>todas as novidades</SpanEmail></TitleEmail>

                    <DivInputs>

                        <InputEmail
                            type="email"
                            placeholder="nft@rocketseat.com.br"
                        />

                        <ButtonEmail>Enviar</ButtonEmail>

                    </DivInputs>


                </DivEmail>

                <DivPages>

                    <PageUm>

                        <H2>Empresa</H2>

                        <P>Sobre</P>
                        <P>Serviços</P>
                        <P>Time</P>
                        <P>Carreira</P>

                    </PageUm>

                    <PageDois>

                        <H2>Mapa</H2>

                        <P>Galeria</P>
                        <P>Populares</P>
                        <P>Vendas</P>
                        <P>Contato</P>

                    </PageDois>

                    <PageTres>

                        <H2>Links</H2>

                        <P>FAQs</P>
                        <P>Termos</P>
                        <P>Politica</P>
                        <P>Ajuda</P>

                    </PageTres>


                </DivPages>

            </DivInfo>

            <DivRedes>

                <Link>www.rocketseat.com.br</Link>

                <DivImgRede>

                    <ImgRede src={Insta}/>
                    <ImgRede src={Youtube}/>
                    <ImgRede src={Twitter}/>
                    <ImgRede src={Email}/>

                </DivImgRede>


            </DivRedes>

        </Footers>

    )

}

const ImgRede = styled.img`
    :hover {
        cursor: pointer;
    }
`

const DivImgRede = styled.div`
    display: flex;
    gap: 20px;
`

const Link = styled.a`
    color: #fff;
`

const P = styled.p`
    color: #888888;
    font-size: 14px;
`

const H2 = styled.h2`
    color: #fff;
    font-size: 16px;
`

const PageTres = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`
const PageDois = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`
const PageUm = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`

const DivPages = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        margin-top: 20px;
    }
`

const ButtonEmail = styled.button`
    width: 70px;
    height: 45px;
    font-weight: 700;
    border-radius: 0px;

    :hover {
        cursor: pointer;
    }
`

const InputEmail = styled.input`
    width: 220px;
    height: 45px;
    background: #000;
    padding: 10px;
    border: none;
    color: lightgray;

    :focus {
        outline: none;
    }

    @media (max-width: 768px) {
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 300px;
    }

    @media (max-width: 375px) {
        width: 250px;
    }

    @media (max-width: 320px) {
        width: 200px;
    }
`

const DivInputs = styled.div`
    display: flex;
`

const SpanEmail = styled.span`
    color: #ff5b50;
`

const TitleEmail = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    width: 250px;
`

const DivEmail = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #5A5757;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        border: none;
    }
`

const Img = styled.img`
    width: 16px;
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: #ff5b50;
`

const Span = styled.span`
    color: #ff5b50;
`

const Logo = styled.h1`
    display: flex;
    gap: 5px;
    color: #fff;
`

const DivRedes = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;

    @media (max-width: 425px) {
        flex-direction: column;
        margin-top: 20px;
        padding-bottom: 20px;
    }
`

const DivInfo = styled.div`
    border-top: 1px solid #5A5757;
    border-bottom: 1px solid #5A5757;
    width: 100%;
    min-height: 200px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const DivLogoFooter = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    padding: 0px 50px;
    justify-content: space-between;

    @media (max-width: 320px) {
        padding: 0px 20px;
    }
`

const Footers = styled.footer`
    background: #303030;
    width: 100%;
    min-height: 500px;
`

export { Footer }