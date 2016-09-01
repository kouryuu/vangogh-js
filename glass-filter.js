window.onload = function(){
var canvas = document.getElementById("canvas");
var image_canvas = document.getElementById("image");
var ictx = image_canvas.getContext("2d");
var img = document.getElementById("img");

var vctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);
ictx.drawImage(img,0,0);
img_data = ictx.getImageData(0,0,image_canvas.width,image_canvas.height);
var sites = [];
for(var i=0;i<1000;i++){
  sites.push([Math.random() * width, Math.random() * height]);
}
vctx.fillStyle = "black";
sites.forEach(function(dots){
  vctx.fillRect(dots[0],dots[1],2,2);

});

var diagram = voronoi(sites);
var polygons = diagram.polygons();

vctx.strokeStyle = "transparent";
var polygonc = 0;
polygons.forEach( function (polygon){
point = sites[polygonc];

colorToPaint = getPixelDataAt(Math.round(point[0]),Math.round(point[1]),image_canvas.width);
color = "rgb("+colorToPaint[0]+","+colorToPaint[1]+","+colorToPaint[2]+")";
vctx.beginPath();
  polygon.forEach(function(vertex){
      vctx.lineTo(vertex[0],vertex[1]);
    });

  vctx.closePath();
//  console.log(color);
  vctx.strokeStyle = color;
  vctx.fillStyle = color;
  vctx.stroke();
  vctx.fill();
  polygonc++;
});
function getPixelDataAt(x,y,width){
  r_index = (x*4)+(width*y*4);
  g_index = r_index++;
  b_index = g_index++;
  r = img_data.data[r_index];
  g = img_data.data[g_index];
  b = img_data.data[b_index];
  return [r,g,b];
}
}
