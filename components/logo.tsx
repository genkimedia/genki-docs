import useTheme from "./components/theme.tsx";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <img src={theme.logo} alt="logo" />
  );
};

export default Logo;
