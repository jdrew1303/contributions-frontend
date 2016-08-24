import React from 'react';

export default class InputField extends React.Component {
    render() {
        const { outerClassName, children, optional, ...props } = this.props;

        return <div className={outerClassName || ''}>
            <label htmlFor={this.props.id} className="label">{this.props.label}
                {optional && <span className="label-optional">(optional)</span>}
            </label>
            <input {...props} className={'input-text contribute-controls__input ' + (props.className || '')} />
            {children}
        </div>;
    }
}
