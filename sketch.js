class planet {
  constructor(dimensi, jarak, sudut, kecepatan){
    this.dimensi = dimensi;
    this.jarak = jarak;
    this.sudut = sudut;
    this.kecepatan = kecepatan;
  }
}

let v = 3;
const matahari = new planet(25,0,0,0);
const bumi = new planet(5,75,1,1/3*v);
let rotasibulan = 1;



//tambahan
const merkurius = new planet(3,30,1,1*v)
const venus = new planet(5,50,1,1/2*v)
const mars = new planet(5,90,1,1/4*v)
const jupiter = new planet(15,125,1,1/5*v)
const saturnus = new planet(7,160,1,1/6*v)
const uranus = new planet(7,180,1,1/7*v)
const neptunus = new planet(5,200,1,1/8*v)

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  
  matahariShow();
  bumiShow();
  merkuriusShow();
  venusShow();
  marsShow();
  jupiterShow();
  saturnusShow();
  uranusShow();
  neptunusShow();
}

//Matahari
function matahariShow(){
  noStroke();
  fill(255,100,50);
  circle(matahari.jarak,matahari.jarak,matahari.dimensi);
}

//Bumi
function bumiShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,212);
  
  //planet
  rotate(bumi.sudut);
  noStroke();
  fill('dodgerblue');
  circle(bumi.jarak,bumi.jarak,bumi.dimensi);
  bumi.sudut += bumi.kecepatan;
  
  //Bulan
  fill('white');
  translate(bumi.jarak,bumi.jarak);
  rotate(rotasibulan);
  circle(10,10,2);
  pop()
  rotasibulan += 1
}

//Merkurius
function merkuriusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,85);

  //planet
  rotate(merkurius.sudut);
  noStroke();
  fill('orange');
  circle(merkurius.jarak,merkurius.jarak,merkurius.dimensi);
  pop();
  merkurius.sudut += merkurius.kecepatan;
}

//Venus
function venusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,142);

  //planet
  rotate(venus.sudut);
  noStroke();
  fill('#937D64');
  circle(venus.jarak,venus.jarak,venus.dimensi);
  pop();  
  venus.sudut += venus.kecepatan;
}

//Mars
function marsShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,254);
  
  //sabuk orbit
  strokeWeight(10);
  stroke('grey');
  noFill();
  circle(0,0,300);

  //planet
  rotate(mars.sudut);
  noStroke();
  fill('red');
  circle(mars.jarak,mars.jarak,mars.dimensi);
  pop();
  mars.sudut += mars.kecepatan;
}

//Jupiter
function jupiterShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,355);

  //planet
  rotate(jupiter.sudut);
  noStroke();
  fill('pink');
  circle(jupiter.jarak,jupiter.jarak,jupiter.dimensi);
  pop();
  jupiter.sudut += jupiter.kecepatan;
}

//Saturnus
function saturnusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,452);

  //planet
  rotate(saturnus.sudut);
  noStroke();
  fill('darkorange');
  circle(saturnus.jarak,saturnus.jarak,saturnus.dimensi);
  
  //cincin
  noFill();
  stroke('grey');
  ellipse(saturnus.jarak,saturnus.jarak,50,20);
  pop();
  saturnus.sudut += saturnus.kecepatan;
}

//Neptunus
function neptunusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,565);

  //planet
  rotate(neptunus.sudut);
  noStroke();
  fill('cyan');
  circle(neptunus.jarak,neptunus.jarak,neptunus.dimensi);
  pop();
  neptunus.sudut += neptunus.kecepatan;
}

//Uranus
function uranusShow(){
  push();
  
  //orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,510);

  //planet
  rotate(uranus.sudut);
  noStroke();
  fill('lightgreen');
  circle(uranus.jarak,uranus.jarak,uranus.dimensi);
  pop();
  uranus.sudut += uranus.kecepatan;
}