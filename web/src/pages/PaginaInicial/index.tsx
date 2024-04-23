import styled from "styled-components";
import Atividades from "./Atividades";
import Banner from "./Banner";
import Depoimentos from "./Depoimentos";
import Pesquisa from "./Pesquisa";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial() {
    return (
        <>
        
        <Pesquisa />
        <Container>
            <Banner />
            <Atividades />
            <Depoimentos />
        </Container>
        </>
    )
}