import { useState } from "react";

import { IMAGE_PLACEHOLDER } from "../utils/constants";
import { getDataOnLoad, getRandomBeer } from "../api";

import BeerComponent from "../components/beer/beer";
import ButtonComponent from "../components/button/button";
import HeaderComponent from "../components/header/header";
import LoadingComponent from "../components/loading/loading";

export default function Beer({ initialData }) {
  const [beer, setBeer] = useState(initialData);

  const fetchNewBeer = async () => {
    const res = await getRandomBeer();
    setBeer(res);
  };

  return (
    <>
      <HeaderComponent title={"The Random Beer App"}>
        <ButtonComponent
          onClick={fetchNewBeer}
          img="/images/beer.png"
          alt="beer-img"
          text="Show More Beer"
        />
      </HeaderComponent>
      {!initialData ? (
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
  const res = await getDataOnLoad();

  return {
    props: {
      initialData: res,
    },
  };
}
