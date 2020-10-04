import React from 'react';
import './Option.scss';

function Option(props) {
    let wrapperClassNames = "optionWrapper";
    
    let wrapperStyle = {};
    if (props.data.containerWidth) {
        wrapperStyle = {width: props.data.containerWidth};
    }

    let textClassNames = "";
    let illustration = [];
    if (props.data.img) {
        let imgWidth = "64px";
        if (props.data.imgWidth) {
            imgWidth = props.data.imgWidth;
        }

        illustration.push(
        <img
            key={Math.round(Math.random() * 10)}
            className="option"
            alt={props.data.name}
            style={{width:imgWidth}}
            src={props.data.img}
        />);
        if (props.selected) {
            wrapperClassNames += " selected";
        }
    } else {
        textClassNames += "btn btn-sm";
        textClassNames += props.selected ? " btn-dark active" : " btn-secondary";
    }

    return (
        <div className={wrapperClassNames} onMouseOver={props.onClick} style={wrapperStyle}>
            {illustration}
            <div className={textClassNames}>{props.data.name}</div>
        </div>
    );
}
  
export default Option;