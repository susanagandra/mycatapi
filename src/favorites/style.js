import styled, { keyframes } from 'styled-components';

export const GridFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 10px;
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  background-color: pink;
  color: #eab676;
  border: none;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: 0.5s; /* Delay the animation for a smoother effect */
  transition: transform 0.3s ease-in-out;
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
  animation: ${fadeIn} 4s ease-in infinite;
`;

export const ImageContainer = styled.div`
  position: relative;
  &:hover ${Button} {
    transform: translateY(0); /* Slide the button up on hover */
  }
`;

export const ImageWithButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5px; 
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease-in-out;
`;

export const AnimatedButton = styled(Button)`
  animation: ${slideIn} 0.3s ease-in-out;
`;

