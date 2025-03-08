import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import React from 'react';
import Productcard from './components/productcard.jsx';

function App() {
    return (
    <div className='app'>
      <Productcard
      productimage ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zU87Rg26gF5DVCYoH5P8SAAPHEyqbJaXLg&s" 
      productname="heman"
      price="10000"
      productbutton="VIEW PRODUCT"
        />
    </div>
  );
}

export default App;