import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from './components/Counter';

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <ImageSlider />
        <Counter />
      </div>
    );
  }
}

export default App;
