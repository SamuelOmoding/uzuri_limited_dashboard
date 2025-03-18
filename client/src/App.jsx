import { useLocation } from "react-router-dom";
import { UpdateTheme, UseTheme } from "./Theme";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";
import { Routes, Route } from "react-router-dom";
import Authentication from './components/Authentication';
import Invoice from "./components/Invoice";
import Dashboard from "./components/Dashboard";
import RegisterClient from "./components/RegisterClient";
import FeeCalculator from "./components/FeeCalculator";
import Home from "./components/Home";
import Reports from "./components/Reports";
import ClientList from "./components/ClientList";
import ServicesList from "./components/ServicesList";
import Bg from "../src/assets/water.png";

function App() {
  const { darkTheme, themeStyles } = UseTheme(); 
  const toggleColor = UpdateTheme(); 
  const location = useLocation();

  // Combined styles for the app container
  const appStyles = {
    backgroundImage: `url(${Bg})`,
    // backgroundColor: darkTheme ? "rgba(46, 45, 45, 0.9)" : "rgba(171, 163, 159, 0.9)", 
    color: themeStyles.color, 
    backgroundSize: "cover",
    backgroundBlendMode: darkTheme ? "overlay" : "lighten", 
    minHeight: "100vh",
  };

  const headerGradient = darkTheme
    ? "bg-gradient-to-r from-blue-900 to-gray-700"
    : "bg-gradient-to-r from-gray-500 to-gray-800";

  return (
    <div className="app overflow-hidden" style={appStyles}>
      <SideBar toggleColor={toggleColor} darkTheme={darkTheme} />
      <main className="content">
        <TopNav toggleColor={toggleColor} darkTheme={darkTheme} />

        {location.pathname === "/" && (
          <div className="flex items-center justify-center min-h-screen">
            <h1
              className={`px-10 py-25 mt-9 font-bold text-7xl text-transparent bg-clip-text ${headerGradient}`}
            >
              UZURI LIMITED DASHBOARD
            </h1>
          </div>
        )}

        <Routes>
          <Route path="/Profile" element={<Authentication themeStyles={themeStyles} />} />
          <Route path="/Dashboard" element={<Dashboard themeStyles={themeStyles} />} />
          <Route path="/RegisterClient" element={<RegisterClient themeStyles={themeStyles} />} />
          <Route path="/FeeCalculator" element={<FeeCalculator themeStyles={themeStyles} />} />
          <Route path="/Home" element={<Home themeStyles={themeStyles} />} />
          <Route path="/Invoice" element={<Invoice themeStyles={themeStyles} />} />
          <Route path="/Reports" element={<Reports themeStyles={themeStyles} />} />
          <Route path="/ClientList" element={<ClientList themeStyles={themeStyles} />} />
          <Route path="/ServicesList" element={<ServicesList themeStyles={themeStyles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


