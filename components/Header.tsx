import { Box, TextField } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.main",
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
            alt=""
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
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Header;
