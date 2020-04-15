import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class Slider extends Component<any, any> {
    //state = { contrast: 0 }

    constructor(props: any) {
        super(props)
        this.update = this.update.bind(this)
      }

    update = (e:any, value: any) => {
        this.props.callbackFunction(this.props.effect, parseInt(value.value))
      }

    render() {
        //const { contrast } = this.state

        return (
            <Form.Input
              min={-50}
              max={50}
              //label={this.props.effect}
              onChange={this.update}
              step={5}
              type='range'
              value={this.props.effectValue*100}
              />
              )
            }
        }
        
        //value=0;
//var canvas = new SimpleCanvas("mycanvas");

            //<div id="sliderContainer">
            //    <input id="contrast" name="contrast" type="range" min="-10" max="10" value="0"></input>
            //</div>
