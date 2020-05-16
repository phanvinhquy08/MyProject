import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moduleName from 'material-ui/'

import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import FindImg from './Components/Search/FindImg';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Navbar />
        <FindImg />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
