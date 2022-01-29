var buttonEls = [];
var menuButtonEls = [];
var gameInfo = new Array(3);
var infopanel;
var ImageElement;
var Infotxt;
var Titletxt;
var downloadtxt;

AFRAME.registerComponent('info-panels', {
  init: function () {
    //Setup game info
    createGameInfo();
    //Setup variables
    infopanel = this.el.object3D;
    ImageElement = document.querySelector('#InfoGameImage');
    Infotxt = document.querySelector('#GameDescription');
    Titletxt = document.querySelector('#GameTitle');
    downloadtxt = document.querySelector('#Downloadtxt');

    console.log(ImageElement);
    //Setup infopanel & print data
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    console.log("InfoData:")
    console.log(gameInfo);
    
  },
  

  //onInfoButtonClick
  onInfoButtonClick: function (evt) {
    
  },

});

//Creates array with game information
function createGameInfo(){
    
    for (var i = 0; i < gameInfo.length; i++) {
    gameInfo[i] = new Array(2);
    }

    //GOBBOS INFO
    gameInfo [0][0] = "Too many gobbos";
    gameInfo [0][1] = "Too many gobbos desc";

    //FROGGO INFO
    gameInfo [1][0] = "Froggo";
    gameInfo [1][1] = "Froggo desc";

    //ABYSS info
    gameInfo [2][0] = "Relics of the abyss";
    gameInfo [2][1] = "Relics of the abyss descp";
}


function showInfoscreen(ID){
    console.log(ID);
    //Setting infopanel data
    switch(ID){
        case 'RelicsBtn':
            ImageElement.setAttribute('material','src', '#RelicsScreen');
            Infotxt.setAttribute('text','value', gameInfo [2][1]);
            Titletxt.setAttribute('text','value', gameInfo [2][0]);
            downloadtxt.setAttribute('visible', 'false');
        break;
        case 'FroggoBtn':
            ImageElement.setAttribute('material','src', '#FroggoScreen');
            Infotxt.setAttribute('text','value', gameInfo [1][1]);
            Titletxt.setAttribute('text','value', gameInfo [1][0]);
            downloadtxt.setAttribute('visible', 'false');
        break;
        case 'GobbosBtn':
            ImageElement.setAttribute('material','src', '#GobbosScreen');
            Infotxt.setAttribute('text','value', gameInfo [0][1]);
            Titletxt.setAttribute('text','value', gameInfo [0][0]);
            downloadtxt.setAttribute('visible', 'true');
        break;
        default:
        console.log("Not implemented yet!");
        break;
    }
    //Making infopanel visible
    infopanel.scale.set(1, 1, 1);
    infopanel.visible = true;
    
}

function hideInfoscreen(){
    //Hiding infopanel
    infopanel.scale.set(0.001, 0.001, 0.001);
    infopanel.visible = false;
}