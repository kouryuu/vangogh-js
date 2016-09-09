function loadImage(){
  cleanUp();
  window.URL = window.URL || window.webkitURL;
  var upload = document.getElementById('upload');
  var reader = new FileReader();
  reader.onload = (function(){
    document.getElementById('image_message').innerHTML = "Processing image ...";
    var img_src = reader.result;
    //console.log(img_src);
    setupCanvas(img_src);
  });
  reader.readAsDataURL(upload.files[0]);

}
function setupCanvas(img_src){
  if(typeof(img_src) == 'undefined')
    return;
  var image_root = document.getElementById("image_root");
  var canvas = document.createElement("canvas");
  canvas.id = "canvas";
  var image_canvas = document.createElement("canvas");
  image_canvas.id = "image";
  image_root.appendChild(canvas);
  image_root.appendChild(image_canvas);
  var image = new Image();
  image.src = img_src;
  image.onload = (function(){
  image_canvas.width = image.width;
  image_canvas.height = image.height;
  image_canvas.hidden = true;
  canvas.width = image.width;
  canvas.height = image.height;
  var ictx = image_canvas.getContext("2d");
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
  n_points = 30000
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
    placeProcessedImage();
  });

}
document.onload = setupCanvas();
function placeProcessedImage(){
  canvas = document.getElementById('canvas');
  var img_data = canvas.toDataURL();
  display = document.getElementById('image_display');
  var old_image = document.getElementById('image_processed');
  console.log(old_image);
  if(old_image != null){
    display.removeChild(old_image);
  }
  var image = document.createElement("img");
  image.src = img_data;
  image.height = 300;
  image.width = 300;
  image.id= 'image_processed';
  var link = document.createElement("a");
  link.href = img_data;
  link.target = 'blank';
  link.style = 'text-decoration: none;color:black;';
  display.appendChild(link);
  link.innerHTML = "Click or tap to view full image";
  link.appendChild(image);
  document.getElementById('image_message').innerHTML = "";
}
function cleanUp(){
  var image_root = document.getElementById("image_root");
  image_root.innerHTML ="";
}
