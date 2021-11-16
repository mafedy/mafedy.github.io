//Oxymetre
function project1(){
  showStuff("oxymetreBig");
  hideStuff("small");
};
  
function project1bis(){
  showStuff("small");
  hideStuff("oxymetreBig");
};

// Tracking
function project2(){
  showStuff("trackingBig");
  hideStuff("small");
};
  
function project2bis(){
  showStuff("small");
  hideStuff("trackingBig");
};

//ECG
function project3(){
  showStuff("ecgBig");
  hideStuff("small");
};
  
function project3bis(){
  showStuff("small");
  hideStuff("ecgBig");
};

//ECOLOGY
function project4(){
  showStuff("ecologyBig");
  hideStuff("small");
};
  
function project4bis(){
  showStuff("small");
  hideStuff("ecologyBig");
};


//GENERAL
function showStuff(id) {
    document.getElementById(id).style.display = 'flex';
}    
  
function hideStuff(id) {
    document.getElementById(id).style.display = 'none';
}
  
