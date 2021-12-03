
import { ToggleTheme ,theme} from './components/theme/ToggleTheme';
import './App.css';
import React, { useState } from "react";
import { darkTheme, lightTheme  } from './components/theme/Theme'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { MainContext } from "./components/context/userContext";
import Layout from './components/layout/Layout';

function App() {
  const [lovers, setLovers] = useState("PH");
  const [toggleDark, settoggleDark] = useState(false);

  const data = {
    lovers,
    setLovers,
    toggleDark, settoggleDark,
  };


 

  return (
    <React.Fragment> 
       <MainContext.Provider value={data}>

      
 
    <ThemeProvider theme={toggleDark ? darkTheme :lightTheme }> 
  <CssBaseline />
<Layout/>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
       </ThemeProvider>
    </MainContext.Provider>
    </React.Fragment>
  );
}

export default App;
