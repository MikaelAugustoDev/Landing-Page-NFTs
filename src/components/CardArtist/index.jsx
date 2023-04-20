import styled from "styled-components"


const CardArtist = (props) => {

    return (

        <Card>

            <img src={props.img}/>

            <DivInfos>

                <Name>{props.name}</Name>

                <Fotos>{props.fotos} Fotografias</Fotos>

            </DivInfos>

        </Card>

    )

}

const Fotos = styled.p`
    color: #ff5b50;
`

const Name = styled.p`
    color: #fff;
`

const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Card = styled.div`
    background: #252525;
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 30px;
`

export { CardArtist }