import React, { Component } from 'react'
import { Icon, Button, } from 'semantic-ui-react'

export default class SaveOrDelete extends Component<any, any> {

  constructor(props: any) {
    super(props)
    this.rmvImg = this.rmvImg.bind(this)
  }

  rmvImg(e: any) {
    const url = null;
    const active = null;
    this.props.updateImage(url);
    this.props.setActive(active)
    this.props.removeEffect('brightness', 0);
    this.props.removeEffect('contrast', 0);
  }

  render() {
    return (
        <Button.Group>
            <Button color='yellow'>Save</Button>
            <Button.Or />
            <Button negative circular icon='x' onClick={(e) => { this.rmvImg(e) }} />
        </Button.Group>
    )
  }
}