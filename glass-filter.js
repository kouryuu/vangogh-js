var canvas = document.getElementById("canvas");
var image_canvas = document.getElementById("image");
var ictx = image_canvas.getContext("2d");
var img = document.getElementById("img");

var vctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);
vctx.drawImage(img,0,0);
var sites = [];
for(var i=0;i<200;i++){
  sites.push([Math.random(1) * width, Math.random(1) * height]);
}
vctx.fillStyle = "black";
sites.forEach(function(dots){
  vctx.fillRect(dots[0],dots[1],5,5);

});

var diagram = voronoi(sites);
var polygons = diagram.polygons();

vctx.strokeStyle = "black";
polygons.forEach(function(polygon){
vctx.beginPath();
  polygon.forEach(function(vertex){
      vctx.lineTo(vertex[0],vertex[1]);
    });

  vctx.closePath();
 vctx.stroke();
 // context.fillStyle = "white";
  //context.fill();
});
