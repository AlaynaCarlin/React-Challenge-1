import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from "react";

import Input from './components/Input';
import View from './components/View'; 



function App() {
  
  const [nametext, setNameText] = useState('name');
  const [agetext, setAgeText] = useState('age');
  const [hobbiestext, setHobbiesText] = useState('hobbies');

  const updateName = (newName) => {
    setNameText(newName);
  }

  const updateAge = (newAge) => {
    setAgeText(newAge);
  }

  const updateHobbies = (newHobbies) => {
    setHobbiesText(newHobbies);
  }

  return(
    <div className='App'>
      <Input updateName={updateName} updateAge={updateAge} updateHobbies={updateHobbies}/>
      <View nametext={nametext} agetext={agetext} hobbiestext={hobbiestext}/>

      {/* <Input />
      <View /> */}
    </div>
  );
}


export default App;