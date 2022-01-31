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
  console.log("Infopanel found... initialyzing...");  
  //Setup game info
    createGameInfo();
    //Setup variables
    infopanel = this.el.object3D;
    ImageElement = document.querySelector('#InfoGameImage');
    Infotxt = document.querySelector('#GameDescription');
    Titletxt = document.querySelector('#GameTitle');
    downloadtxt = document.querySelector('#Downloadtxt');

    //Setup infopanel & print data
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    console.log("Infopanel data:")
    console.log(gameInfo);
    console.log("Infopanel initialyzed!");
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
    gameInfo [0][1] = "One of my first games. I wanted to make a text based fantasy game, where you could make your own character with different weapons and skills. I also created a dynamic enemy system that creates a random enemy with random skills and name. This game was also used as example of my Java skills, so it can be downloaded from github.";

    //FROGGO INFO
    gameInfo [1][0] = "Froggo";
    gameInfo [1][1] = "My first dip into 3D world of game development. The idea was to create an endless runner using Unreal engine 4. I desided to use low poly models that i created in Blender 2.7. In the game you would play as Froggo, that tried to collect as many wineglasses as he could while dodging barrels.";

    //ABYSS info
    gameInfo [2][0] = "Relics of the abyss";
    gameInfo [2][1] = "My biggest project yet. Made with my classmate as thesis in ambiance in horror games. We decided to focus in thalassophobia, which is the fear of depths, so we made a game in what the player had to collect relics from the deep parts of the ocean. Almost everything in this project was made by us, from sounds and models to programming. This project was made using Unity.";
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