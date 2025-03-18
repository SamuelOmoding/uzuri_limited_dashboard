import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();

export function UseTheme() {
  return useContext(ThemeContext);
}

export function UpdateTheme() {
  return useContext(UpdateThemeContext);
}

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleColor = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const themeStyles = {
    dark: {
      backgroundColor: "#1E1E2E", 
      color: "#FFFFFF", 
      accentColor: "#FF6F61", 
      sidebarBackground: "#1E1E2E", 
      sidebarText: "#A6ADC8", 
      buttonBackground: "#FF6F61", 
      buttonText: "#FFFFFF", 
    },
    light: {
      backgroundColor: "#F9F9F9", 
      color: "#333333", 
      accentColor: "#4A90E2", 
      sidebarBackground: "#FFFFFF",
      sidebarText: "#4A4A4A", 
      buttonBackground: "#4A90E2", 
      buttonText: "#FFFFFF", 
    },
  };

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



