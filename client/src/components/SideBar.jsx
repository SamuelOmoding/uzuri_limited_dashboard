import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { UseTheme } from '../Theme';

const Item = ({ title, to, icon }) => {
  const { themeStyles } = UseTheme();

  return (
    <Link to={to}>
      <MenuItem className="hover:text-gray-600" icon={icon} style={{ color: themeStyles.sidebarText }}>
        <h4 className="text-lg md:text-xl hover:text-gray-600">{title}</h4>
      </MenuItem>
    </Link>
  );
};

function SideBar() {
  const [isCollapsed, setCollapsed] = useState(false);
  const { themeStyles } = UseTheme();

  return (
    <div className="flex-col w-fit h-screen" style={{ backgroundColor: themeStyles.sidebarBackground }}>
      <Box className="flex-col">
        <Sidebar collapsed={isCollapsed} style={{ backgroundColor: themeStyles.sidebarBackground }}>
          <Menu>
            <Box>
              <MenuItem
                className="py-2 justify-between hover:text-gray-600"
                onClick={() => setCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuIcon /> : undefined}
                style={{ margin: "10px 0", cursor: "pointer", color: themeStyles.sidebarText }}
              >
                {!isCollapsed && (
                  <Box className="flex justify-between p-3">
                    <h1 className={`text-xl md:text-2xl font-bold`} style={{ color: themeStyles.sidebarText }}>
                      UZURI LIMITED
                    </h1>
                    <IconButton
                      className="hover:text-gray-600"
                      onClick={() => setCollapsed(!isCollapsed)}
                      style={{ color: themeStyles.sidebarText }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
            </Box>
            {!isCollapsed && (
              <Box>
                <Box className="mt-3 text-center">
                  <h5 className={`text-lg md:text-xl font-bold`} style={{ color: themeStyles.sidebarText }}>
                    Admin
                  </h5>
                </Box>
              </Box>
            )}
          </Menu>
          <Menu className="mt-4">
            <Box>
              <Item icon={<HomeIcon />} title="Home" to="/Home" />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
}

export default SideBar;


