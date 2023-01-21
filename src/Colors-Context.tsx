import { useState, createContext, useContext, useEffect } from 'react';

import { orange, light, dark } from './util/colors';

// const defaultVlaue: {
//   changeColor: (color: string) => void;
//   changeTheme: () => void;
//   isDark: boolean;
// } = {
//   changeColor: (color: string) => {},
//   changeTheme: () => {},
//   isDark: false,
// };

const defaultVlaue: {} = {};

const colorsContext = createContext(defaultVlaue);

export const ColorsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = useState(orange);
  const [isDark, setIsDark] = useState(false);

  const changeColor = (color: string) => {
    setColor(color);
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  const value = {
    changeColor,
    changeTheme,
    isDark,
  };

  useEffect(() => {
    const bodyStyles = document.body.style;
    // for accent color
    bodyStyles.setProperty('--primary', color);
    //for theme color
    bodyStyles.setProperty('--primary-background', isDark ? dark : light);
    bodyStyles.setProperty('--primary-text', isDark ? light : dark);
    bodyStyles.setProperty(
      '--shadow',
      isDark ? `-4px 4px 0 ${color}` : `-4px 4px 0 ${dark}`
    );
  }, [color, isDark]);

  return (
    <colorsContext.Provider value={value}>{children}</colorsContext.Provider>
  );
};

export const useColors = () => {
  return useContext(colorsContext);
};
