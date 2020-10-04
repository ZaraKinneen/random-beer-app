import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { getBreweryById } from "../../api";

import BreweryComponent from "../../components/brewery/brewery";
import HeaderComponent from "../../components/header/header";
import LoadingComponent from "../../components/loading/loading";

const Text = styled.p`
  font-size: 1.3em;
  color: ${({ theme }) => theme.fonts.light};
  margin: 0.8em;
  align-items: center;
  font-weight: 300;
`;

export default function Brewerey() {
  const [brewery, setBrewery] = useState();

  const router = useRouter();
  const {
    query: { id, beerId, beerName },
  } = router;

  const getBrewery = async () => {
    const res = await getBreweryById(id);
    setBrewery(res);
  };

  useEffect(() => {
    getBrewery();
  }, [id]);

  return (
    <>
      <HeaderComponent title={"Random Beer App"}>
        <Text>The home of {beerName} beer</Text>
      </HeaderComponent>
      {!id || !brewery ? (
        <LoadingComponent />
      ) : (
        brewery && (
          <BreweryComponent
            id={id}
            beerId={beerId}
            beerName={beerName}
            breweryName={brewery.name}
            website={brewery.website}
            isOrganic={brewery.isOrganic}
            established={brewery.established}
            image={brewery.images.squareMedium}
            description={brewery.description}
          />
        )
      )}
    </>
  );
}
