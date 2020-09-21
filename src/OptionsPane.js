import React from 'react';
import './OptionsPane.css';
import Option from './Option';

function OptionsPane(props) {

  let enginePowers = [];
  for (let power in props.data.enginePowers) {
    let code = props.data.enginePowers[power];
    let obj = {code: code, name: power};
    let selected = code === props.selection.enginePower;
    enginePowers.push(<Option data={obj} onClick={() => props.onClick("enginePower", code)} selected={selected} />); 
  }

  let engineFuels = [];
  for (let fuel in props.data.engineFuels) {
    let code = props.data.engineFuels[fuel];
    let obj = {code: code, name: fuel.toUpperCase()};
    let selected = code === props.selection.engineFuel;
    engineFuels.push(<Option data={obj} onClick={() => props.onClick("engineFuel", code)} selected={selected} />);
  }

  let engineTractions = [];
  for (let traction in props.data.engineTractions) {
    let tractionObj = props.data.engineTractions[traction];
    let selected = tractionObj.code === props.selection.engineTraction;
    engineTractions.push(<Option data={tractionObj} onClick={() => props.onClick("engineTraction", tractionObj.code)} selected={selected} />);
  }

  let colors = [];
  for (let c in props.data.colors) {
    const color = props.data.colors[c];
    const selected = color === props.selection.color;
    colors.push(<Option data={color} onClick={() => props.onClick("color", color)} selected={selected} />);
  }

  let roues = [];
  for (let inches in props.data.roues) {
    roues.push(<div className="category">{inches}"</div>);
    
    let rouesForCategory = [];
    for (let roue of props.data.roues[inches]) {
      const selected = roue.code === props.selection.roues;
      rouesForCategory.push(<Option data={roue} onClick={() => props.onClick("roues", roue.code)} selected={selected}  />);
    }

    roues.push(<div className="content roues alignLeft">{rouesForCategory}</div>);
  }

  let retroviseurs = [];
  for (let retro in props.data.retroviseurs) {
    const code = props.data.retroviseurs[retro].code;
    const selected = code === props.selection.retroviseurs;

    retroviseurs.push(<Option data={props.data.retroviseurs[retro]} onClick={() => props.onClick("retroviseurs", code)} selected={selected} />);
  }

  let vitres = [];
  for (let vitre in props.data.vitres) {
    const code = props.data.vitres[vitre].code;
    const selected = code === props.selection.vitres;

    vitres.push(<Option data={props.data.vitres[vitre]} onClick={() => props.onClick("vitres", code)} selected={selected} />);
  }

  let toits = [];
  for (let toit in props.data.toit) {
    const code = props.data.toit[toit].code;
    const selected = code === props.selection.toit;

    toits.push(<Option data={props.data.toit[toit]} onClick={() => props.onClick("toit", code)} selected={selected} />);
  }

  let packStyles = [];
  for (let pack in props.data.packStyle) {
    const code = props.data.packStyle[pack].code;
    const selected = code === props.selection.packStyle;

    packStyles.push(<Option data={props.data.packStyle[pack]} onClick={() => props.onClick("packStyle", code)} selected={selected} />);
  }

  let phares = [];
  for (let p in props.data.phares) {
    const code = props.data.phares[p].code;
    const selected = code === props.selection.phares;

    phares.push(<Option data={props.data.phares[p]} onClick={() => props.onClick("phares", code)} selected={selected} />);
  }

  let laveProjecteur = [];
  for (let p in props.data.laveProjecteur) {
    const code = props.data.laveProjecteur[p].code;
    const selected = code === props.selection.laveProjecteur;

    laveProjecteur.push(<Option data={props.data.laveProjecteur[p]} onClick={() => props.onClick("laveProjecteur", code)} selected={selected} />);
  }

  let parchocs = [];
  for (let p in props.data.parchocs) {
    const code = props.data.parchocs[p].code;
    const selected = code === props.selection.parchoc;

    parchocs.push(<Option data={props.data.parchocs[p]} onClick={() => props.onClick("parchoc", code)} selected={selected} />);
  }

  let options = [];
  options.push(<div className="title">Moteur</div>);
  options.push(<div className="content enginePowers">{enginePowers}</div>);
  options.push(<div className="content engineFuels">{engineFuels}</div>);
  options.push(<div className="content engineTractions">{engineTractions}</div>);

  options.push(<div className="title">Couleur</div>);
  options.push(<div className="content colors alignCenter">{colors}</div>);

  if (props.selection.model === "stf2jk") {
    options.push(<div className="title">Pare-choc</div>);
    options.push(<div className="content parchoc">{parchocs}</div>);
  }

  options.push(<div className="title">Roues</div>);
  options.push(<div className="content roues columns">{roues}</div>);

  options.push(<div className="title">Rétroviseurs</div>);
  options.push(<div className="content retroviseurs">{retroviseurs}</div>);

  options.push(<div className="title">Vitres</div>);
  options.push(<div className="content vitres">{vitres}</div>);

  options.push(<div className="title">Pack Style</div>);
  options.push(<div className="content packStyle">{packStyles}</div>);

  options.push(<div className="title">Phares</div>);
  options.push(<div className="content phares">{phares}</div>);
  options.push(<div className="content laveProjecteur">{laveProjecteur}</div>);

  options.push(<div className="title">Toit</div>);
  options.push(<div className="content toit">{toits}</div>);

  return (
    <div className="options">
      {options}
    </div>
  );
}

export default OptionsPane;
