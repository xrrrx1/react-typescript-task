import * as React from 'react';
import './button-styles.css';

export interface ButtonProps {
    title: string;
    classForButton: string;
    clickHandler: any;
  }
  
  class Button extends React.Component<ButtonProps > {
      render() {
          const {title, classForButton, clickHandler} = this.props;
          return (
              <button className={classForButton} onClick={clickHandler}>{title}</button>
          );
      }
  }
  
  export default Button;