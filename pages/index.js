import { useState } from "react";

import { BASE_URL, API_KEY } from "../utils/constants";
import { IMAGE_PLACEHOLDER } from "../utils/constants";
import { getRandomBeer } from "../api";

import BeerComponent from "../components/beer/";
import ButtonComponent from "../components/button";
import HeaderComponent from "../components/header";
import LoadingComponent from "../components/loading";

export default function Beer({ initialData }) {
  const [beer, setBeer] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const fetchNewBeer = async () => {
    setLoading(true);
    const res = await getRandomBeer();
    setBeer(res);
    setLoading(false);
  };

  return (
    <>
      <HeaderComponent title={"The Random Beer App"}>
        <ButtonComponent
          onClick={fetchNewBeer}
          img="/static/images/beer.png"
          alt="beer-img"
          text="Show More Beer"
        />
      </HeaderComponent>
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
            label={beer.label ? beer.labels.medium : IMAGE_PLACEHOLDER}
            description={beer.style.description}
          />
        )
      )}
    </>
  );
}

export async function getServerSideProps() {
  //does not require CORS - as only called once without kept api call within local file
  const URL = `${BASE_URL}/beer/random/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;

  const body = await fetch(URL);
  const json = await body.json();

  return {
    props: {
      initialData: json.data,
    },
  };
}
