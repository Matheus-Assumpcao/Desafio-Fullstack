import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1E3A8A, #254EDB); 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background: rgba(45, 45, 45, 0.85); 
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 350px;

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: #EDEDED; 
  color: #2D2D2D; 
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  text-align: center; 

  &:focus {
    border-color: #38BDF8; 
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 90%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #254EDB, #38BDF8); 
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 10px; 

  &:hover {
    background: linear-gradient(135deg, #1E3A8A, #38BDF8); 
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px;
  }
`;