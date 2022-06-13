import React from 'react';
import Navigation from './src/Navigation/navigation';
import {Provider} from "react-redux";
import store from "./src/redux/state";
// import Navigation from './src/Navigation/navigation';

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
        );
}
