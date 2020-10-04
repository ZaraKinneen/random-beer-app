import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.primary};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  @media (max-width: 600px) {
    .grid {
      width: 100vw;
      flex-direction: column;
    }
  }
`;

const Card = styled.div`
  margin: 0.25em;
  flex-basis: fit-content;
  padding: 1.5em;
`;

const Image = styled.img`
  width: 100%;
  max-width: 26em;
  height: auto;
`;

const TextContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.fonts.light};
  margin: 0.8em;
  align-items: center;
  font-weight: 300;
`;

const Icon = styled.img`
  width: 100%;
  padding: 0.25em 0;
  max-width: 1.6em;
  height: auto;
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
`;

const Title = styled.h1`
  max-width: 50em;
  color: ${({ theme }) => theme.fonts.highlight};
`;

export default function BreweryComponent({
  beerId,
  breweryName,
  website,
  isOrganic,
  established,
  image,
  description,
}) {
  return (
    <Container>
      <Link
        href={{
          pathname: "/beer/[id]",
          query: { id: beerId },
        }}
        passHref
        as={`/beer/${beerId}`}
      >
        <LinkContainer>
          <Text>Go Back</Text>
        </LinkContainer>
      </Link>
      <Main>
        <Grid>
          <Card>
            <Title>{breweryName}</Title>
            <TextContainer>
              <Icon src="/images/grain.svg" alt="organic-img" />
              <Text>Organic: {isOrganic}</Text>
            </TextContainer>
            <TextContainer>
              <Icon src="/images/www.svg" alt="www-img" />
              <Text>{website} </Text>
            </TextContainer>
            <TextContainer>
              <Icon src="/images/factory.svg" alt="establsihed-img" />
              <Text>Established: {established} </Text>
            </TextContainer>
          </Card>
          <Card>
            <Image src={image} />
          </Card>
          <Card>
            <Text> {description}</Text>
          </Card>
        </Grid>
      </Main>
    </Container>
  );
}
