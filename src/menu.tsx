import React from 'react';
import { Icon, Menu, Dimmer, Segment, Container } from 'semantic-ui-react'

interface Props {
    isEnabled: boolean;
}

export default class MenuBar extends React.Component<Props, never> {

    constructor(props: Props) {
        super(props);
    }

    public render() {

        const {
            isEnabled
        } = this.props;

        return (
            <div>
                
                        <Menu icon vertical>
                        
                            <Menu.Item name='auto'>
                                <Icon name='magic' />
                            </Menu.Item>
                            <Menu.Item name='crop'>
                                <Icon name='expand' />
                            </Menu.Item>
                            <Menu.Item name='saturation'>
                                <Icon name='sliders horizontal' />
                            </Menu.Item>
                            <Menu.Item name='contrast'>
                                <Icon name='adjust' />
                            </Menu.Item>
                            <Menu.Item name='temperature'>
                                <Icon name='tint' />
                            </Menu.Item>
                            <Menu.Item name='filter'>
                                <Icon name='filter' />
                            </Menu.Item>
                            <Menu.Item name='color select'>
                                <Icon name='eye dropper' />
                            </Menu.Item>
                            <Menu.Item name='edit'>
                                <Icon name='edit' />
                            </Menu.Item>
                        </Menu>
                    

            </div>
        );
    }
}