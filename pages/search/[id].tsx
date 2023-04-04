import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = ({ cocktails }: any) => {
  const [cocktailsArray, setCocktailsArray] = useState<any>([]);
  const [cocktail, setCocktail] = useState<any>({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log("params", id);
    setCocktailsArray(cocktails);
    console.log(cocktails);
  }, []);

  useEffect(() => {
    const cocktailSearch = cocktailsArray.find(
      (cocktail: any) => cocktail.idDrink === id
    );
    setCocktail(cocktailSearch);
  }, [cocktailsArray]);

  return (
    <div>
      <h1>Search Page</h1>
      {cocktail && (
        <div>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

          <p>{cocktail.strDrink}</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

export async function getStaticPaths() {
  const cocktailsResponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );
  const cocktailsData = await cocktailsResponse.json();

  const paths = cocktailsData.drinks.map((cocktail: any) => ({
    params: { id: cocktail.idDrink },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({ params }: any) => {
  const cocktailsResponse = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
  );
  const cocktailsData = await cocktailsResponse.json();

  return {
    props: {
      cocktails: cocktailsData.drinks,
    },
  };
};
