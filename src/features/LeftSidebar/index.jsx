
import React from 'react';
import MarkButton from 'shared/components/MarkButton';

export default class LeftSidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            opened: false,
            buttonDown: false,
        };

        this.onButtonDown = this.onButtonDown.bind(this);
        this.onButtonUp = this.onButtonUp.bind(this);
    }

    onButtonDown() {
        this.setState({
            buttonDown: true,
        });
    }

    onButtonUp() {
        const { opened } = this.state;

        this.setState({
            opened: !opened,
            buttonDown: false,
        });
    }

    render() {
        const { opened, buttonDown } = this.state;

        return (
            <MarkButton
                active={opened}
                buttonDown={buttonDown}
                onButtonDown={this.onButtonDown}
                onButtonUp={this.onButtonUp}
            />
        );
    }
}
