import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IMAGE_PLACEHOLDER } from "../../utils/constants";
import { getRandomBeer, getBeerById } from "../../api";

import BeerComponent from "../../components/beer/beer";
import ButtonComponent from "../../components/button/button";
import HeaderComponent from "../../components/header/header";
import LoadingComponent from "../../components/loading/loading";

export default function Beer() {
  const [beer, setBeer] = useState();

  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      getBeerById(id).then((data) => setBeer(data));
    } else {
      fetchNewBeer();
    }
  }, []);

  const fetchNewBeer = async () => {
    const res = await getRandomBeer();
    setBeer(res);
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
      {!id || !beer ? (
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
