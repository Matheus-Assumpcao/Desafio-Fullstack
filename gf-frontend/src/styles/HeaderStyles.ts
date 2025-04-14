import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #1E3A8A, #254EDB); 
  padding: 15px 40px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 100vw; 
  box-sizing: border-box;
  overflow-x: hidden; 
  z-index: 100;

  h1 {
    color: #EDEDED;
    font-size: 22px;
  }
`;

export const NavButton = styled.button`
  background: linear-gradient(135deg, #254EDB, #38BDF8);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(135deg, #1E3A8A, #38BDF8);
  }
`;
