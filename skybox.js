AFRAME.registerComponent("skybox", {
    init: function () {
        console.log('starting loop');
        SkyboxLoop();
    }
})

//Fades the background
function fade() {
    var backgroundEl = document.querySelector('#background');
    setTimeout(function () {
        backgroundEl.emit('fadeout');
        //console.log("fadeout")
    }, 7000);

    setTimeout(function () {
        backgroundEl.emit('fadein');
        //console.log("fadein")
    });
};

//Changes the background on set time
function SkyboxLoop() {

    var backgroundEl = document.querySelector('#background');
    var backgroundEl1 = document.querySelector('#background1');//background1 is secondary background behind the main background.
    if (backgroundEl != null) {
        if (backgroundnum == 0) {
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Black');
            }, 4000);
            backgroundEl.setAttribute('src', '#Black');
            backgroundnum += 1;

        } else if (backgroundnum == 1) {
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Blue');
            }, 4000);
            backgroundEl.setAttribute('src', '#Blue');
            backgroundnum += 1;

        } else if (backgroundnum == 2) {
            setTimeout(fade)
            setTimeout(function () {
                backgroundEl1.setAttribute('src', '#Red');
            }, 4000);
            backgroundEl.setAttribute('src', '#Red');
            backgroundnum = 0;

        } else {
            console.log(backgroundEl.src);
        }

    } else {
        console.log("BACKGROUND NULL");
    }
    setTimeout(SkyboxLoop, 8000);
}
