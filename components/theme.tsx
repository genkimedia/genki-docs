const themes = {
  light: {
    logo: "/img/Logo-dark.svg"
  },
  dark: {
    logo: "/img/logo-light.svg"
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return { theme, toggleTheme };
};

export default useTheme;
