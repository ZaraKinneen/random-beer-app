import styled from "styled-components";

const ButtonContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const Icon = styled.img`
  width: 100%;
  max-width: 1.6em;
  height: auto;
  transition: transform 300ms ease-in-out;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.fonts.light};
  margin: 1em;
  border: 2px solid white;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.fonts.highlight};
  }
  &:hover ${Icon} {
    transform: rotate(20deg);
  }
`;

const ButtonDetail = styled.span`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0.5em;
  font-size: 1.2rem;
`;

const ButtonComponent = ({ onClick, img, alt, text }) => (
  <ButtonContainer>
    <Button onClick={onClick}>
      <ButtonDetail>
        <Text>{text}</Text>
        <Icon src={img} alt={alt} />
      </ButtonDetail>
    </Button>
  </ButtonContainer>
);

export default ButtonComponent;
