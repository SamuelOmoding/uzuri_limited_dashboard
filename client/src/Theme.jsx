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
      accentColor: "#BB86FC",
      sidebarBackground: "#1E1E2E",
      sidebarText: "#A6ADC8",
      buttonBackground: "#BB86FC",
      buttonText: "#FFFFFF",
    },
    light: {
      backgroundColor: "#F5F5F5",
      color: "#000000",
      accentColor: "#6200EE",
      sidebarBackground: "#F5F5F5",
      sidebarText: "#4A4A4A",
      buttonBackground: "#6200EE",
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



