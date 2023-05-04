let canvas = document.querySelector('.canvas');
// Disable drag-and-drop feature on the canvas
document.querySelector('.canvas').ondragstart = function() {
   return false;
};

/* Create a 16x16 canvas */
createCanvas(16);

/* Click on cell to color it in black */
// Mouse pointer hover the canvas
let squares = document.querySelectorAll('.canvas > div');
squares.forEach(square => {
      square.addEventListener('mousedown',(e) => {
      // If no mouse click or press
      if(e.buttons === 0){ return }
      // On left mouse click
      if(e.button === 0){
         square.style.background = 'black';
      }
   });
   square.addEventListener('mousemove',(e) => {
      // If no mouse click or press
      if(e.buttons === 0){ return }
      // On left mouse click
      if(e.button === 0){
         square.style.background = 'black';
      }
   });
});

/* Control canvas resolution */
let inputResolution = document.querySelector('#res');
inputResolution.addEventListener('change',() => {
   "inputResolution.style.background = 'black';"
   /*
   NOT WORKING :^)
   let inputResolutionValue = inputResolution.value;
   removeCanvas();
   createCanvas(inputResolutionValue);
   */
});

// Create canvas with display grid css styles
function createCanvas(res){
   const sheet = new CSSStyleSheet();
   sheet.replaceSync(".canvas {"+
      "grid-template-columns: repeat("+res+", 6.25%);"+
      "grid-template-rows: repeat("+res+", 6.25%);"+
   "}");
   document.adoptedStyleSheets = [sheet];
   for(i=1;i<=(res*res);i++){
      let div = document.createElement('div');
      div.setAttribute('id',''+i+'');
      canvas.appendChild(div);
   }
}

// Erase canvas
function removeCanvas(){
   let divs = document.querySelector('.canvas > div');
   divs.forEach(div => {
      div.remove();
   });
}