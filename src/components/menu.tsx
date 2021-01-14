import React from 'react';
import { Icon, Menu, Dimmer, Segment, Container } from 'semantic-ui-react'

interface Props {
    isEnabled: boolean;
}

export default class MenuBar extends React.Component<any, any> {
    //<Props, never> {
    //state = { activeItem: '' }

    constructor(props: Props) {
        super(props);
    }

    handleClick = (e:any, name:any) => {
        if(this.props.isEnabled) {
            if(this.props.activeItem !== name.name) {
                this.props.setActive(name.name)
            }
            else {
                const none = null;
                this.props.setActive(none) 
            }
        }
    }

    public render() {

        const {
            isEnabled
        } = this.props;

        return (
            <div>
                
                        <Menu color='yellow' icon vertical>
                        
                            <Menu.Item
                                name='auto'
                                data-tooltip="Auto" data-position="right center"
                                active={this.props.activeItem === 'auto'}
                                onClick={this.props.auto}
                            >
                                <Icon name='magic' />
                            </Menu.Item>
                            <Menu.Item
                                name='brightness'
                                data-tooltip="Brightness" data-position="right center"
                                active={this.props.activeItem === 'brightness'}
                                onClick={this.handleClick}
                            >
                                ☼
                            </Menu.Item>
                            <Menu.Item
                                name='contrast'
                                data-tooltip="Contrast" data-position="right center"
                                active={this.props.activeItem === 'contrast'}
                                onClick={this.handleClick}
                            >
                                <Icon name='adjust' />
                            </Menu.Item>
                            <Menu.Item disabled
                                name='saturation'
                                active={this.props.activeItem === 'saturation'}
                                onClick={this.handleClick}
                            >
                                <Icon name='sliders horizontal' />
                            </Menu.Item>
                            <Menu.Item disabled name='temperature'>
                                <Icon name='tint' />
                            </Menu.Item>
                            <Menu.Item disabled name='filter'>
                                <Icon name='filter' />
                            </Menu.Item>
                            <Menu.Item disabled name='crop'>
                                <Icon name='expand' />
                            </Menu.Item>
                            <Menu.Item disabled name='edit'>
                                <Icon name='edit' />
                            </Menu.Item>
                        </Menu>
            </div>
        );
    }
}