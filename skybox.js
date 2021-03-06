var vrScene;
var lastBtn = "Froggo";
var light;
var ambientLight;

AFRAME.registerComponent("skybox", {
    init: function () {
    vrScene = document.querySelector('#VRScene');
    light = document.querySelector('#Light');
    ambientLight = document.querySelector('#AmbientLight');

    setTimeout(fade)
            setTimeout(function () {
                document.querySelector('#background1').setAttribute('src', '#Bluesky');
            }, 1000);
            document.querySelector('#background').setAttribute('src', '#Bluesky');
    }
})

//Fades the background
function fade() {
    var backgroundEl = document.querySelector('#background');
    setTimeout(function () {
        backgroundEl.emit('fadeout');
        //console.log("fadeout")
    }, 1000);

    setTimeout(function () {
        backgroundEl.emit('fadein');
        //console.log("fadein")
        
    });

};

//Changes the background on set time
function ChangeSkybox(backgroundnumberin) {
    var backgroundEl = document.querySelector('#background');
    var backgroundEl1 = document.querySelector('#background1');//background1 is secondary background behind the main background.
    
    
    if (backgroundnumberin != null) {
        if (backgroundnumberin === "RelicsBtn") {
            if(!(lastBtn == "Relic")) {
                vrScene.emit('fadefogin');
            }
            if(lastBtn == "Gobbos"){
                ambientLight.emit('fadein');
                light.emit('fadein');
            }
            lastBtn = "Relic";
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Black');
            }, 1000);
            backgroundEl.setAttribute('src', '#Black');

        } else if (backgroundnumberin === "FroggoBtn") {
            if(lastBtn == "Relic"){ 
            vrScene.emit('fadefogout');
            }
            if(lastBtn == "Gobbos"){
                ambientLight.emit('fadein');
                light.emit('fadein');
            }
            lastBtn = "Froggo";
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Bluesky');
            }, 1000);
            backgroundEl.setAttribute('src', '#Bluesky');

        } else if (backgroundnumberin === "GobbosBtn") {
            if(lastBtn == "Relic"){
                vrScene.emit('fadefogout');
            }
            if(lastBtn != "Gobbos"){
                ambientLight.emit('fadeout');
                light.emit('fadeout');
            }
            lastBtn = "Gobbos";
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Starsky');
            }, 1000);
            backgroundEl.setAttribute('src', '#Starsky');

        } else {
            console.log(backgroundEl.src);
        }

    } else {
        console.log("BACKGROUND NULL");
    }
    
    
}