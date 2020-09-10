import React from 'react';
import './loadingscreen.css';
import {Loader} from 'semantic-ui-react';

function loadingscreen() {
    return (
        <div style={{backgroundColor:"rgb(22, 22, 22)"}}>
            <Loader mini active inverted/>
            <div className="centeredbox">
                <div className="pulse">
                <div className="sqr">
                    <img src="./cmyk-artscan.png"/>
                    <Loader mini active inverted/>
                </div>
                </div>
            </div>
        </div>
    );
  }

  export default loadingscreen;