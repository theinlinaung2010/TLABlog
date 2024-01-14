/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { FaSun, FaMoon } from "react-icons/fa";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === "light" ? "dark" : "light";

  return (
    <button
      sx={{ variant: "styles.colormodeButton", alignItems: "center" }}
      onClick={(e) => {
        setColorMode(nextColorMode);
      }}
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};
