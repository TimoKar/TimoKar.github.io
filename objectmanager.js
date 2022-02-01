var froggoObjects;
var relicObjects;
var gobboObjects;
var groundObject;
var groundObjectRelic;

AFRAME.registerComponent('objectmanager', {
  init: function () {
    console.log("Objectmanager found... initialyzing...");
    //Finds all objects
    froggoObjects = document.querySelector('#FroggoObjects');
    relicObjects = document.querySelector('#RelicObjects');
    gobboObjects = document.querySelector('#GobboObjects');
    groundObject = document.querySelector('#GroundEntity');
    groundObjectRelic = document.querySelector('#GroundEntityRelics');

    console.log("Objectmanager initialyzed!");
  },
  
});
//Takes button id that has been pressed and the button that was pressed before that.
function changeScene(ID){
    //Load and unload asssets depending on what buttons were pressed.
    console.log("Loading: " + ID + " , unloading: " + lastBtn);
    switch(ID){
        case "RelicsBtn":
            if(!(lastBtn == "Relic")){
                loadRelicsScene();
            }
            if(lastBtn == "Froggo"){
                fadeFroggoScene(ID);
            }else if(lastBtn == "Gobbos"){
                fadeGobbosScene(ID);
            }else{
                console.log("cannot unload scene from: " + lastBtn);
            }
        break;
        case "FroggoBtn":
            if(!(lastBtn == "Froggo")){
                loadFroggoScene();
            }
            if(lastBtn == "Relic"){
                fadeRelicsScene();
            }else if(lastBtn == "Gobbos"){
                fadeGobbosScene(ID);
            }else{
                console.log("cannot unload scene from: " + lastBtn);
            }
        break;
        case "GobbosBtn":
            if(!(lastBtn == "Gobbos")){
                loadGobbosScene();
            }
            if(lastBtn == "Froggo"){
                fadeFroggoScene(ID);
            }else if(lastBtn == "Relic"){
                fadeRelicsScene();
            }else{
                console.log("cannot unload scene from: " + lastBtn);
            }
        break;
        default:
            console.log("null ID");
        break;
    }
}
//Loads assets and plays animation
function loadRelicsScene(){
    relicObjects.setAttribute('visible', true);
    setTimeout(function () {
         groundObjectRelic.emit('fadeRGin');
         groundObjectRelic.setAttribute('visible', true);
    }, 500);
   
    relicObjects.emit('fadeRelicin');
}

//Loads assets and plays animation
function loadFroggoScene(){
    froggoObjects.setAttribute('visible', true);
    console.log("Lastbtn " + lastBtn)
    if(lastBtn == "Relic"){
        console.log("Lastbtn " + lastBtn + ", playing fadegin.")
        setTimeout(function () {
            groundObject.emit('fadeGin');
            groundObject.setAttribute('visible', true);
        }, 500);
    }
    froggoObjects.emit('fadeFrogin');
}

//Loads assets and plays animation
function loadGobbosScene(){
    gobboObjects.setAttribute('visible', true);   
    if(lastBtn == "Relic"){
        setTimeout(function () {
            groundObject.setAttribute('visible', true);
            groundObject.emit('fadeGin');
        }, 500);
    }
    gobboObjects.emit('fadeGobin');
}

//Unloads assets and plays animation
function fadeRelicsScene(){
    relicObjects.emit('fadeRelicout');
    groundObjectRelic.emit('fadeRGout');
    setTimeout(function () {
         groundObjectRelic.setAttribute('visible', false);
    }, 500);
    setTimeout(function () {
        relicObjects.setAttribute('visible', false);
    }, 1000);
    
}

//Unloads assets and plays animation
function fadeFroggoScene(ID){
    froggoObjects.emit('fadeFrogout');
    if(ID == "RelicsBtn"){
        groundObject.emit('fadeGout');
        setTimeout(function () {
         groundObject.setAttribute('visible', false);
        }, 500);
    }
    setTimeout(function () {
        froggoObjects.setAttribute('visible', false);
    }, 1000);
}

//Unloads assets and plays animation
function fadeGobbosScene(ID){
    gobboObjects.emit('fadeGobout');
    console.log("Lastbtn " + ID + ", playing fadeGout.")
    if(ID == "RelicsBtn"){
        groundObject.emit('fadeGout');
        setTimeout(function () {
         groundObject.setAttribute('visible', false);
        }, 500);
    }
    setTimeout(function () {
        gobboObjects.setAttribute('visible', false);
    }, 1000);
    
}