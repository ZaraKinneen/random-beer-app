import HeaderComponent from "../components/header/header";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  min-height: 80vh;
  text-align: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

const Image = styled.img`
  width: 100%;
  max-width: 15em;
  height: auto;
  margin-top: 5em;
`;

const Text = styled.p`
  font-size: 1.8em;
  color: ${({ theme }) => theme.fonts.light};
  font-weight: bold;
`;

const LinkContainer = styled.span`
  ${Text} {
    padding: 1em;
    margin: 0;
  }
  &:hover ${Text} {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover ${Image} {
    transform: rotate(20deg);
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2em;
  color: ${({ theme }) => theme.fonts.highlight};
`;

export default () => (
  <>
    <HeaderComponent title="Random Beer App" />
    <Container>
      <Title>Looks like you are lost...</Title>
      <LinkContainer>
        <Image src="/images/beer.png" alt="beer" />
        <Link href={"/"}>
          <Text>Take Me Back to the Beer</Text>
        </Link>
      </LinkContainer>
    </Container>
  </>
);
