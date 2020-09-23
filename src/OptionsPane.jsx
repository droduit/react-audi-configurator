import React from 'react';
import './OptionsPane.scss';
import Option from './Option';



function OptionsPane(props) {

  const optionGroupContent = "optionGroupContent px-2 py-2";

  let roues = [];
  for (let inches in props.data.roues) {
    roues.push(<div className="category">{inches}"</div>);
    
    let rouesForCategory = [];
    for (let roue of props.data.roues[inches]) {
      const selected = roue.code === props.selection.roues;
      roue.imgWidth = props.data.wheels.size+"px";
      rouesForCategory.push(<Option data={roue} onClick={() => props.onClick("roues", roue.code)} selected={selected}  />);
    }

    roues.push(<div className={optionGroupContent+" roues alignLeft"}>{rouesForCategory}</div>);
  }

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

  let typesAudi = [];
  for (let p in props.data.modelsAudi) {
    const code = props.data.modelsAudi[p].code;
    const selected = code === props.selection.modelAudi;
    let objData = props.data.modelsAudi[p];
    objData.imgWidth = "150px";

    typesAudi.push(<Option  data={objData} onClick={() => props.onClick("modelAudi", code)} selected={selected} />);
  }

  const titleClassNames = "OptionGroupTitle bg-dark w-100 px-2 py-1 text-light";
  

  let options = [];
  options.push(<div className={titleClassNames}>Modèle</div>);
  options.push(<div className={optionGroupContent+" type"}>{typesAudi}</div>);

  options.push(<div className={titleClassNames}>Moteur</div>);
  options.push(<div className={optionGroupContent+" enginePowers"}>{enginePowers}</div>);
  options.push(<div className={optionGroupContent+" engineFuels"}>{engineFuels}</div>);
  options.push(<div className={optionGroupContent+" engineTractions"}>{engineTractions}</div>);

  options.push(<div className={titleClassNames}>Couleur</div>);
  options.push(<div className={optionGroupContent+" colors alignCenter"}>{colors}</div>);

  if (props.selection.modelLine === "stf2jk") {
    options.push(<div className={titleClassNames}>Pare-choc</div>);
    options.push(<div className={optionGroupContent+" parchoc"}>{parchocs}</div>);
  }

  options.push(<div className={titleClassNames}>Roues</div>);
  options.push(<div className={optionGroupContent}><input className="w-100" value={props.data.wheels.size} type="range" min="60" max="200" onInput={(e) => props.data.wheels.onUpdateSizeHandler(e.target.value)} /></div>);
  options.push(<div className={optionGroupContent+" columns"}>{roues}</div>);

  options.push(<div className={titleClassNames}>Rétroviseurs</div>);
  options.push(<div className={optionGroupContent+" retroviseurs"}>{retroviseurs}</div>);

  options.push(<div className={titleClassNames}>Vitres</div>);
  options.push(<div className={optionGroupContent+" vitres"}>{vitres}</div>);

  options.push(<div className={titleClassNames}>Pack Style</div>);
  options.push(<div className={optionGroupContent+" packStyle"}>{packStyles}</div>);

  options.push(<div className={titleClassNames}>Phares</div>);
  options.push(<div className={optionGroupContent+" phares"}>{phares}</div>);
  options.push(<div className={optionGroupContent+" laveProjecteur"}>{laveProjecteur}</div>);

  options.push(<div className={titleClassNames}>Toit</div>);
  options.push(<div className={optionGroupContent+" toit"}>{toits}</div>);

  return (
      <div className="sidebar-sticky">
        {options}
      </div>
  );
}

export default OptionsPane;
