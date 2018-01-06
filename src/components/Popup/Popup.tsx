import * as React from 'react';
import './popup-styles.css';

interface PopupProps {
  popup: {
    isShow: boolean,
    title: string,
    content: any
  };
  popupActions: {
    openPopup: any,
    closePopup: any
  };
}

class Popup extends React.Component<PopupProps> {
  constructor(props: PopupProps) {
    super(props);
    this.props = props;
  }

  closePopupClickHandler = (e: any) => {
    this.props.popupActions.closePopup();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    const content = this.props.popup.isShow ?
      <div className="popup">
        <div className="popup-shadow" onClick={this.closePopupClickHandler} />
        <div className="popup-container">
          <div className="popup-box">
            <div className="popup-content">
              <div className="header">
                <span>{this.props.popup.title}</span>
                <i onClick={this.closePopupClickHandler}>Закрыть</i>
              </div>
              <div className="content">
                {this.props.popup.content}
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      null;
    return (content);
  }
}

export default Popup;