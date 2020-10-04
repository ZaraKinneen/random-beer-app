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
    text-decoration: underline;
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

export default function BeerComponent({
  id,
  name,
  breweries,
  description,
  label,
  abv,
  ibu,
  category,
}) {
  return (
    <>
      <Container>
        <Main>
          <Grid>
            <Card>
              <Image src={label} alt="beer-label"></Image>
            </Card>
            <Card>
              <Title>{name}</Title>
              <TextContainer>
                <Icon src="/static/images/percentage.svg" alt="abv-img" />
                <Text>ABV: {abv}</Text>
              </TextContainer>
              <TextContainer>
                <Icon src="/static/images/grain.svg" alt="ibu-img" />
                <Text>IBU: {ibu}</Text>
              </TextContainer>
              <TextContainer>
                <Icon src="/static/images/category.svg" alt="category-img" />
                <Text>Category: {category}</Text>
              </TextContainer>
              <TextContainer>
                <Icon src="/static/images/brewery.svg" alt="brewery-img" />
                <Link
                  href={{
                    pathname: "/brewery/[id]",
                    query: { beerId: id, beerName: name },
                  }}
                  passHref
                  as={`/brewery/${breweries[0].id}`}
                >
                  <LinkContainer>
                    <Text>Brewed by: {breweries[0].name}</Text>
                  </LinkContainer>
                </Link>
              </TextContainer>
            </Card>
            <Card>
              <Text>{description}</Text>
            </Card>
          </Grid>
        </Main>
      </Container>
    </>
  );
}
