function doThis(){
  var image_root = document.getElementById("image_root");
  var canvas = document.createElement("canvas");
  canvas.id = "canvas";
  var image_canvas = document.createElement("canvas");
  image_canvas.id = "image";
  image_root.appendChild(canvas);
  image_root.appendChild(image_canvas);
  //var canvas = document.getElementById("canvas");
  //var image_canvas = document.getElementById("image");
  var image = new Image();
  image.src = 'aish.jpg';
  image.onload = (function(){
  image_canvas.width = image.width;
  image_canvas.height = image.height;
  image_canvas.hidden = true;
  canvas.width = image.width;
  canvas.height = image.height;
  var ictx = image_canvas.getContext("2d");
  //var img = document.getElementById("img");
  var vctx = canvas.getContext("2d"),
      width = canvas.width,
      height = canvas.height;
  ictx.drawImage(image,0,0);
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
  n_points = 1000
  var inte =window.setInterval(function(){
    if(n_points < 10000){
    n_points += 1000;
    glassFilter(
      {original_context: vctx,
        image_context: ictx,
        original_canvas: canvas,
        image_canvas: image_canvas,
        width: width,
        height: height,
        image_data: img_data,
        getPixelDataFunc: getPixelDataAt,
        number_of_points: n_points
      }
    );
  }
},200);

  });

}
document.onload = doThis();

function glassFilter(options){
  var  vctx = options.original_context;
  var  ictx = options.image_context;
  var  canvas = options.original_canvas;
  var image_canvas = options.image_canvas;
  var width = options.width;
  var height = options.height;
  var img_data = options.image_data;
  var getPixelDataAt = options.getPixelDataFunc;
  var n_points = options.number_of_points;
  vctx.clearRect(0, 0, width, height);
  var voronoi = d3.voronoi()
      .extent([[-1, -1], [width + 1, height + 1]]);
  var sites = [];
  for(var i=0;i<n_points;i++){
    sites.push([Math.random() * width, Math.random() * height]);
  }
  var diagram = voronoi(sites);
  var polygons = diagram.polygons();
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
    vctx.strokeStyle = (typeof(options.strokeColor) !== 'undefined')? options.strokeColor: color;
    vctx.fillStyle = color;
    vctx.stroke();
    vctx.fill();
    polygonc++;
  });
  if(options.displayCentroids){
    vctx.fillStyle = "black";
    sites.forEach(function(dots){
      vctx.fillRect(dots[0],dots[1],2,2);
      });
  }

}
