import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { IMAGE_PLACEHOLDER } from "../../utils/constants";
import { getRandomBeer, getBeerById } from "../../api";

import BeerComponent from "../../components/beer";
import ButtonComponent from "../../components/button";
import HeaderComponent from "../../components/header";
import LoadingComponent from "../../components/loading";

export default function Beer() {
  const [beer, setBeer] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    setLoading(true);
    if (id) {
      try {
        getBeerById(id).then((data) => setBeer(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    } else {
      fetchNewBeer();
    }
  }, []);

  const fetchNewBeer = async () => {
    setLoading(true);

    try {
      const res = await getRandomBeer();
      setBeer(res);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Random Beer App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent title={"The Random Beer App"}>
        <ButtonComponent
          onClick={fetchNewBeer}
          img="/static/images/beer.png"
          alt="beer-img"
          text="Show More Beer"
        />
      </HeaderComponent>
      {error && <div>Something went wrong ...</div>}
      {loading ? (
        <LoadingComponent />
      ) : (
        beer &&
        beer.style && (
          <BeerComponent
            id={beer.id}
            name={beer.name}
            abv={beer.abv ? beer.abv : "N/A"}
            ibu={beer.ibu ? beer.ibu : "N/A"}
            category={beer.style.category.name}
            breweries={beer.breweries}
            label={beer.label ? beer.label.medium : IMAGE_PLACEHOLDER}
            description={beer.style.description}
          />
        )
      )}
    </>
  );
}
