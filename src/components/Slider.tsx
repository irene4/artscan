import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import debounce from 'lodash/debounce';

export default class Slider extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.update = this.update.bind(this)
        this.state = {
          sliderVal: this.props.effectValue
        }
    }

    update = debounce((e:any, value: any) => {
        this.props.callbackFunction(this.props.effect, parseInt(value.value))
      }, 200);

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
            value={ this.props.effectValue*(100) }
          />
        )
    }
}