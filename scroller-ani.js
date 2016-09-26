// When you scroll from the intro image it fades away.
window.onscroll = (function(){
  if(window.pageYOffset > 0 && window.pageYOffset < screen.height){
    console.log(screen.height/window.pageYOffset);
    document.getElementById('intro-img').style.opacity = Math.abs((window.pageYOffset/screen.height) -1 );
  }
});
