import React from 'react';
import './App.css';
import OptionsPane from './OptionsPane';
import options from './options';

const modelName = "Audi Q3 Sportback 2021";
      
function getImageUrl(opts) {
  const url = "http://mediaservice.audi.com/media/live/50450/$perspective$/$enginePower$-0/2021/14+$color$/aaue0a/aed1ts/aer0p0/ahv1d0/ase6xk/asl5sl/asr5ru/asy0k4/$engineTraction$/ausa9b/bah2em/bav1zk/$retroviseurs$/$toit$/dfh1jc/edf0ij/eil7m0/eph7x2/fls8k4/$engineFuel$/hes5j1/him6nj/hsw8it/kark5a/kasqk1/kds4h5/krs1a5/ksuka0/kzt31b/leal0l/$phares$/lra1xw/lrvav1/mdsfm0/motd8i/nav7ug/onlel5/pamgp0/rad$roues$/rcoer1/reihh1/sbr8vm/$vitres$/sdh4e7/spu79d/$model$/$laveProjecteur$/tkv4i2/twu1sa/tyz2z8/vtv9ze/wss4gf/zbr2wa/$packStyle$/zuh9m0/$lc_pr_aeexc$codeImg$.jpeg";

  var urlPhoto = url;
  if (opts['model'] === "stf2jk") {
    urlPhoto = urlPhoto.replace('$model$', opts['parchoc']);
  } else {
    urlPhoto = urlPhoto.replace('$model$', opts['model']);
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
  urlPhoto = urlPhoto.replace("$enginePower$", opts['enginePower']);
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
        parchoc: options['parchocs']['contrast'].code,
        model: options['models']['attraction'].code,
        color: options['colors']['blanc-glacier'],
        perspective : options['perspectives']['side-front'],
        retroviseurs: options['retroviseurs']['black'].code,
        roues: options['roues']['20'][0].code,
        vitres: options['vitres']['tainted'].code,
        toit: options['toit']['sans'].code,
        packStyle : options['packStyle']['noir'].code,
        phares: options['phares']['led'].code,
        laveProjecteur: options['laveProjecteur']['sans'].code,
        enginePower: options['enginePowers'][35],
        engineTraction: options['engineTractions']['avant'].code,
        engineFuel: options['engineFuels']['tfsi']
      }
    };
  }

  handleClick(type, code) {
    const selected = { ...this.state.selected, [type]: code }
    this.setState(() => ({ selected }))
  }

  render() {
    let perspectives = [];
    for (let o in options['perspectives']) {
      let perspCode = options['perspectives'][o];

      let opts = Object.assign({}, this.state.selected);
      opts.perspective = perspCode;

      let classNames = ["perspImg"];
      if (this.state.selected.perspective === perspCode) {
          classNames.push("selected");
      }

      perspectives.push(<img className={classNames} key={o} src={getImageUrl(opts)} alt={o} onMouseOver={() => this.handleClick("perspective", perspCode)} />);
    }

    let models = [];
    for (let m in options['models']) {
      let model = options['models'][m];
      let classNames = [];
      if (this.state.selected.model === model.code) {
        classNames.push("selected");
      }
      models.push(<div className={classNames} onMouseOver={() => this.handleClick("model", model.code)}>{model.name}</div>);
    }

    return (
      <div>
        <header>
          {modelName}
          <div class="models">
            {models}
          </div>
        </header>
        <div className="app">
          <OptionsPane data={options} onClick={(type, code) => this.handleClick(type, code)} selection={this.state.selected} />
          <div className="showroom">
            <div className="perspectives">{perspectives}</div>
            <img src={getImageUrl(this.state.selected)} alt={modelName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
