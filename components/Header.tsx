import { Box, TextField, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState<any>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
      );
      const cocktailsData = await cocktailsResponse.json();
      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const cocktailSearch = cocktails.filter((cocktail: any) =>
      cocktail.strDrink.toLowerCase().includes(search.toLowerCase())
    );
    console.log(cocktailSearch);
    if (cocktailSearch.length === 0) {
      setError(true);
      return;
    } else {
      router.push(`/search/${cocktailSearch[0].idDrink}`);
      setSearch("");
    }
    // router.push(`/search/${cocktailSearch[0].idDrink}`);
    // setSearch("");
  };

  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "primary.main",
        color: "primary.contrastText",
        padding: "1rem",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
        }}
      >
        <Link href="/">
          <img
            src="./next.svg"
            alt="test"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Link>
      </Box>

      <Box
        component={"nav"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Box>
          <Link href="/cocktails">Cocktails</Link>
        </Box>
      </Box>

      <Box component={"div"}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setError(false);
            }}
          />
          <Button type="submit">Search</Button>
        </form>
        {error && (
          <p style={{ color: "red" }}>No cocktail found with that name</p>
        )}
      </Box>
    </Box>
  );
}
