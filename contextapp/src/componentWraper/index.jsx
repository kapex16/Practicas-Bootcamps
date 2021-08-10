import React from "react";


const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
 export const ThemeContext= React.createContext(themes.light);


  function ContextTheme({children}){

    
    return(

        <ContextTheme.Provider  value={themes.dark}>
            {children}
        </ContextTheme.Provider>

    )

}
export default ContextTheme;
