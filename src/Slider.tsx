import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class Slider extends Component<any, any> {
    //state = { contrast: 0 }

    constructor(props: any) {
        super(props)
        this.update = this.update.bind(this)
      }

    //update() {
    //    this.setState(contrast: value);
    //}
    update = (e:any, value: any) => {
        //this.setState({ contrast: value.value })
        this.props.callbackFunction(this.props.effect, parseInt(value.value))
        //console.log(value.value)
      }

    render() {
        //const { contrast } = this.state

        return (
            <Form.Input
              //label="Value"
              min={-50}
              max={50}
              //name='Contrast'
              onChange={this.update}
              step={1}
              type='range'
              value={this.props.effectValue}
              />
              )
            }
        }
        
        //value=0;
//var canvas = new SimpleCanvas("mycanvas");

            //<div id="sliderContainer">
            //    <input id="contrast" name="contrast" type="range" min="-10" max="10" value="0"></input>
            //</div>
