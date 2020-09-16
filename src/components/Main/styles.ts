import styled from 'styled-components';

export const Outdoor = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(-45deg, #fff, #962715, #1e1e20, #bbc3c6);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  font-weight: bold;
  z-index: -1;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1 {
    margin-left: 65px;
    white-space: nowrap;
    max-width: fit-content;
    font-weight: bold;
    background: linear-gradient(135deg, #bbc3c6 0%, #962715 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    background: #bbc3c6;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-typing {
    margin-left: 65px;
    overflow: hidden;
    font-size: 1.3em;
    white-space: nowrap;
    max-width: fit-content;
    border-right: 0.5em solid black;
    background: linear-gradient(135deg, #bbc3c6 0%, #962715 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: typing 2.5s steps(40, end), blink 1s step-end infinite !important;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #bbc3c6;
    }
  }
  /* @media (max-width: 75em) {
    font-size: 1rem;
  }
  
  @media (max-width: 56.25em) {
    font-size: 3.6rem;
    text-align: center;
  }

  @media (max-width: 37.5em) {
    font-size: 10%;
  }

  @media (max-width: 20em) {
    font-size: 1rem;
  } */
`;
