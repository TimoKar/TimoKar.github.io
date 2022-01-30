// JavaScript source code

var buttons;
var backgroundEl;

/* global AFRAME */

AFRAME.registerComponent('menubuttons', {
  init: function () {
    console.log("Initialyzing!");
    //Finding all element that need eventlisteners
    buttons = this.el.querySelectorAll('.menu-button');
    backgroundEl = document.querySelector('#background');

    backgroundEl.addEventListener('click', this.reset);
    
    //calculating angles for rotation
    var angle = 360 / buttons.length;
    var currAngle = 0;

    
    //Puts all game icons around used and rotates them to face user.
    for(var i = 0; i < buttons.length; i++){
        currAngle +=  angle;
        var x = Math.cos(currAngle * Math.PI / 180) * 2;
        var z = Math.sin(currAngle * Math.PI / 180) * 2;
        buttons[i].setAttribute('position', {x, y: 0, z});
        buttons[i].setAttribute('rotation', {x: 0, y: -90 - currAngle, z: 0});
        buttons[i].setAttribute('scale',{ x:0.6, y:0.6, z:0.6 });
    }

    //Adds eventlisteners to all buttons
    for (var i = 0; i < buttons.length; ++i) {
      buttons[i].addEventListener('mouseenter', this.onMouseEnter);
      buttons[i].addEventListener('mouseleave', this.onMouseLeave);
      buttons[i].addEventListener('click', this.onClick);
    }
    
  },


  //When button is clicked
  onClick: function (evt) {
    console.log("OnCLicked1!");
    evt.target.setAttribute('material', 'color', 'grey');
    showInfoscreen(evt.currentTarget.id);
    ChangeSkybox(evt.currentTarget.id);
  },

  //When mouse goes over button
  onMouseEnter: function (evt) {
    evt.target.setAttribute('material', 'color', 'white');
    evt.target.object3D.scale.set(1, 1, 1);
  },

  //When mouse leaves button
  onMouseLeave: function (evt) {
    evt.target.setAttribute('material', 'color', 'black');
    evt.target.object3D.scale.set(0.6, 0.6, 0.6);
  },
  
  //When icons and infopanel needs to be reseted
  reset: function () {
    console.log("Reseted1!");
    for (var i = 0; i < buttons.length; ++i) {
      buttons[i].play();
      buttons[i].emit('mouseleave');
      hideInfoscreen();
    }
  }
    

});


