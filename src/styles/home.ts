import styled from "styled-components";
import imageHero from '../../public/images/pokemon-hero.jpg'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${imageHero.src});
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Content = styled.div`
  width: 90%;
  text-align: center;

  & h1 {
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
  }
` 