import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
// import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ cocktails, randomCocktail }: any) {
  const router = useRouter();

  return (
    <>
      <main>
        <Box>
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={randomCocktail.strDrinkThumb}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {randomCocktail.strDrink}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            gap: 2,
          }}
        >
          {cocktails.length === 0 && <p>Loading...</p>}
          {cocktails.slice(0, 6).map((cocktail: any) => (
            <Card sx={{ width: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={cocktail.strDrinkThumb}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cocktail.strDrink}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              router.push("/cocktails");
            }}
          >
            Voir plus
          </Button>
        </Box>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const cocktailsResponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );
  const cocktailRandomResponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const cocktailRandomData = await cocktailRandomResponse.json();
  const cocktailsData = await cocktailsResponse.json();

  return {
    props: {
      cocktails: cocktailsData.drinks,
      randomCocktail: cocktailRandomData.drinks[0],
    },
  };
}
