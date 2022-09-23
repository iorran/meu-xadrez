import type {NextPage} from 'next'
import Head from 'next/head'
import {Board} from "../components/Board";
import styled from "@emotion/styled";

const Home: NextPage = () => {
    return (
        <StyledContainer>
            <Head>
                <title>Meu Xadrez</title>
                <meta name="description" content="Meu Xadrez, um guia interativo!"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <Board />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  width: 100vw;
  height: 100vh;
`;

export default Home
