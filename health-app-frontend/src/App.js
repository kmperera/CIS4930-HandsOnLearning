import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Homepage from './Homepage/Homepage';

//I'm moving all of the 'homepage' JSX to the /Homepage folder.
//sorry for any confusion, but it lets us render entire pages easier and should help with organization later down the line.
//don't touch the app function again, it's going to be used to route all pages.

function App() {
  return (
    <Homepage />
  );
}
export default App;
