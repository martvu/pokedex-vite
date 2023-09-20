import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function useDarkTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useDarkTheme;
