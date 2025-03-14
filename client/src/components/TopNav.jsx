import { Box, IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
import { UseTheme, UpdateTheme } from '../Theme';

function TopNav() {
  const { darkTheme, themeStyles } = UseTheme();
  const toggleTheme = UpdateTheme();

  return (
    <Box className="flex justify-between p-2" style={{ backgroundColor: themeStyles.backgroundColor }}>
      <Box>
        {/* Add any left-aligned content here */}
      </Box>
      <Box display="flex" p={2}>
        <IconButton style={{ marginRight: '16px' }} className="text-xl" onClick={toggleTheme}>
          {darkTheme ? <DarkModeOutlinedIcon style={{ color: themeStyles.accentColor }} /> : <LightModeOutlinedIcon style={{ color: themeStyles.accentColor }} />}
        </IconButton>
        <Link to="/home">
          <IconButton className="text-neutral-300">
            <Person2OutlinedIcon style={{ color: themeStyles.accentColor }} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

export default TopNav;



// import { Box, IconButton } from '@mui/material';
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import { Link } from 'react-router-dom';

// function TopNav({ toggleColor, darkTheme }) {

//   const ThemeStyles = {
//     backgroundColor: darkTheme ? "#1E1E2E" : "#F5F5F5",
//     color: darkTheme ? "#FFFFFF" : "#000000",
//     accentColor: darkTheme ? "#BB86FC" : "#6200EE",
//   };
  
//   const MenuStyles = {
//     backgroundColor: darkTheme ? "#1E1E2E" : "#F5F5F5",
//   };

//   return (
//     <Box className="flex justify-between p-2" style={ThemeStyles}>
//       <Box>
//       </Box>
//       <Box display="flex" p={2}>
//         <IconButton style={{ ...MenuStyles, marginRight: '16px' }} className="text-xl" onClick={toggleColor}>
//           {darkTheme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
//         </IconButton>
//         <Link to="/home">
//           <IconButton style={MenuStyles} className="text-neutral-300">
//             <Person2OutlinedIcon />
//           </IconButton>
//         </Link>
//       </Box>
//     </Box>
//   );
// }

// export default TopNav;