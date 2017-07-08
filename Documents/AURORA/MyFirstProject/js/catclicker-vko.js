
/*
var cats = [
 {catname:"ZIZI", catimg:"images/cat_picture1.jpg", catclickcounter:0},
 {catname:"FLUFFY", catimg:"images/cat_picture2.jpeg", catclickcounter:0},
 {catname:"PIF", catimg:"images/cat_picture3.jpeg", catclickcounter:0},
 {catname:"GARFIELD", catimg:"images/cat_picture4.jpeg", catclickcounter:0},
 {catname:"LION", catimg:"images/cat_picture5.jpeg", catclickcounter:0}
];
var Cat=function(cname,ccounter,cimg){
  this.selectedcatname = ko.observable();
  this.selectedcatname = cname;
  this.selectedcatclickcounter = ko.observable();
  this.selectedcatclickcounter(ccounter);
  this.selectedcatimg = ko.observable();
  this.selectedcatimg = cimg;

  this.selectedcatlevel = ko.computed(function(){
           if(this.selectedcatclickcounter()<2) {
          return 'newborn';
       } else if(this.selectedcatclickcounter()<5){
          return 'infant';
       } else if(this.selectedcatclickcounter()>10){
           return 'senior';
       }else {
          return 'mature';
       };
    },this);
};*/

/*var cats = [
 {nickname:"UNO", catname:"ZIZI", catimgSrc:"images/cat_picture1.jpg", catclickcounter:0, catlevel:''},
 {nickname:"FF", catname:"FLUFFY", catimgSrc:"images/cat_picture2.jpeg", catclickcounter:0, catlevel:''},
 {nickname:"PIFY", catname:"PIF", catimgSrc:"images/cat_picture3.jpeg", catclickcounter:0, catlevel:''},
 {nickname:"G", catname:"GARFIELD", catimgSrc:"images/cat_picture4.jpeg", catclickcounter:0, catlevel:''},
 {nickname:"LEU", catname:"LION", catimgSrc:"images/cat_picture5.jpeg", catclickcounter:0, catlevel:''}
];
*/
var Cat = function(){
  this.nicknames = ko.observableArray([{nickname: 'UNO'},{nickname: 'DOS'},{nickname: 'PIFY'},{nickname: 'LEU'}]);
  this.catname = ko.observable('ZIZI');
  this.catclickcounter = ko.observable(0);
  this.catimgSrc = ko.observable('images/cat_picture4.jpeg');

  this.catlevel = ko.computed(function(){
      if(this.catclickcounter()<2) {
          return 'newborn';
       } else if(this.catclickcounter()<5){
          return 'infant';
       } else if(this.catclickcounter()>10){
           return 'senior';
       }else {
          return 'mature';
       };
    },this);
};
var ViewModel = function(){
this.currentCat = ko.observable(new Cat());

 this.resetCounter = function(){
   this.currentCat().catclickcounter(0);
 };

 this.incrementCounter = function(){
   this.currentCat().catclickcounter(this.currentCat().catclickcounter()+1);
 };

};
ko.applyBindings(new ViewModel());
