import { Box } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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
          width: "100px",
          height: "100px",
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
    </Box>
  );
};

export default Footer;
