import ContextTheme from "../componentWraper";
import {useContext } from "react";

function ThemeButton() {
  const theme = useContext(ContextTheme);
  return (

    <div>
      <h1>Pagina Para Cambio</h1>
      <button style={{ background: theme.background, color: theme.foreground }}>
        Cambia de Theme Page!
      </button>
    </div>
  );
}
export default ThemeButton;
