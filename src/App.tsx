import * as React from 'react';
import HeaderLogo from './HeaderLogo';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import MenuBar from './menu';
import ImportButton from './importButton'


export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageURL: null
    }
  }

  updateImage = (url: string) => {
    this.setState({ imageURL: url })
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
        <img src={imageURL}/>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}

