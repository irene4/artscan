import * as React from 'react';
import HeaderLogo from './HeaderLogo';
import './App.css';
import MenuBar from './menu';
import ImportButton from './importButton'
import Slider from './Slider'
//import 'caman'


export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageURL: null
      ,brightness: 0
      ,contrast:0
      ,saturation: 0
    }
  }

  updateImage = (url: string) => {
    this.setState({ imageURL: url })
  }

  updateEffects = (effect:any, value:any) => {
    this.setState({
       [effect]: value
    })
  }

  render() {
    const {imageURL} = this.state; // Destructuring the state
    return (
      <div className="App">
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <HeaderLogo />
        </div>
        <div id="menubar">
          <MenuBar isEnabled={true} />
        </div>
        <div id="importbtn">
          {imageURL === null && (<ImportButton updateImage={this.updateImage}></ImportButton>)}
        </div>
        <img id="tempimg" data-caman={`brightness(${this.state["brightness"]}) contrast(${this.state["contrast"]})`} src={imageURL}/>
        <div id="slider1">
          <Slider effect="brightness" callbackFunction={this.updateEffects} effectValue={this.state["brightness"]}/>
          <Slider effect="contrast" callbackFunction={this.updateEffects} effectValue={this.state["contrast"]}/>
        </div>      
      </div>
    );
  }
}

//<canvas id="canvas"></canvas>
        //<div id="sliderContainer">
        //  <input id="contrast" name="contrast" type="range" min="-10" max="10" value="0"></input>
        //</div>