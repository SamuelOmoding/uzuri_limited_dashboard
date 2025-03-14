import React, { useContext, useState } from 'react';

// Create contexts for theme and update function
const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();

// Custom hooks to access theme and update function
export function UseTheme() {
  return useContext(ThemeContext);
}

export function UpdateTheme() {
  return useContext(UpdateThemeContext);
}

// ThemeProvider component
function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true); // Default to dark theme

  // Function to toggle between dark and light themes
  const toggleColor = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  // Define theme-specific styles
  const themeStyles = {
    dark: {
      backgroundColor: "#1E1E2E", // Dark blue-gray
      color: "#FFFFFF", // White
      accentColor: "#BB86FC", // Light purple for highlights
      sidebarBackground: "#1E1E2E", // Dark blue-gray
      sidebarText: "#A6ADC8", // Light blue-gray for secondary text
    },
    light: {
      backgroundColor: "#F5F5F5", // Off-white
      color: "#000000", // Black
      accentColor: "#6200EE", // Deep purple for highlights
      sidebarBackground: "#F5F5F5", // Off-white
      sidebarText: "#4A4A4A", // Dark gray for secondary text
    },
  };

  // Current theme styles based on darkTheme state
  const currentTheme = darkTheme ? themeStyles.dark : themeStyles.light;

  return (
    <ThemeContext.Provider value={{ darkTheme, themeStyles: currentTheme }}>
      <UpdateThemeContext.Provider value={toggleColor}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

// import React, { useContext, useState } from 'react'

// const ThemeContext=React.createContext()               
// const UpdateThemeContext=React.createContext()

// export function UseTheme(){              
//     return useContext(ThemeContext)
// }
// export function UpdateTheme(){             
//     return useContext(UpdateThemeContext)
// }
// //function theme
// function ThemeProvider({children}) {
//     const [darkTheme, setDarkTheme]=useState(true)  //set state for the theme

//     const toggleColor=()=>{       
//         setDarkTheme(prevTheme=>!prevTheme)
//     }
//   return (
//     <div>
//       <ThemeContext.Provider value={darkTheme}>
//         <UpdateThemeContext.Provider value={toggleColor}>      
//             {children}
//         </UpdateThemeContext.Provider>
//       </ThemeContext.Provider>
//     </div>
//   )
// }

// export default ThemeProvider
