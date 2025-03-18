import React, { useState } from "react";
import { UseTheme } from "../Theme";
import { FaHome, FaUser, FaChartLine, FaFileInvoice, FaUsers, FaCalculator, FaList, FaFileAlt, FaBars } from "react-icons/fa";

function SideBar({ toggleColor, darkTheme, isLoggedIn }) {
  const { themeStyles } = UseTheme();
  const [isCollapsed, setCollapsed] = useState(false);

  const sidebarStyles = {
    backgroundColor: themeStyles.sidebarBackground,
    color: themeStyles.sidebarText,
    width: isCollapsed ? "80px" : "250px",
    minHeight: "100vh",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    transition: "width 0.3s ease",
  };

  const linkStyles = {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    margin: "10px 0",
    borderRadius: "5px",
    color: themeStyles.sidebarText,
    textDecoration: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
    whiteSpace: "nowrap",
  };

  const hoverStyles = {
    backgroundColor: themeStyles.accentColor,
    color: themeStyles.buttonText,
  };

  return (
    <div style={sidebarStyles}>
      <button 
        onClick={() => setCollapsed(!isCollapsed)}
        style={{ 
          background: "none", 
          border: "none", 
          color: themeStyles.sidebarText, 
          cursor: "pointer", 
          marginBottom: "20px" 
        }}
      >
        <FaBars size={20} />
      </button>
      <h2 style={{ color: themeStyles.accentColor, marginBottom: "20px", display: isCollapsed ? "none" : "block" }}>UZURI LIMITED</h2>
      <nav>
        <a href="/" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
          <FaHome style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Home"}
        </a>
        {isLoggedIn && (
          <>
            <a href="/Dashboard" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaChartLine style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Dashboard"}
            </a>
            <a href="/Profile" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaUser style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Profile"}
            </a>
            <a href="/Invoice" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaFileInvoice style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Invoice"}
            </a>
            <a href="/ClientList" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaUsers style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Client List"}
            </a>
            <a href="/FeeCalculator" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaCalculator style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Fee Calculator"}
            </a>
            <a href="/ServicesList" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaList style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Services List"}
            </a>
            <a href="/Reports" style={linkStyles} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}> 
              <FaFileAlt style={{ marginRight: isCollapsed ? "0" : "10px" }} /> {!isCollapsed && "Reports"}
            </a>
          </>
        )}
      </nav>
    </div>
  );
}

export default SideBar;


// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import { useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import { Link } from "react-router-dom";
// import { UseTheme } from '../Theme';

// const Item = ({ title, to, icon }) => {
//   const { themeStyles } = UseTheme();

//   return (
//     <Link to={to}>
//       <MenuItem className="hover:text-gray-600" icon={icon} style={{ color: themeStyles.sidebarText }}>
//         <h4 className="text-lg md:text-xl hover:text-gray-600">{title}</h4>
//       </MenuItem>
//     </Link>
//   );
// };

// function SideBar() {
//   const [isCollapsed, setCollapsed] = useState(false);
//   const { themeStyles } = UseTheme();

//   return (
//     <div className="flex-col w-fit h-screen" style={{ backgroundColor: themeStyles.sidebarBackground }}>
//       <Box className="flex-col">
//         <Sidebar collapsed={isCollapsed} style={{ backgroundColor: themeStyles.sidebarBackground }}>
//           <Menu>
//             <Box>
//               <MenuItem
//                 className="py-2 justify-between hover:text-gray-600"
//                 onClick={() => setCollapsed(!isCollapsed)}
//                 icon={isCollapsed ? <MenuIcon /> : undefined}
//                 style={{ margin: "10px 0", cursor: "pointer", color: themeStyles.sidebarText }}
//               >
//                 {!isCollapsed && (
//                   <Box className="flex justify-between p-3">
//                     <h1 className={`text-xl md:text-2xl font-bold`} style={{ color: themeStyles.sidebarText }}>
//                       UZURI LIMITED
//                     </h1>
//                     <IconButton
//                       className="hover:text-gray-600"
//                       onClick={() => setCollapsed(!isCollapsed)}
//                       style={{ color: themeStyles.sidebarText }}
//                     >
//                       <MenuIcon />
//                     </IconButton>
//                   </Box>
//                 )}
//               </MenuItem>
//             </Box>
//             {!isCollapsed && (
//               <Box>
//                 <Box className="mt-3 text-center">
//                   <h5 className={`text-lg md:text-xl font-bold`} style={{ color: themeStyles.sidebarText }}>
//                     Admin
//                   </h5>
//                 </Box>
//               </Box>
//             )}
//           </Menu>
//           <Menu className="mt-4">
//             <Box>
//               <Item icon={<HomeIcon />} title="Home" to="/Home" />
//             </Box>
//           </Menu>
//         </Sidebar>
//       </Box>
//     </div>
//   );
// }

// export default SideBar;


