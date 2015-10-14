
import React, { Component } from 'react';
import classNames from 'classnames';


export default class Button extends Component {

    static propTypes = {
        id: React.PropTypes.string,
        onClick: React.PropTypes.func,
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.arrayOf(React.PropTypes.element)])
    };

    onClick(e, props) {
        if (this.props.onClick) {
            this.props.onClick(e, props);
        }
    }

    render() {
        const className = classNames('dxp-button', this.props.className);
        return (
            <button id={this.props.id} className={className} onClick={(e) => this.onClick(e, this.props)} disabled={this.props.disabled}>
                {this.props.children}
            </button>);
    }
}
