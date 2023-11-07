import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Excercises from './Exercises/Excercises'
import Evaluations from './Evaluations/Evaluations'
import StayConnected from './StayConnected/StayConnected'
import Useful from './Useful/Useful'

//I'm moving all of the 'homepage' JSX to the /Homepage folder.
//sorry for any confusion, but it lets us render entire pages easier and should help with organization later down the line.
//don't touch the app function again, it's going to be used to route all pages.

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/excercises" element = {<Excercises/>}></Route>
        <Route path="/evaluations" element = {<Evaluations/>}></Route>
        <Route path="/StayConnected" element = {<StayConnected/>}></Route>
        <Route path="/useful" element = {<Useful/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
