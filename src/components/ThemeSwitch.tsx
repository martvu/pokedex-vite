import useTheme from '../context/useDarkTheme';

function ThemeSwitch() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleDarkMode}
      className={`theme-switch ${darkMode ? 'dark-mode' : ''}`}
    >
        {darkMode ? 'Turn Light' : 'Turn Dark'}
    </button>
  );
}

export default ThemeSwitch;