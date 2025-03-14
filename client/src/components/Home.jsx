import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Bg from "../assets/water.png";

const Authentication = lazy(() => import("./Authentication"));

const Home = ({ ThemeStyles }) => {
  return (
    <div
      className="pb-10 px-5 py-7 w-full h-screen overflow-y-auto"
      style={{
        ...ThemeStyles,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="justify-between flex" style={ThemeStyles}>
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">
            UZURI LIMITED
          </h1>
          <h2 className="text-2xl font-semibold text-white">
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
