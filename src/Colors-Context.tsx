import { useState, createContext, useContext } from 'react';

import { orange, light, dark } from './util/colors';

const defaultVlaue = {};

const colorsContext = createContext(defaultVlaue);

export const ColorsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = useState(orange);
  const [isDark, setIsDark] = useState(false);

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

  const value = {
    changeColor: setColor,
    changeTheme: setIsDark,
  };

  return (
    <colorsContext.Provider value={value}>{children}</colorsContext.Provider>
  );
};

export const useColors = () => {
  return useContext(colorsContext);
};
