var buttonEls = [];
var menuButtonEls = [];
var initialized = false;
AFRAME.registerComponent('info-panels', {
  tick: function(){
    if(!initialized){

    buttonEls = document.querySelectorAll('.info-button');
    menuButtonEls = document.querySelectorAll('.menu-button')
    
   if(buttonEls.length < 1){
        buttonEls = document.querySelectorAll('.info-button');
        menuButtonEls = document.querySelectorAll('.menu-button')
    }else{
    initialized = true;

    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = [];
    for(i = 0; i < lista.length; i++){
        this.movieInfo["ID" + lista[i].OsallistujaID] = {title: lista[i].Osallistuja_nimi, imgEl: document.querySelector('#RedImage'), description: lista[i].Osallistuja_esittely_fin};
    }

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    //this.onMouseEnter = this.onMouseEnter(this);
   // this.onMouseLeave = this.onMouseLeave(this);
    this.onInfoButtonClick = this.onInfoButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');

    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('mouseenter', this.onMouseEnter);
      buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
      buttonEls[i].addEventListener('click', this.onInfoButtonClick);
    }
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].addEventListener('mouseenter', this.onMouseEnter);
      menuButtonEls[i].addEventListener('mouseleave', this.onMouseLeave);
      menuButtonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    //fadeBackgroundEl.object3D.renderOrder = 9;
    //fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    console.log("InfoData:")
    console.log(this.movieInfo);
    }
    }
  },

  init: function () {
    
  },

onMouseEnter: function (evt) {
    console.log("Showing");
    Element = document.getElementById('Infopopup' + evt.currentTarget.id);
    if(Element != null){
       Element.setAttribute('visible', true);
    }
    
  },

  onMouseLeave: function (evt) {
    console.log("Hiding");
    Element = document.getElementById('Infopopup' + evt.currentTarget.id);
    if(Element != null){
       Element.setAttribute('visible', false);
    }
  },

  //onInfoButtonClick
  onInfoButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];
    console.log(movieInfo + " " + evt.currentTarget.id)
    this.backgroundEl.object3D.scale.set(-1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    //this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  //onMenuButtonClick
  onMenuButtonClick: function (evt) {
  var clickedOn = evt.currentTarget.id;
  if(clickedOn.substring(0,8) == "Takaisin"){
    clickedOn = "Takaisin";
  }

  console.log(clickedOn);

    switch(clickedOn){

    case 'Hankkeen toteuttajaorganisaatiot':
    console.log("Showing Organizations");
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].setAttribute("visible",false);
      menuButtonEls[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Organizationbuttons.length; ++i) {
      Organizationbuttons[i].setAttribute("visible",true);
      Organizationbuttons[i].setAttribute("scale",{x: 1, y: 1, z: 1});
    }
    break;

    case 'Hankkeen osallistujayritykset':
    console.log("Showing Companies");
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].setAttribute("visible",false);
      menuButtonEls[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Companiesbuttons.length; ++i) {
      Companiesbuttons[i].setAttribute("visible",true);
      Companiesbuttons[i].setAttribute("scale",{x: 1, y: 1, z: 1});
    }
    break;

    case 'Muut yhteistyoorganisaatiot':
    console.log("Showing Organizations 2");
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].setAttribute("visible",false);
      menuButtonEls[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Organization2buttons.length; ++i) {
      Organization2buttons[i].setAttribute("visible",true);
      Organization2buttons[i].setAttribute("scale",{x: 1, y: 1, z: 1});
    }
    break;

    case 'Nahtavyydet':
    console.log("Showing Landmarks");
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].setAttribute("visible",false);
      menuButtonEls[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Landmarkbuttons.length; ++i) {
      Landmarkbuttons[i].setAttribute("visible",true);
      Landmarkbuttons[i].setAttribute("scale",{x: 1, y: 1, z: 1});
    }
    break;
    case 'Takaisin':
    console.log("Returning to start");
    for (var i = 0; i < menuButtonEls.length; ++i) {
      menuButtonEls[i].setAttribute("visible",true);
      menuButtonEls[i].setAttribute("scale",{x: 1, y: 1, z: 1});
    }
    for (var i = 0; i < Landmarkbuttons.length; ++i) {
      Landmarkbuttons[i].setAttribute("visible",false);
      Landmarkbuttons[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Organization2buttons.length; ++i) {
      Organization2buttons[i].setAttribute("visible",false);
      Organization2buttons[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Companiesbuttons.length; ++i) {
      Companiesbuttons[i].setAttribute("visible",false);
      Companiesbuttons[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    for (var i = 0; i < Organizationbuttons.length; ++i) {
      Organizationbuttons[i].setAttribute("visible",false);
      Organizationbuttons[i].setAttribute("scale",{x: 0.001, y: 0.001, z: 0.001});
    }
    break;

    default:
    console.log("NULL Switch on onMenuButtonClick");
    break;
    };



   
  },


  //onBackgroundClick
  onBackgroundClick: function (evt) {
    
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    //this.fadeBackgroundEl.object3D.visible = false;
  }
});