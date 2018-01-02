import * as React from 'react';
import '../styles/header-styles.css';

export interface ButtonProps {
  title: string;
  classForButton: string;
}

class Button extends React.Component<ButtonProps > {
    render() {
        const {title, classForButton} = this.props;
        return (
            <button className={classForButton}>{title}</button>
        );
    }
}

export default Button;