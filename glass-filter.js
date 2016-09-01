var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);
var sites = [];
for(var i=0;i<200;i++){
  sites.push([Math.random(1) * width, Math.random(1) * height]);
}
context.fillStyle = "black";
sites.forEach(function(dots){
  context.fillRect(dots[0],dots[1],5,5);

});

var diagram = voronoi(sites);
var polygons = diagram.polygons();

context.strokeStyle = "black";
polygons.forEach(function(polygon){
context.beginPath();
  polygon.forEach(function(vertex){
      context.lineTo(vertex[0],vertex[1]);
    });

  context.closePath();
 context.stroke();
 // context.fillStyle = "white";
  //context.fill();
});
