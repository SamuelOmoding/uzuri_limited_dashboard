import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Bg from "../assets/water.png";
import { UseTheme } from "./ThemeProvider";

const Authentication = lazy(() => import("./Authentication"));

const Home = () => {
  const { themeStyles } = UseTheme();

  return (
    <div
      className="pb-40 px-5 py-7 w-full h-screen overflow-y-auto"
      style={{
        backgroundColor: themeStyles.backgroundColor,
        color: themeStyles.color,
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="justify-between flex flex-col md:flex-row">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: themeStyles.color }}>
            UZURI LIMITED
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold" style={{ color: themeStyles.color }}>
            <span>KARIBU !</span>
          </h2>
        </div>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Authentication />
      </Suspense>
    </div>
  );
};

export default Home;