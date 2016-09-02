function doThis(){
  var canvas = document.getElementById("canvas");
  var image_canvas = document.getElementById("image");
  var ictx = image_canvas.getContext("2d");
  var img = document.getElementById("img");
  var vctx = canvas.getContext("2d"),
      width = canvas.width,
      height = canvas.height;
  ictx.drawImage(img,0,0);
  img_data = ictx.getImageData(0,0,image_canvas.width,image_canvas.height);
  var getPixelDataAt = (function (x,y,width){
    r_index = (x*4)+(width*y*4);
    g_index = r_index+1;
    b_index = g_index+1;
    r = img_data.data[r_index];
    g = img_data.data[g_index];
    b = img_data.data[b_index];
    return [r,g,b];
  });
  window.setInterval(function(){glassFilter(vctx,ictx,canvas,image_canvas,width,height,img_data,getPixelDataAt);},100);

}
window.onload = doThis();
function glassFilter(vctx,ictx,canvas,image_canvas,width,height,img_data,getPixelDataAt){
vctx.clearRect(0, 0, width, height);
var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);


var sites = [];
for(var i=0;i<10000;i++){
  sites.push([Math.random() * width, Math.random() * height]);
}

var diagram = voronoi(sites);
var polygons = diagram.polygons();
//vctx.strokeStyle = "transparent";
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
  //console.log(color);
  vctx.strokeStyle = color;
  //vctx.strokeStyle = "black";
  vctx.fillStyle = color;
  vctx.stroke();
  vctx.fill();
  polygonc++;
});
 // vctx.fillStyle = "black";
 // sites.forEach(function(dots){
 //   vctx.fillRect(dots[0],dots[1],2,2);
 //
 // });


  console.log("Done");

}
