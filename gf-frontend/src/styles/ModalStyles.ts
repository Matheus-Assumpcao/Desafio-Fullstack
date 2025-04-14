import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 58, 138, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background: rgba(45, 45, 45, 0.9);
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin: auto; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  z-index: 10000;

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

export const ModalContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column; 
  gap: 12px;
  align-items: center; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: #EDEDED; 
  color: #2D2D2D; 
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #38BDF8; 
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
  margin-bottom: 10px; 

  &:hover {
    background: linear-gradient(135deg, #1E3A8A, #38BDF8); 
    transform: scale(1.05);
  }
`;
