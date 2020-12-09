import React, { useState } from 'react';
import   './App.css';
import SimpleForm from './SimpleForm/SimpleForm';
import Person from './Person/Person';
import Radium from 'radium';

const App = () => {
    return (
      <>
      <div className = "header">
        <h2>Heloo!!!</h2>
        <p></p>
      </div>
      </>
    )
}

export default Radium(App);
