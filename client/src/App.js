import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <Router>
        <AllPets path="/"/>
        <PetDetails path="/:_id"/>
        <NewPet path="/new"/>
        <EditPet path="/edit/:_id"/>
        <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;
