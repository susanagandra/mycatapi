import styled, { keyframes } from 'styled-components';

export const GridFavorite = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Divide o contêiner em duas colunas */
  gap: 20px; /* Define o espaçamento entre as imagens */
  margin: 10px;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  background-color: pink;
  color: #fff; /* Cor do texto do botão */
  border: none;
  padding: 10px 20px; /* Aumenta o espaçamento interno do botão */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  animation: ${pulse} 1s ease-in-out infinite; /* Aplica a animação de pulsação */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnimatedImage = styled.img`
  animation: ${fadeIn} 1s ease; /* Aplica a animação de fade in */
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageWithButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Ajusta a posição do container de botões */
  left: 50%;
  transform: translateX(-50%);
`;

export const AnimatedButton = styled(Button)`
  animation: ${fadeIn} 0.5s ease; /* Aplica a animação de fade in */
`;

