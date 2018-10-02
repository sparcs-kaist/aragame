import React, { Component } from 'react';
import './App.css';



class App extends Component {
  
  componentDidMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
        
    script1.src = "./js/controller.js";
    script1.async = true;
    script2.src = "./js/render.js";
    script2.async = true;
    script3.src = "./js/tetris.js";
    script3.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
  }


  
  render() {
    return (
      <div className="App">
        <canvas width='300' height='600'></canvas>
        <button id="playbutton" onClick={() => playButtonClicked()}>Play</button>
      </div>
    );
  }
}

export default App;
