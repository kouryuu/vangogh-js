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
