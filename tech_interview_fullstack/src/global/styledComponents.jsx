import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border: 2px solid #008000;
  border-radius: 8px;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  &:nth-of-type(2) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.a`
  color: #008000;
  font-weight: normal bold;
  font-weight: 700;
  font-size: 17px;
  text-decoration: none; 
  &:hover {
    text-decoration: underline; 
    color: #555; 
  }
`;

export const DropdownContainer = styled.div`
  margin: 20px 0;
`;

export const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #ffffff;
  color: #000000;

  &:focus {
    border-color: #000000;
    outline: none;
  }
`;

export const Option = styled.option`
  padding: 8px;
`;

export const FormContainer = styled.form`
  display: list-item;
  max-width: 400px;
  margin: auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
`;

export const Button = styled.button`
  padding: 10px 15px;
  max-width: 180px;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

   &:disabled {
    background-color: #ccc;
    color: #666; 
    cursor: not-allowed; 
  }
`;

export const ProfileDataCard = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #e6ffed;
  border: 1px solid; 
  border-radius: 8px;
  text-align: left; 
`;

export const Section = styled.section`
    display: contents; 
    flex-direction: column;
    padding: 10px; 
    margin: 2px; 
`

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #28a745; /* Green color for the title */
`;

export const CardText = styled.p`
  margin: 5px 0;
  color: #333; /* Dark text color for better readability */
`;

export const IdContainer = styled.div`
  padding: 0.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex; 
  justify-content: space-evenly;
`

export const RecommendationContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  transition: background-color 0.3s ease;

  background-color: ${props => (props.issuccess ? 'lightgreen' : 'lightcoral')};
  border: 1px solid ${props => (props.issuccess ? 'green' : 'red')};
  color: ${props => (props.issuccess ? 'green' : 'red')};
`
