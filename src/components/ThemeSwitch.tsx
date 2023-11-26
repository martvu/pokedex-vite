import useTheme from '../context/useDarkTheme';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`theme-switch ${darkMode ? 'dark-mode' : ''}`}
    >
      {darkMode ? <MdOutlineLightMode size={20}/> : <MdOutlineDarkMode size={20} />}
    </button>
  );
}

export default ThemeSwitch;
