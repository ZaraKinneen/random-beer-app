import styled from "styled-components";

const Header = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  text-align: center;
  min-height: 20vh;
`;

const Title = styled.h1`
  padding: 2vh;
  margin: 0;
  font-size: 2.6em;
  color: ${({ theme }) => theme.fonts.dark};
`;

const HeaderComponent = ({ title, children }) => (
  <Header>
    <Title>{title}</Title>
    {children}
  </Header>
);

export default HeaderComponent;
