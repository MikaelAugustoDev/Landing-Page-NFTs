import styled from "styled-components"
import { CardPopular } from "../CardPopular"
import Astronauta1 from "../../assets/astronauta-1.png"
import Astronauta2 from "../../assets/astronauta-2.png"
import Astronauta3 from "../../assets/astronauta-3.png"
import Astronauta4 from "../../assets/astronauta-4.png"

const MainTercery = () => {

    return (

        <Main>

            <Title><Span>Populares</Span> da semana</Title>

            <Div>

                <CardsUm>

                    <CardPopular
                        title="Astronauta 1"
                        name="Mikael"
                        rkt="1.50 RKT"
                        img={Astronauta1}
                    />

                    <CardPopular
                        title="Astronauta 2"
                        name="Karini"
                        rkt="2.0 RKT"
                        img={Astronauta3}
                    />

                </CardsUm>

                <LineBorder></LineBorder>

                <CardsDois>

                    <CardPopular
                        title="Astronauta 3"
                        name="Ingrid"
                        rkt="3.75 RKT"
                        img={Astronauta2}
                    />

                    <CardPopular
                        title="Astronauta 4"
                        name="Daniel"
                        rkt="4.30 RKT"
                        img={Astronauta4}
                    />

                </CardsDois>

            </Div>

        </Main>

    )

}

const LineBorder = styled.div`
    border: 1px solid #5A5757;
    position: absolute;
    left: 50%;
    top: 10%;
    width: 1px;
    height: 550px;

    @media (max-width: 425px) {
        display: none;
    }
`

const CardsDois = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-direction: column;
    }

    @media (max-width: 320px) {
        gap: 50px;
    }
`

const CardsUm = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-direction: column;
    }

    @media (max-width: 320px) {
        gap: 50px;
    }
`

const Div = styled.div`
    width: 100%;
    min-height: 700px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;

    @media (max-width: 320px) {
        gap: 20px;
    }
`

const Span = styled.span`
    color: #ff5b50;
`

const Title = styled.h2`
    color: #fff;
    font-size: 40px;

    @media (max-width: 768px) {
        text-align: center;
    }
`

const Main = styled.main`
    width: 100%;
    min-height: 270px;
    background: #0e0e0e;
    padding: 80px 50px 0px 50px;

    @media (max-width: 768px) {
        padding: 80px 0px 0px 0px;
    }
`

export { MainTercery }