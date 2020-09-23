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
        laveProjecteur: options['laveProjecteur']['sans'].code
      },
      wheelsSize : 64
    };
  }

  handleClick(type, code) {
    const selected = { ...this.state.selected, [type]: code }
    this.setState(() => ({ selected }))
  }

  updateWheelsSize(size) {
    this.setState({wheelsSize: size});
  }

  render() {
    let perspectives = [];
    for (let o in options['perspectives']) {
      let perspCode = options['perspectives'][o];

      let opts = Object.assign({}, this.state.selected);
      opts.perspective = perspCode;

      let classNames = "";
      if (this.state.selected.perspective === perspCode) {
          classNames += "selected";
      }

      perspectives.push(<img className={classNames} key={o} src={getImageUrl(opts)} alt={o} onMouseOver={() => this.handleClick("perspective", perspCode)} />);
    }

    let modelLines = [];
    for (let m in options['modelLines']) {
      let model = options['modelLines'][m];
      let classNames = "btn btn-sm ";
      classNames += this.state.selected.modelLine === model.code ? "active btn-light" : "btn-secondary";
      
      modelLines.push(<div className={classNames} onMouseOver={() => this.handleClick("modelLine", model.code)}>{model.name}</div>);
    }

    let wheels = {
      size: this.state.wheelsSize,
      updateSizeHandler : (size) => this.updateWheelsSize(size)
    };

    return (
      <div>
      <nav className="navbar navbar-dark bg-dark sticky-top flex-md-nowrap py-2 pl-3 align-items-center text-light">
        <div className="modelName lead">{modelName}</div>
        <div className="models d-flex ml-auto mr-lg-2 mr-md-1 btn-group btn-group-toggle">
          {modelLines}
        </div>
      </nav>

      <div className="container-fluid">
        <div class="row">
          <nav className="col-md-12 col-lg-4 d-md-block bg-light sidebar">
            <OptionsPane
              data={{...options, wheels: wheels}}
              onClick={(type, code) => this.handleClick(type, code)}
              selection={this.state.selected} />
          </nav>
          <div className="col-md-12 ml-sm-auto col-lg-8 d-flex p-0 showroom">
            <div className="perspectives">{perspectives}</div>
            <img src={getImageUrl(this.state.selected)} alt={modelName} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
