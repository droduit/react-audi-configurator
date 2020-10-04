import React from 'react';
import './App.scss';
import OptionsPane from './OptionsPane';
import options from './options';

const modelName = "Audi Q3 Sportback 2021";
      
function getImageUrl(opts) {
  const url = "http://mediaservice.audi.com/media/live/50450/$perspective$/$enginePower$-0/2021/14+$color$/aaue0a/aed1ts/aer0p0/ahv1d0/ase6xk/asl5sl/asr5ru/asy0k4/$engineTraction$/ausa9b/bah2em/bav1zk/$retroviseurs$/$toit$/dfh1jc/edf0ij/eil7m0/eph7x2/fls8k4/$engineFuel$/hes5j1/him6nj/hsw8it/kark4h/kasqk1/kds4h5/krs1a5/ksuka0/kzt31b/leal0l/$phares$/lra1xw/lrvav1/mdsfm0/motd8i/nav7ug/onlel5/pamgp0/rad$roues$/rcoer1/reihh1/sbr8vm/$vitres$/sdh4e7/spu79d/$modelLine$/$laveProjecteur$/tkv4i2/twu1sa/tyz2z8/vtv9ze/wss4gf/zbr2wa/$packStyle$/zuh9m0/$lc_pr_aeexc$codeImg$.jpeg";

  var urlPhoto = url;
  if (opts['modelLine'] === "stf2jk") {
    urlPhoto = urlPhoto.replace('$modelLine$', opts['parchoc']);
  } else {
    urlPhoto = urlPhoto.replace('$modelLine$', opts['modelLine']);
  }
  urlPhoto = urlPhoto.replace('$perspective$', opts['perspective']);
  urlPhoto = urlPhoto.replace('$color$', opts['color'].code);
  urlPhoto = urlPhoto.replace('$retroviseurs$', opts['retroviseurs']);
  urlPhoto = urlPhoto.replace('$roues$', opts['roues']);
  urlPhoto = urlPhoto.replace('$vitres$', opts['vitres']);
  urlPhoto = urlPhoto.replace("$toit$", opts['toit']);
  urlPhoto = urlPhoto.replace("$packStyle$", opts['packStyle']);
  urlPhoto = urlPhoto.replace("$phares$", opts['phares']);
  urlPhoto = urlPhoto.replace("$laveProjecteur$", opts['laveProjecteur']);
  if (opts['modelAudi'] === "f3bary") {
    urlPhoto = urlPhoto.replace("$enginePower$", opts['modelAudi']);
  } else {
    urlPhoto = urlPhoto.replace("$enginePower$", opts['enginePower']);
  }
  urlPhoto = urlPhoto.replace("$engineTraction$", opts['engineTraction']);
  urlPhoto = urlPhoto.replace("$engineFuel$", opts['engineFuel']);
  urlPhoto = urlPhoto.replace("$codeImg$", opts['color'].codeImg);
  
  return urlPhoto;
}

function getImageUrlInterior(opts) {
  const url = "https://mediaservice.audi.com/media/live/50450/$perspective$/f3nary-0/2021/14+n8n8/$code1$/aaue0a/aed1ts/afhug1/aib4uf/algqe0/ase6xk/asl5sl/asr5ru/asy0k0/ata1x1/ausa9b/bbo6fa/blbb0a/cha2h6/chrqj0/dei3fa/dekgt6/dfo6f4/edf0ij/eih5ma/eph7x2/esi7w1/essui2/feu6a0/fhwvf0/fsbuh1/gmot3y/gra8t8/gspg1d/him6nj/his5kr/hka9ak/insu5a/irs4l6/kark5a/kasqk1/kds4h5/krs0f5/ksa5c0/ksi3g4/lcpqq0/leal0l/ler3h0/lia8g1/lor7p0/lra1xw/lse9vd/$code3$/mas6e3/mdsfm0/mfa9s1/moaix2/nav7ug/nnnfz1/onlel5/pamgp0/raoi8t/rau9ja/rcoer1/rufnz4/sab4x3/sctql1/sdh4e7/sgk1i0/$code2$/sie3l3/sih4a3/siz0lf/sna7l6/spu79d/stf2jb/tkv4i2/vbk1t3/$code4$/vtv9ze/wss4gf/$code5$zfm0td/zkv3b4/zuh9m0.jpeg";

  let urlPhoto = url;
  urlPhoto = urlPhoto.replace('$perspective$', opts['perspective']);
  urlPhoto = urlPhoto.replace('$code1$', opts['sieges']['code1']);
  urlPhoto = urlPhoto.replace('$code2$', opts['sieges']['code2']);
  urlPhoto = urlPhoto.replace('$code3$', opts['sieges']['code3']);
  urlPhoto = urlPhoto.replace('$code4$', opts['sieges']['code4']);
  let code5 = opts['sieges']['code5'] ?? '';
  if (code5.length > 0) { code5 += "/"; }
  urlPhoto = urlPhoto.replace('$code5$', code5);

  return urlPhoto;
}

function objExistInArray(array, obj) {
  delete obj['perspective'];
  for (let a in array) {
    let entry = array[a];
    delete entry['perspective'];
    if (JSON.stringify(entry) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}

const lsConfHistory = "confHistory";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected : {
        modelAudi : options['modelsAudi']['q3-sportback'].code,
        modelLine: options['modelLines']['attraction'].code,
        perspective : options['perspectives']['side-front'],
        enginePower: options['enginePowers'][35],
        engineTraction: options['engineTractions']['avant'].code,
        engineFuel: options['engineFuels']['tfsi'],
        color: options['colors']['blanc-glacier'],
        parchoc: options['parchocs']['contrast'].code,
        retroviseurs: options['retroviseurs']['black'].code,
        roues: options['roues']['20'][0].code,
        vitres: options['vitres']['tainted'].code,
        toit: options['toit']['sans'].code,
        packStyle : options['packStyle']['noir'].code,
        phares: options['phares']['led'].code,
        laveProjecteur: options['laveProjecteur']['sans'].code,
        interior: {
          perspective: options['interior']['perspectives'][0],
          sieges: options['interior']['sieges']['cuir-mono-pur550']['beige-nacre']
        }
      },
      wheelsSize : 64,
      displayedFrame : "showroom",
      confHistory : localStorage.getItem(lsConfHistory) ? JSON.parse(localStorage.getItem(lsConfHistory)) : {}
    };
  }

  handleClick(type, code) {
    const selected = { ...this.state.selected, [type]: code }
    this.setState(() => ({ selected }))
  }

  handleClickInterior(type, code) {
    let selected = { ...this.state.selected };
    selected.interior[type] = code;
    this.setState(() => ({ selected }))
  }

  handleClickSaveBtn() {
    let currentHistory = {...this.state.confHistory};
    
    let config = JSON.parse(JSON.stringify(this.state.selected));

    if (!objExistInArray(Object.values(currentHistory).map(o => o.config), config)) {
      currentHistory[Date.now()] = {config: config, name: null};
    }
    this.setState({confHistory: currentHistory, displayedFrame: "history"});
  }

  handleClickConfigsBtn() {
    this.setState({displayedFrame:"history"});
  }

  handleLoadConfig(config) {
    this.setState({selected: config, displayedFrame:"showroom"});
  }

  handleCloseHistory() {
    this.setState({displayedFrame:"showroom"});
  }

  handleRemoveConfigFromHistory(i) {
    let currentHistory = {...this.state.confHistory};
    
    let newHistory = {};
    for (let idxHist in currentHistory) {
      if (idxHist !== i) {
        newHistory[idxHist] = currentHistory[idxHist];
      }
    }
    
    let newState = {confHistory: newHistory};
    if (Object.keys(newHistory).length === 0) {
      newState["displayedFrame"] = "showroom";
    }
    this.setState(newState);
  }

  updateWheelsSize(size) {
    this.setState({wheelsSize: size});
  }

  handleFrameChange(frame) {
    this.setState({displayedFrame: frame});
  }

  render() {
    localStorage.setItem(lsConfHistory, JSON.stringify(this.state.confHistory));

    let perspectives = [];
    let persOpts = {
      options: options['perspectives'],
      selection: this.state.selected,
      image: (opts) => getImageUrl(opts),
      onEvent: (type, code) => this.handleClick(type, code)
    };
    if (this.state.displayedFrame === "interior") {
      persOpts.options = options.interior['perspectives'];
      persOpts.selection = this.state.selected.interior;
      persOpts.image = (opts) => { return getImageUrlInterior(opts); };
      persOpts.onEvent = (type, code) => this.handleClickInterior(type, code)
    } 

    for (let o in persOpts.options) {
      let perspCode = persOpts.options[o];

      let opts = Object.assign({}, persOpts.selection);
      opts.perspective = perspCode;

      let classNames = "";
      if (persOpts.selection.perspective === perspCode) {
          classNames += "selected";
      }

      perspectives.push(<img className={classNames} key={o} src={persOpts.image(opts)} alt={o} onMouseOver={() => persOpts.onEvent("perspective", perspCode)} />);
    }

    let modelLines = [];
    for (let m in options['modelLines']) {
      let model = options['modelLines'][m];
      let classNames = "btn btn-sm ";
      classNames += this.state.selected.modelLine === model.code ? "active btn-light" : "btn-secondary";
      
      modelLines.push(<div key={m} className={classNames} onMouseOver={() => this.handleClick("modelLine", model.code)}>{model.name}</div>);
    }

    let wheels = {
      size: this.state.wheelsSize,
      updateSizeHandler : (size) => this.updateWheelsSize(size)
    };


    let savedConfigs = [];
    for (let i of Object.keys(this.state.confHistory).reverse()) {
      let item = this.state.confHistory[i];
      let classNames = "history-item";

      let actualSelection = {...this.state.selected};
      delete actualSelection.perspective;

      if (JSON.stringify(item.config) === JSON.stringify(actualSelection)) {
        classNames += " active";
      } 

      item.config.perspective = options.perspectives['side-front'];
      savedConfigs.push(
      <div key={"conf-hist-"+i} className="position-relative history-item-wrapper">
        <div className={classNames} onClick={() => this.handleLoadConfig(item.config)}
        style={{backgroundImage: "url("+getImageUrl(item.config)+")"}}></div>
        <div className="remove btn btn-danger p-0 px-1" onClick={() => this.handleRemoveConfigFromHistory(i)}>X</div>
      </div>);
    }
    

    let headerRightItems = [];
    if (this.state.displayedFrame === "history") {
      headerRightItems.push(<button onClick={() => this.handleCloseHistory()} className="btn btn-sm btn-light px-3 font-weight-bold" key="btn-close-history">X</button>);
    } else {
      headerRightItems.push(
        <div key="modelsGroup" className={"models ml-auto mr-lg-2 mr-md-1 btn-group btn-group-toggle "+(this.state.displayedFrame === "interior" ? "d-none" : "d-flex")}>
          {modelLines}
        </div>
      );
    }

    let buttonsMiddle = [
      {text: "Extérieur", frame: "showroom"},
      {text: "Intérieur", frame: "interior"}
    ];
    let buttonsElms = [];
    for (let i in buttonsMiddle) {
      let btData = buttonsMiddle[i];
      let classNames = " btn-secondary";
      if (this.state.displayedFrame === btData.frame) {
        classNames = " btn-light active";
      }
      buttonsElms.push(<div className={"btn btn-sm" + classNames } onMouseOver={() => this.handleFrameChange(btData.frame)}>{btData.text}</div>);
    }

    let headerMiddleItems = [];
    if (this.state.displayedFrame !== "history") {
      headerMiddleItems.push(
        <div key="interior-exterior" className="d-flex ml-sm-auto btn-group btn-group-toggle">
          {buttonsElms}
        </div>
      );
    }

    return (
      <div>
      <nav className="navbar navbar-dark bg-dark sticky-top flex-md-nowrap py-2 pl-3 align-items-center text-light">
        <div className="modelName lead">{modelName}</div>
        {headerRightItems}
        {headerMiddleItems}
      </nav>

      <div className="container-fluid position-relative">
        
        <div className={"modal-layout "+(this.state.displayedFrame === "history" ? "" : "d-none")}>
          <div className="d-flex history align-items-center">
            {savedConfigs}
          </div>
        </div>

        <div className="row">
          <nav className="col-md-12 col-lg-4 d-md-block bg-light sidebar">
            <OptionsPane
              data={{...options, wheels: wheels}}
              onClick={(type, code) => persOpts.onEvent(type, code)}
              getImgUrl={(opts) => persOpts.image(opts)}
              selection={persOpts.selection}
              displayedFrame={this.state.displayedFrame} />
          </nav>
          <div className="col-md-12 ml-sm-auto col-lg-8 d-flex p-0 showroom">
            <div className="perspectives">{perspectives}</div>
            <img src={persOpts.image(persOpts.selection)} alt={modelName} />
            
            <div className={"btn-save" + (Object.keys(this.state.confHistory).length > 0 ? " btn-group" : "") + (this.state.displayedFrame === "interior" ? " d-none" : "")}>
              <button type="button" className={"btn btn-secondary"+(Object.keys(this.state.confHistory).length > 0 ? "" : " d-none")} onClick={() => this.handleClickConfigsBtn()}>Configurations</button>
              <button type="button" className="btn btn-secondary" onClick={() => this.handleClickSaveBtn()}>Sauvegarder</button>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
