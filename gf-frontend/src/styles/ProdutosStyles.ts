import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: linear-gradient(135deg, #1E3A8A, #254EDB);
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 20px;
  transition: 0.3s;
  text-align: center;
  color: white;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #254EDB, #38BDF8);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #1E3A8A, #38BDF8);
    transform: scale(1.05);
  }
`;

