import React from 'react';
import './Color.css';

function Color(props) {
    let classNames = ["colorWrapper"];
    if (props.selected) {
        classNames.push("selected");
    }

    let illustration = [];
    if (props.data.img) {
        illustration.push(<img
            key={Math.round(Math.random() * 10)}
            className="color"
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
  
export default Color;