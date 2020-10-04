import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styled from "styled-components";

import { getBreweryById } from "../../api";
import BreweryComponent from "../../components/brewery";
import HeaderComponent from "../../components/header";
import LoadingComponent from "../../components/loading";

const Text = styled.p`
  font-size: 1.3em;
  color: ${({ theme }) => theme.fonts.light};
  margin: 0.8em;
  align-items: center;
  font-weight: 300;
`;

export default function Brewerey() {
  const [brewery, setBrewery] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const {
    query: { id, beerId, beerName },
  } = router;

  const getBrewery = async () => {
    setLoading(true);

    try {
      const res = await getBreweryById(id);
      setBrewery(res);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBrewery();
  }, [id]);

  return (
    <>
      <Head>
        <title>Random Beer App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent title={"Random Beer App"}>
        <Text>The home of {beerName} beer</Text>
      </HeaderComponent>
      {error && <div>Something went wrong ...</div>}
      {loading ? (
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
