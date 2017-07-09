var initialCats = [
 {catclickcounter:20, nicknames:['UNO'], catname:'ZIZI', catimgSrc:'images/cat_picture1.jpg'},
 {catclickcounter:0, nicknames:['DODO'], catname:'FLUFFY', catimgSrc:'images/cat_picture2.jpeg'},
 {catclickcounter:0, nicknames:['PIFY'], catname:'PIF', catimgSrc:'images/cat_picture3.jpeg'},
 {catclickcounter:0, nicknames:['GOGO'], catname:'GARFIELD', catimgSrc:'images/cat_picture4.jpeg'},
 {catclickcounter:0, nicknames:['LEU'], catname:'LION', catimgSrc:'images/cat_picture5.jpeg'}
];

var Cat = function(data){
  this.catname = ko.observable(data.catname);
  this.catclickcounter = ko.observable(data.catclickcounter);
  this.catimgSrc = ko.observable(data.catimgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.catlevel = ko.computed(function(){
     var level = '';
     var clickcounter = this.catclickcounter();
      if(clickcounter<2) {
          level= 'newborn';
       } else if(clickcounter<5){
          level= 'infant';
       } else if(clickcounter>10){
           level= 'senior';
       }else {
          level='unknown';
       };
       return level;
    },this);

    this.resetCounter = function(){
       return this.catclickcounter(0);
    };

    this.incrementCounter = function(){
       return this.catclickcounter(this.catclickcounter()+1);
    };
};

var ViewModel = function(){
var self = this;

this.catList = ko.observableArray([]);

initialCats.forEach(function(catItem){
  self.catList.push(new Cat(catItem));
});

this.currentCat = ko.observable(this.catList()[0]);
/*
this.resetCounter = function(){
   self.currentCat().catclickcounter(0);
};

this.incrementCounter = function(){
   self.currentCat().catclickcounter(self.currentCat().catclickcounter()+1);
};
*/
};
ko.applyBindings(new ViewModel());
