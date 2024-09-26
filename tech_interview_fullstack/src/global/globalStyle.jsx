import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    min-height: 100vh; 
  }

  h1 {
    color: #333;
    text-align: center; 
    font-size: 2.5rem; 
    margin: 1rem 0; 
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  .card {
    max-width: 600px;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    margin: 1rem;
    box-sizing: border-box;
  }
`;