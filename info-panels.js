var buttonEls = [];
var menuButtonEls = [];
var gameInfo = new Array(3);
var GobboImages = new Array();
var currentGobboImage = 0;
var RelicImages = new Array();
var currentRelicImage = 0;
var FroggoImages = new Array();
var currentFroggoImage = 0;
var currentInfo = "null";
var infopanel;
var ImageElement;
var Infotxt;
var Titletxt;
var downloadtxt;
var leftArrow;
var rightArrow;
var downloadArrow;
var clickable = true;
var introScreen;
var introBtn;

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
    leftArrow = document.querySelector('#ArrowLeft');
    rightArrow = document.querySelector('#ArrowRight');
    downloadArrow = document.querySelector('#DownloadArrow');
    introScreen = document.querySelector('#IntroScreen');
    introBtn = document.querySelector('#IntroScreenBtn');
    //Adding relic images
    document.querySelectorAll('.GameImages').forEach(findCorrectArray);
    //Setup eventlisteners
    leftArrow.addEventListener('click', this.onArrowClick);
    rightArrow.addEventListener('click', this.onArrowClick);
    downloadArrow.addEventListener('click', this.onDownloadArrowClick);
    ImageElement.addEventListener('click', this.onImageClick);
    introBtn.addEventListener('click', this.onInfoBtnClick);
    //Setup infopanel & print data
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    console.log("Infopanel data:")
    console.log(gameInfo);
    console.log("Infopanel initialyzed!");
  },
  

  //When infopanel is clicked
  onDownloadArrowClick: function (evt) {
    console.log("INFOPANEL CLICKED");
    if(currentInfo == "Gobbos"){
        window.open('https://github.com/TimoKar/Gobbos', '_blank');
    }else if (currentInfo == "Relics"){
        window.open('https://www.theseus.fi/handle/10024/504732', '_blank');
    }
    
  },

  //When info button is clicked
  onInfoBtnClick: function (evt) {
    introScreen.setAttribute('visible', 'true');
    introScreen.setAttribute('scale', '1 1 1')
    infopanel.scale.set(0.001, 0.001, 0.001);
    infopanel.visible = false;
  },

  //When either left or right arrow is clicked
  onArrowClick: function (evt) {
    if(clickable){
        clickable = false;
        ImageElement.emit("fadegameimgout");
        if(evt.currentTarget.id == "ArrowRight"){
            setTimeout(function () {
                loadImageRight();
                ImageElement.emit("fadegameimgin")
            }, 150);
            setTimeout(function () {
                clickable = true;
            }, 300);
        }else{
            setTimeout(function () {
                loadImageLeft();
                ImageElement.emit("fadegameimgin")
                clickable = true;
            }, 150);
            setTimeout(function () {
                clickable = true;
            }, 300);
        }
    }
  },

  //When game image is clicked
  onImageClick: function (evt) {
    console.log("IMAGE CLICKED");
  },

});
//Loads the previous image
function loadImageLeft(){
    if(currentInfo == "Relics"){
        if(currentRelicImage - 1 == -1){
            currentRelicImage = RelicImages.length - 1;
        }else{
            currentRelicImage--;
        }
        console.log("LOADING IMAGE: " + currentRelicImage + " image= " + '#' + RelicImages[currentRelicImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + RelicImages[currentRelicImage].getAttribute("id"));
    }else if(currentInfo == "Froggo"){
        if(currentFroggoImage - 1 == -1){
            currentFroggoImage = FroggoImages.length - 1;
        }else{
            currentFroggoImage--;
        }
        console.log("LOADING IMAGE: " + currentFroggoImage + " image= " + '#' + FroggoImages[currentFroggoImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + FroggoImages[currentFroggoImage].getAttribute("id"));
    }else if(currentInfo == "Gobbos"){
        if(currentGobboImage - 1 == -1){
            currentGobboImage = GobboImages.length - 1;
        }else{
            currentGobboImage--;
        }
        console.log("LOADING IMAGE: " + currentGobboImage + " image= " + '#' + GobboImages[currentGobboImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + GobboImages[currentGobboImage].getAttribute("id"));
    }
}

//Loads the next image
function loadImageRight(){
    if(currentInfo == "Relics"){
        if(currentRelicImage + 1 == RelicImages.length){
            currentRelicImage = 0;
        }else{
            currentRelicImage++;
        }
        console.log("LOADING IMAGE: " + currentRelicImage + " image= " + '#' + RelicImages[currentRelicImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + RelicImages[currentRelicImage].getAttribute("id"));
    }else if(currentInfo == "Froggo"){
        if(currentFroggoImage + 1 == FroggoImages.length){
            currentFroggoImage = 0;
        }else{
            currentFroggoImage++;
        }
        console.log("LOADING IMAGE: " + currentFroggoImage + " image= " + '#' + FroggoImages[currentFroggoImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + FroggoImages[currentFroggoImage].getAttribute("id"));
    }else if(currentInfo == "Gobbos"){
        if(currentGobboImage + 1 == GobboImages.length){
            currentGobboImage = 0;
        }else{
            currentGobboImage++;
        }
        console.log("LOADING IMAGE: " + currentGobboImage + " image= " + '#' + GobboImages[currentGobboImage].getAttribute("id"));
        ImageElement.setAttribute('material','src', '#' + GobboImages[currentGobboImage].getAttribute("id"));
    }
}

function resetImages(){
    currentGobboImage = 0;
    currentRelicImage = 0;
    currentFroggoImage = 0;
}

//Adds image files to correct arrays
function findCorrectArray(element){
        if(element.getAttribute('id').includes("Relics")){
            RelicImages.push(element);
        }else if (element.getAttribute('id').includes("Froggo")){
            FroggoImages.push(element);
        }else if (element.getAttribute('id').includes("Gobbo")){
            GobboImages.push(element);
        }else{
            console.log("Does not contain: " + element.getAttribute("id"));
        }
}
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
    //Setting infopanel data
    introScreen.setAttribute('visible', 'false');
    introScreen.setAttribute('scale', '0.001 0.001 0.001')
    switch(ID){
        case 'RelicsBtn':
            ImageElement.setAttribute('material','src', '#RelicsScreen');
            Infotxt.setAttribute('text','value', gameInfo [2][1]);
            Titletxt.setAttribute('text','value', gameInfo [2][0]);
            downloadtxt.setAttribute('visible', 'true');
            downloadtxt.setAttribute('text', 'value', "Click on this arrow to open thesis page.")
            downloadArrow.setAttribute('scale', '1 1 1');
            currentInfo = "Relics";
        break;
        case 'FroggoBtn':
            ImageElement.setAttribute('material','src', '#FroggoScreen');
            Infotxt.setAttribute('text','value', gameInfo [1][1]);
            Titletxt.setAttribute('text','value', gameInfo [1][0]);
            downloadtxt.setAttribute('visible', 'false');
            downloadArrow.setAttribute('scale', '0 0 0');
            downloadtxt.setAttribute('text', 'value', "Click on this arrow to open download page.")
            currentInfo = "Froggo";
        break;
        case 'GobbosBtn':
            ImageElement.setAttribute('material','src', '#GobbosScreen');
            Infotxt.setAttribute('text','value', gameInfo [0][1]);
            Titletxt.setAttribute('text','value', gameInfo [0][0]);
            downloadtxt.setAttribute('visible', 'true');
            downloadtxt.setAttribute('text', 'value', "Click on this arrow to open download page.")
            downloadArrow.setAttribute('scale', '1 1 1');
            currentInfo = "Gobbos";
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

    introScreen.setAttribute('visible', 'false');
    introScreen.setAttribute('scale', '0.001 0.001 0.001')
}