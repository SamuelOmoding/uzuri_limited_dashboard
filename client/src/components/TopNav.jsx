import { Box, IconButton, Tooltip } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';

function TopNav({ toggleColor, darkTheme }) {

const ThemeStyles = {
  backgroundColor: darkTheme ? "#1E1E1E" : "#F5F5F5",
  color: darkTheme ? "#FFFFFF" : "#000000"
};

const MenuStyles = {
  backgroundColor: darkTheme ? "#1E1E1E" : "#F5F5F5"
};

  return (
    <Box className="flex justify-between p-4" style={ThemeStyles}>
      <Box>
      </Box>
      <Box display="flex" p={2}>
      <Tooltip title="Toggle Theme">
          <IconButton style={MenuStyles} onClick={toggleColor}>
            {darkTheme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
        </Tooltip>  
        <Tooltip title="User Profile">
          <Link to="/home">
            <IconButton style={MenuStyles}>
              <Person2OutlinedIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default TopNav;


