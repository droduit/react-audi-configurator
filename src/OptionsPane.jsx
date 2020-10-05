import React from 'react';
import './OptionsPane.scss';
import Option from './Option';



function OptionsPane(props) {

  const optionGroupContent = "optionGroupContent px-2 py-2";
  const titleClassNames = "OptionGroupTitle bg-dark w-100 px-2 py-1 text-light";

  let options = [];

  if (props.displayedFrame === "interior") {

    let sieges = [];
    for (let seatCategory in props.data.interior.sieges) {
      //sieges.push(<div key={"seat-category-"+seatCategory} className="category">{seatCategory}"</div>);

      let seatForCategory = [];
      for (let seat in props.data.interior.sieges[seatCategory]) {
        let codesObj = props.data.interior.sieges[seatCategory][seat];
        let selected = JSON.stringify(codesObj) === JSON.stringify(props.selection.interior.sieges);
        let optsForImg = JSON.parse(JSON.stringify(props.selection));
        optsForImg.interior['perspective'] = props.data.interior.perspectives[0];
        optsForImg.interior['sieges'] = codesObj;
        optsForImg.interior['volant'] = props.data.interior.volants["multi-plus"];
        optsForImg.interior['siegeArriere'] = props.data['interior']['siegeArrieres']['banquette-normale'];
        optsForImg.interior['eclairage'] = props.data['interior']['eclairages']['aucun'];
        optsForImg.interior['ciel'] = props.data['interior']['ciel']['argent'];
        optsForImg.interior['decoration'] = props.data['interior']['decorations']['micromet'];
        optsForImg.interior['element'] = null;
        
        let dataObj = {img: props.getImgUrl(optsForImg), containerWidth: "30%", imgWidth: "100%"};
        sieges.push(<Option key={seatCategory+seat} data={dataObj} onClick={() => props.onClick("sieges", codesObj)} selected={selected} />); 
      }

      //sieges.push(<div key={"seat-content-"+seatCategory} className={optionGroupContent+" seats alignLeft"}>{seatForCategory}</div>);
    }
    options.push(<div key="seats-title" className={titleClassNames}>Sièges</div>);
    options.push(<div key="seats-content" className={optionGroupContent+" type"}>{sieges}</div>);


    let volants = [];
    for (let v in props.data.interior.volants) {
      let obj = props.data.interior.volants[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.volant);
      volants.push(<Option key={v} data={{...obj, imgWidth: "100px"}} onClick={() => props.onClick("volant", obj)} selected={selected} />); 
    }
    options.push(<div key="volant-title" className={titleClassNames}>Volant</div>);
    options.push(<div key="volant-content" className={optionGroupContent+" type"}>{volants}</div>);
    

    let siegesArriere = [];
    for (let v in props.data.interior.siegeArrieres) {
      let obj = props.data.interior.siegeArrieres[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.siegeArriere);
      siegesArriere.push(<Option key={v} data={obj} onClick={() => props.onClick("siegeArriere", obj)} selected={selected} />); 
    }
    options.push(<div key="back-seat-title" className={titleClassNames}>Siège arrière</div>);
    options.push(<div key="back-seat-content" className={optionGroupContent+" type"}>{siegesArriere}</div>);


    let eclairages = [];
    for (let v in props.data.interior.eclairages) {
      let obj = props.data.interior.eclairages[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.eclairage);
      eclairages.push(<Option key={v} data={obj} onClick={() => props.onClick("eclairage", obj)} selected={selected} />); 
    }
    options.push(<div key="eclairage-title" className={titleClassNames}>Eclairage</div>);
    options.push(<div key="eclairage-content" className={optionGroupContent+" type"}>{eclairages}</div>);

    let ciels = [];
    for (let v in props.data.interior.ciel) {
      let obj = props.data.interior.ciel[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.ciel);
      ciels.push(<Option key={v} data={obj} onClick={() => props.onClick("ciel", obj)} selected={selected} />); 
    }
    options.push(<div key="ciel-title" className={titleClassNames}>Ciel de pavillon</div>);
    options.push(<div key="ciel-content" className={optionGroupContent+" type"}>{ciels}</div>);


    let decorations = [];
    for (let v in props.data.interior.decorations) {
      let obj = props.data.interior.decorations[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.decoration);
      decorations.push(<Option key={v} data={obj} onClick={() => props.onClick("decoration", obj)} selected={selected} />); 
    }
    options.push(<div key="decoration-title" className={titleClassNames}>Insert décoratifs</div>);
    options.push(<div key="decoration-content" className={optionGroupContent+" type"}>{decorations}</div>);


    let elements = [];
    for (let v in props.data.interior.elements) {
      let obj = props.data.interior.elements[v];
      let selected = JSON.stringify(obj) === JSON.stringify(props.selection.interior.element);
      elements.push(<Option key={v} data={obj} onClick={() => props.onClick("element", obj)} selected={selected} />); 
    }
    options.push(<div key="element-title" className={titleClassNames}>Éléments d'équipement intérieur</div>);
    options.push(<div key="element-content" className={optionGroupContent+" type"}>{elements}</div>);


    
  } else {
    let roues = [];
    for (let inches in props.data.roues) {
      roues.push(<div key={"roues-category-"+inches} className="category">{inches}"</div>);
      
      let rouesForCategory = [];
      for (let roue of props.data.roues[inches]) {
        const selected = roue.code === props.selection.roues;
        roue.imgWidth = props.data.wheels.size+"px";
        rouesForCategory.push(<Option key={roue.code} data={roue} onClick={() => props.onClick("roues", roue.code)} selected={selected}  />);
      }

      roues.push(<div key={"roues-content-"+inches} className={optionGroupContent+" roues alignLeft"}>{rouesForCategory}</div>);
    }

    let enginePowers = [];
    for (let power in props.data.enginePowers) {
      let code = props.data.enginePowers[power];
      let obj = {code: code, name: power};
      let selected = code === props.selection.enginePower;
      enginePowers.push(<Option key={code} data={obj} onClick={() => props.onClick("enginePower", code)} selected={selected} />); 
    }

    let engineFuels = [];
    for (let fuel in props.data.engineFuels) {
      let code = props.data.engineFuels[fuel];
      let obj = {code: code, name: fuel.toUpperCase()};
      let selected = code === props.selection.engineFuel;
      engineFuels.push(<Option key={code} data={obj} onClick={() => props.onClick("engineFuel", code)} selected={selected} />);
    }

    let engineTractions = [];
    for (let traction in props.data.engineTractions) {
      let tractionObj = props.data.engineTractions[traction];
      let selected = tractionObj.code === props.selection.engineTraction;
      engineTractions.push(<Option key={tractionObj.code} data={tractionObj} onClick={() => props.onClick("engineTraction", tractionObj.code)} selected={selected} />);
    }

    let colors = [];
    for (let c in props.data.colors) {
      const color = props.data.colors[c];
      const selected = color === props.selection.color;
      colors.push(<Option key={color.code+color.codeImg} data={color} onClick={() => props.onClick("color", color)} selected={selected} />);
    }

    let retroviseurs = [];
    for (let retro in props.data.retroviseurs) {
      const code = props.data.retroviseurs[retro].code;
      const selected = code === props.selection.retroviseurs;

      retroviseurs.push(<Option key={code} data={props.data.retroviseurs[retro]} onClick={() => props.onClick("retroviseurs", code)} selected={selected} />);
    }

    let vitres = [];
    for (let vitre in props.data.vitres) {
      const code = props.data.vitres[vitre].code;
      const selected = code === props.selection.vitres;

      vitres.push(<Option key={code} data={props.data.vitres[vitre]} onClick={() => props.onClick("vitres", code)} selected={selected} />);
    }

    let toits = [];
    for (let toit in props.data.toit) {
      const code = props.data.toit[toit].code;
      const selected = code === props.selection.toit;

      toits.push(<Option key={code} data={props.data.toit[toit]} onClick={() => props.onClick("toit", code)} selected={selected} />);
    }

    let packStyles = [];
    for (let pack in props.data.packStyle) {
      const code = props.data.packStyle[pack].code;
      const selected = code === props.selection.packStyle;

      packStyles.push(<Option key={code} data={props.data.packStyle[pack]} onClick={() => props.onClick("packStyle", code)} selected={selected} />);
    }

    let phares = [];
    for (let p in props.data.phares) {
      const code = props.data.phares[p].code;
      const selected = code === props.selection.phares;

      phares.push(<Option key={code} data={props.data.phares[p]} onClick={() => props.onClick("phares", code)} selected={selected} />);
    }

    let laveProjecteur = [];
    for (let p in props.data.laveProjecteur) {
      const code = props.data.laveProjecteur[p].code;
      const selected = code === props.selection.laveProjecteur;

      laveProjecteur.push(<Option key={code} data={props.data.laveProjecteur[p]} onClick={() => props.onClick("laveProjecteur", code)} selected={selected} />);
    }

    let parchocs = [];
    for (let p in props.data.parchocs) {
      const code = props.data.parchocs[p].code;
      const selected = code === props.selection.parchoc;

      parchocs.push(<Option key={code} data={props.data.parchocs[p]} onClick={() => props.onClick("parchoc", code)} selected={selected} />);
    }

    let typesAudi = [];
    for (let p in props.data.modelsAudi) {
      const code = props.data.modelsAudi[p].code;
      const selected = code === props.selection.modelAudi;
      let objData = props.data.modelsAudi[p];
      objData.imgWidth = "150px";

      typesAudi.push(<Option key={code} data={objData} onClick={() => props.onClick("modelAudi", code)} selected={selected} />);
    }


    options.push(<div key="modele-title" className={titleClassNames}>Modèle</div>);
    options.push(<div key="modele-content" className={optionGroupContent+" type"}>{typesAudi}</div>);

    options.push(<div key="engine-title" className={titleClassNames}>Moteur</div>);
    options.push(<div key="engine-power-content" className={optionGroupContent+" enginePowers"}>{enginePowers}</div>);
    options.push(<div key="engine-fuels-content" className={optionGroupContent+" engineFuels"}>{engineFuels}</div>);
    options.push(<div key="engine-tractions-content" className={optionGroupContent+" engineTractions"}>{engineTractions}</div>);

    options.push(<div key="color-title" className={titleClassNames}>Couleur</div>);
    options.push(<div key="color-content" className={optionGroupContent+" colors alignCenter"}>{colors}</div>);

    if (props.selection.modelLine === "stf2jk") {
      options.push(<div key="parechoc-title" className={titleClassNames}>Pare-choc</div>);
      options.push(<div key="parechoc-content" className={optionGroupContent+" parchoc"}>{parchocs}</div>);
    }

    options.push(<div key="roues-title" className={titleClassNames}>Roues</div>);
    options.push(<div key="roues-size" className={optionGroupContent}><input className="w-100" defaultValue={props.data.wheels.size} type="range" min="60" max="200" onInput={(e) => props.data.wheels.updateSizeHandler(e.target.value)} /></div>);
    options.push(<div key="roues-content" className={optionGroupContent+" columns"}>{roues}</div>);

    options.push(<div key="retro-title" className={titleClassNames}>Rétroviseurs</div>);
    options.push(<div key="retro-content" className={optionGroupContent+" retroviseurs"}>{retroviseurs}</div>);

    options.push(<div key="windows-title" className={titleClassNames}>Vitres</div>);
    options.push(<div key="windows-content" className={optionGroupContent+" vitres"}>{vitres}</div>);

    options.push(<div key="packstyle-title" className={titleClassNames}>Pack Style</div>);
    options.push(<div key="packstyle-content" className={optionGroupContent+" packStyle"}>{packStyles}</div>);

    options.push(<div key="headlights-title" className={titleClassNames}>Phares</div>);
    options.push(<div key="headlights-content" className={optionGroupContent+" phares"}>{phares}</div>);
    options.push(<div key="washer-content" className={optionGroupContent+" laveProjecteur"}>{laveProjecteur}</div>);

    options.push(<div key="panoRoof-title" className={titleClassNames}>Toit</div>);
    options.push(<div key="panoRoof-content" className={optionGroupContent+" toit"}>{toits}</div>);
  }

  return (
      <div className="sidebar-sticky">
        {options}
      </div>
  );
}

export default OptionsPane;
