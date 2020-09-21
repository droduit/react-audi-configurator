import React from 'react';
import './Option.css';

function Option(props) {
    let classNames = ["optionWrapper"];
    if (props.selected) {
        classNames.push("selected");
    }

    let illustration = [];
    if (props.data.img) {
        illustration.push(<img
            key={Math.round(Math.random() * 10)}
            className="option"
            alt={props.data.name}
            width="64px"
            src={props.data.img}
        />);
    }

    return (
        <div className={classNames.join(" ")} onMouseOver={props.onClick}>
            {illustration}
            <div>{props.data.name}</div>
        </div>
    );
}
  
export default Option;