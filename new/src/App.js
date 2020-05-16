import React from 'react';
import './App.css';
import MenuBar from './Components/MenuBar';
import ListHotels from './Components/ListHotels';
import { Provider } from 'react-redux'
import store from './Reducers/RootReducer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MenuBar />
        <ListHotels />
      </div>
    </Provider>
  );
}

export default App;
