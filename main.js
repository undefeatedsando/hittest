/*
  This is a great way to quickly test things out!

  Add all your JavaScript here.
  Open the `index.html` file in Chrome, save changes here,
  and simply refresh Chrome to see those changes.
*/

console.log('Loaded, bro.')


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = document.getElementById('source');
ctx.drawImage(image, 0, 0, 420, 285);


/*const hitCanvas = document.createElement('canvas');
const hitCtx = hitCanvas.getContext('2d');
hitCtx.drawImage(imagemap, 0, 0, 420, 285);*/

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}


// set up some squares

$('#canvas').mousemove(function(e) {
	var part = [];
	part["#01ffff"] = "Хвост";
	part["#00ff00"] = "Тело";
	part["#feff01"] = "Фонарик";
	part["#ff00ff"] = "Голова";
    var pos = findPos(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext('2d');
    var p1 = c.getImageData(x, y, 1, 1).data; 

var imagemap = document.getElementById('source2');
const hitCanvas = document.createElement('canvas');
const hitCtx = hitCanvas.getContext('2d');
hitCtx.drawImage(imagemap, 0, 0, 420, 285);
var p = hitCtx.getImageData(x, y, 1, 1).data; 

    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    var partName = part[hex];
    if (partName == undefined)
    	partName = "";
    $('#status').html(coord + /*"<br>" + hex +*/ "<br>" + partName);
});