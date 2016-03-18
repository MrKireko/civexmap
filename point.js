var mouseX, mouseY;
function init(){
    var imageElement = document.getElementById("baseMapPNG");
    var canvasElement = document.getElementById("pointerShow");
    var context = canvasElement.getContext("2d");
    context.canvas.height = imageElement.height;
    context.canvas.width = imageElement.width;
  
    window.onmousemove = getMouseCoordinates;
}

function getMouseCoordinates(evt){
    mouseX = evt.pageX;
    mouseY = evt.pageY;
    
    //17664 blocks wide and high
    //vs 4322 px wide and high
    //equals a factor of 4.0869967607589
    mouseX *= 4.0869967607589;
    mouseY *= 4.0869967607589;
    
    mouseX = parseInt(mouseX) - 10112;
    mouseY = parseInt(mouseY) - 6528;
    document.getElementById("coords").innerHTML = "x: " + mouseX + "<br/>z: " + mouseY;
}

/*Original code by Mr_L1berty*/