/** @jsx jsx */
import { jsx } from "theme-ui";
import { useThemeUI, useColorMode } from "theme-ui";
import Brighten from "./Brighten";
import Darken from "./Darken";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      sx={{ variant: "styles.colormodeButton" }}
      onClick={(e) => {
        const nextColorMode = colorMode === "light" ? "dark" : "light";
        setColorMode(nextColorMode);
        // color mode change does not apply without page refresh
        //todo: find a way to apply color mode change without page refresh
        window.location.reload();
      }}
    >
      {colorMode === "light" ? <Darken /> : <Brighten />}
    </button>
  );
};
