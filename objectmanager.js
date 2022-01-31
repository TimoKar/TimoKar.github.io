var froggoObjects;
var relicObjects;
var gobboObjects;
var groundObject;

AFRAME.registerComponent('objectmanager', {
  init: function () {
    console.log("Objectmanager found... initialyzing...");

    froggoObjects = this.el.querySelector('.FroggoObjects');
    relicObjects = this.el.querySelector('.RelicObjects');
    gobboObjects = this.el.querySelector('.GobboObjects');
    groundObject = this.el.querySelector('.GroundEntity');

    console.log("Objectmanager initialyzed!");
  },
  
});
