import styled from "styled-components"
import Arrow from "../../assets/arrow-white.svg"

const CardPopular = (props) => {

    return (

        <Card>

            <DivTitle>

                <Title>{props.title}</Title>

                <img src={Arrow}/>

            </DivTitle>

            <DivNameCard>

                <NameCard>{props.name}</NameCard>

                <Rkt>{props.rkt}</Rkt>

            </DivNameCard>

            <img src={props.img}/>

        </Card>

    )

}

const Rkt = styled.p`
    color: #ff5b50;
`

const NameCard = styled.p`
    color: #5A5757;
`

const DivNameCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h3`
    color: #fff;
    font-weight: 500;
`

const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Card = styled.div`
    width: 300px;
    height: 260px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export { CardPopular }