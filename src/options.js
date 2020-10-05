const staticMediaUrl =  "https://mediaservice.audi.com/media/cdb/data/";

const options = {
    modelsAudi: {
        "q3": {name:"Q3", code:"f3bary", img:"https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3b/2019.png?wid=220"},
        "q3-sportback": {name:"Q3 sportback", code:"f3nary", img:"https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f3n/2020.png?wid=220"}
    },

    modelLines: {
      "attraction": {name:"Attraction", code:"stf2jb"},
      "sline": {name:"S-line", code:"stf2jk"}
    },
  
    enginePowers : {
      35: "f3nazg",
      40: "f3naly",
      45: "f3nc8y"
    },
  
    engineFuels : {
      "tdi": "gmot6f",
      "tfsi": "gmotj7"
    },
  
    engineTractions: {
      "avant": {code:"ata1x0", name:"Traction avant"},
      "quattro": {code:"ata1x1", name:"Quattro"}
    },
  
    parchocs : {
      "contrast": {code: "stf2jk", name:"Contraste"},
      "original": {code: "stf2jd", name:"Teinte du vehicule"}
    },
  
    phares: {
      "led": {code:"lia8g1", name:"LED"},
      "matrix-led": {code:"lia8g4", name:"Matrix LED"}
    },
  
    laveProjecteur: {
      "avec": {code:"swr8x1", name:"Avec lave-projecteur"},
      "sans": {code:"swr8x0", name:"Sans lave-projecteur"}
    },
  
    toit : {
      "avec": {code:"dei3fb", name:"Coulissant panoramique", img: staticMediaUrl + "16db8036-6345-480b-939c-a325e9328f21.jpg"},
      "sans": {code:"dei3fa", name:"Normal"}
    },
  
    packStyle : {
      "noir": {code:"zie4zd", name:"Noir"},
      "brillance": {code:"zie4zb", name:"Brillance"}
    },
  
    vitres : {
      "tainted": {code:"sctql5", name:"Teintées", img: staticMediaUrl + "c21fdf8f-0df4-4130-9e97-83ed49467d7a.jpg"},
      "normal" : {code:"sctql1", name:"Non-teintées"}
    },
    
    perspectives : {
      "front": "n4c03",
      "side-front": "n4c01",
      "side": "n4c14",
      "side-back": "n4c12",
      "back": "n4c11",
      "close": "n4c02",
    },
  
    colors : {
      "blanc-ibis": {name: "Blanc Ibis", code:"t9t9", img: staticMediaUrl + "4ddfbfaa-2d66-4d55-9f8a-47110354da53.jpg", codeImg: "005"},
      "blanc-glacier": {name: "Blanc glacier", code:"2y2y", img: staticMediaUrl + "9b593062-1a41-4f66-b9f9-459641575afb.jpg", codeImg: "005"},
      "suzuka-grau": {name:"Suzuka Grau", code:"q0q0", img: staticMediaUrl + "f05448a6-dc7e-4efc-8e8f-1d10b62404c7.jpg", codeImg: "005"},
      "argent-fleuret": {name: "Argent fleuret", code:"l5l5", img: staticMediaUrl + "066a5781-4575-40f2-bfbe-075ecb5759c0.jpg", codeImg: "005"},
      "argent-rose": {name: "Argent rosé", code:"n8n8", img: staticMediaUrl + "2461c21c-8790-43c3-b0f0-de96c3a76194.png", codeImg: "005"},
      "nardograu-uni": {name:"Nardograu Uni", code:"q0q0", img: staticMediaUrl + "92452d3b-6190-4633-acf9-5e28dd1734fc.jpg", codeImg: "085"},
      "gris-chronos": {name: "Gris chronos", code:"z7z7", img: staticMediaUrl + "1cfb8557-fc2b-4963-a28f-c470571aa105.jpg", codeImg: "005"},
      "gris-daytona": {name: "Gris Daytona", code:"6y6y", img: staticMediaUrl + "63737605-40bd-4e12-aa9d-c173fe8254c5.jpg", codeImg: "005"},
      "gris-nano": {name: "Gris nano", code:"g3g3", img: staticMediaUrl + "a674c61e-d749-430f-ad1b-61ac420e1e86.jpg", codeImg: "005"},
      "noir-mythe": {name: "Noir mythe", code:"0e0e", img: staticMediaUrl + "175ff22b-ebd7-4ba5-b247-1847c490d493.jpg", codeImg: "005"},
      "pulse orange": {name: "Pulse Orange", code:"m9m9", img: staticMediaUrl + "47129b2b-0a8a-472d-9905-d96dcbf2ab6a.jpg", codeImg: "005"},
      "bleu-navare": {name: "Bleu navare", code:"2d2d", img: staticMediaUrl + "95cb6a2f-bf85-444d-9b69-ca1b8e1f5b66.jpg", codeImg: "005"},
      "rouge-tango": {name: "Rouge tango", code:"y1y1", img: staticMediaUrl + "30417923-26dd-49c3-95f8-1358366c0972.jpg", codeImg: "005"},
      "bleu-turbo": {name: "Bleu turbo", code:"n6n6", img: staticMediaUrl + "e665d4cb-0404-434c-9a72-54efc6960978.jpg", codeImg: "005"},
      "grun-uni": {name:"Grün Uni", code:"q0q0", img: staticMediaUrl + "ba9a3379-ad92-4987-a27e-0ae23fe5f32d.jpg", codeImg: "030"},
      "vegasgelb-uni": {name:"Vegasgelb Uni", code:"q0q0", img: staticMediaUrl + "ea677a89-8c1e-45db-92fc-17ff42d80037.jpg", codeImg: "095"},
      "kumulublau-uni": {name:"Kumulublau Uni", code:"q0q0", img: staticMediaUrl + "fb6b9c9a-aad4-4f8f-b895-4cd9494207f8.jpg", codeImg: "080"},
      "ipanemabraun": {name:"Ipanemabraun", code:"q0q0", img: staticMediaUrl + "d08f5164-9782-4588-b9b2-7f85d81f5eee.jpg", codeImg: "058"},
      "karatbeige": {name:"Karatbeige", code:"q0q0", img: staticMediaUrl + "773e140d-6a34-4b95-aba9-fee5d119d55d.jpg", codeImg: "106"},
      "goodwoodgrun": {name:"Goodwoodgrün", code:"q0q0", img: staticMediaUrl + "083e143c-d949-4ac9-9c0b-94d9794a119b.jpg", codeImg: "027"},
      "merlin": {name:"Merlin", code:"q0q0", img: staticMediaUrl + "ce9f4849-ec3a-4fe9-aedd-b75d375dc140.jpg", codeImg: "063"},
      "arablau": {name:"Arablau", code:"q0q0", img: staticMediaUrl + "30b19704-72f6-477e-bf55-b88681dee4b2.jpg", codeImg: "110"}
    },
  
    retroviseurs : {
      "original": {name:"Teinte du vehicule", code:"bbo6fa", img: process.env.PUBLIC_URL + "/img/retro-white.jpg"},
      "black" : {name:"Noirs", code:"bbo6fj", img: process.env.PUBLIC_URL + "/img/retro-black.jpg"},
      "carbon" : {name:"Carbone", code :"bbo6fq", img: process.env.PUBLIC_URL + "/img/retro-carbon.jpg"}
    },
  
    roues : {
      "17": [
        {code:'C2G', img: staticMediaUrl + "bb5a3887-f502-4de0-b9f6-b0d4787286f3.png"},
      ],
      "18": [
        {code: 'C3Q', img: staticMediaUrl + "362da8f3-e7e8-4fe8-852a-fdb942b16623.png"},
        {code: 'C2I', img: staticMediaUrl + "72c05d9d-ed80-454f-9e19-a0a87994c2ea.png"},
        {code: 'C3P', img: staticMediaUrl + "31e5b7f9-62c4-49e3-a89b-90631d002e46.png"}
      ],
      "19": [
        {code: 'U25', img: staticMediaUrl + "15231139-b44a-4706-b309-7811db9d7ae9.png"},
        {code: '43K', img: staticMediaUrl + "9305a3a1-4646-4e62-915e-45f8ab3b4dc8.png"},
        {code: 'V72', img: staticMediaUrl + "9902c8f6-d1c8-44e2-85d4-839e804e3f24.png"},
        {code: '44Q', img: staticMediaUrl + "9abe73bc-173b-4b9d-b3af-04345354827f.png"},
        {code: '42D', img: staticMediaUrl + "00810307-b113-49cd-97cc-2d86ff5a3f27.png"},
        {code: '44S', img: staticMediaUrl + "e0d66c86-f77b-4cf0-91f8-8fe120393983.png"}
      ],
      "20": [
        {code:"42f",img: staticMediaUrl + "f45d1065-f4ed-4ecf-b44e-9ad4b7aca4a4.png"},
        {code:"f73",img: staticMediaUrl + "88571949-dcbb-4143-a33e-4927f35b252e.png"},
        {code:"52Z",img: staticMediaUrl + "5fb0c69e-fdd8-4705-981d-103b45831315.png"}
      ]
    },

    interior:{
      perspectives: {
        0: "n4n06",
        1: "n4n05",
        2: "n4n10"
      },
      sieges: {
        "alcantara-mono-pur550": {
          "noir-noir": {code1: "56+fz", code2: "sibn7u", code3: "lum7hc", code4: "vosq4h"}
        },
        "alcantara-design-selection": {
          "argent-lunaire-gris": {code1: "56+gp", code2: "sibn3n", code3: "lum7he", code4: "vosq4h"},
          "gris-pandora": {code1: "56+gf", code2: "sibn3n", code3: "lum7he", code4: "vosq4h"}
        },
        "cuir-mono-pur550": {
          "beige-nacre": {code1: "56+gc", code2: "sibn1m", code3: "lum7hc", code4: "vosq1a"},
          "brun-okapi": {code1: "56+ml", code2: "sibn1m", code3: "lum7hc", code4: "vosq1a"},
          "noir-noir": {code1: "56+fz", code2: "sibn1m", code3: "lum7hc", code4: "vosq1a"}
        },
        "cuir-mono-pur550-design-selection": {
          "brun-ambre-noir": {code1: "56+ge", code2: "sibn1d", code3: "lum7hd", code4: "vosq4h"},
          "gris-noir": {code1: "56+gh", code2: "sibn1d", code3: "lum7he", code4: "vosq4h"}
        },
        "cuir-mono-pur550-sline": {
          "gris-anthracite": {code1: "56+oq", code2: "sibn1p", code3: "lum7hc", code4: "vosq4h"},
          "noir-noir-gris": {code1: "56+ei", code2: "sibn1p", code3: "lum7hc", code4: "vosq4h"},
          "noir-noir-rouge": {code1: "56+uk", code2: "sibn1p", code3: "lum7hc", code4: "vosq4h", code5: "yybyyb"}
        },
        "tissu-similicuir-s-line": {
          "noir-noir-gris": {code1: "56+ei", code2: "sibn7v", code3: "lum7hc", code4: "vosq4h"},
          "rouge-soul-gris": {code1: "56+gk", code2: "sibn7v", code3: "lum7hc", code4: "vosq4h"}
        },
        "tissu-similicuir-design-selection": {
          "gris" :  {code1: "56+gf", code2: "sibn0s", code3: "lum7he", code4: "vosq4h"}
        },
        "frequenz-similicuir-s-line": {
          "noir-noir-gris" :  {code1: "56+ei", code2: "sibn7k", code3: "lum7he", code4: "vosq4h"},
          "noir-noir-rouge" :  {code1: "56+uk", code2: "sibn7k", code3: "lum7hc", code4: "vosq4h", code5: "yybyyb"},
        }
      },
      siegeArrieres: {
        "banquette-normale" : {name: "Normale", code:"his5kn"},
        "banquette-porte-gobelet" : {name: "Porte-gobelets", code: "his5kr"}
      },
      volants: {
        "multi-plus": {name:"De série",code:"lra1xw", img: staticMediaUrl + "8849f731-f041-4fa0-a2ce-4c3922382f59.png"},
        "multi-plus-chauffage": {name:"Avec chauffage", code:"lra2zw", img: staticMediaUrl + "4002630c-c782-496f-809e-c326f55d5668.png"},
        "multi-plus-palette": {name:"Avec palettes", code:"lra1xx", img: staticMediaUrl + "3b65ff3e-722e-490f-beee-e9f6c1561dc5.png"},
        "multi-plus-applati": {name:"Aplati", code:"lra2pf", img: staticMediaUrl + "de59e326-9400-429e-8fa8-5a10599a33c1.png"},
        "multi-plus-palette-applati": {name:"Aplati + palettes", code:"lra2pk", img: staticMediaUrl + "8b57b02e-7686-49d9-9af1-a6327fa99cff.png"},
      },
      eclairages: {
        "aucun": {name: "Eclairage intérieur", code:"lcpqq0"},
        "ambiance" : {name: "Pack Ambiance", code: "lcpqq1"},
        "ambiance-plus": {name: "Pack Ambiance Plus", code: "lcpqq2"}
      },
      ciel : {
        "argent": {code:"him6nj", name:"Argent lunaire"},
        "noir" : {code:"him6nq", name:"Noir"}
      },
      decorations: {
        "alu-dark": {name:"Alu Dimension Foncé", code:"eih5te"},
        "alu-mat": {name:"Alu Mat Brossé Foncé", code:"eih5tg"},
        "tilleul": {name:"Tilleul Artefact Brun Gris Naturel", code:"eih5tf"},
        "micromet": {name:"Micrométallique Argent", code:"eih5ma"},
        "alu-silver": {name:"Alu Dimension Argent", code:"eih5td"},
        "carbon": {name:"Carbone Sergé", code:"eih5mb"},
        "piano": {name:"Piano laqué Noir Audi exclusive", code:"eih5tl"},
      },
      elements: {
        "de-base": {name:"De base", code:null},
        "bras-porte-cuir": {name:"Revêtement de bras de porte similicuir", code:"lum7hc"},
        "alc-argent": {name:"Alcantara Argent Lunaire", code:"lum7hf"},
        "alc-brun": {name:"Alcantara Brun Ambre", code:"lum7hd"},
        "alc-gris": {name:"Alcantara Gris Acier", code:"lum7he"},
        "alc-orange": {name:"Alcantara Orange", code:"lum7hb"},
      },
    }
  };

  export default options;