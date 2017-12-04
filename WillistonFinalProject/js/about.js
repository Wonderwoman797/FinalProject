/*PicCarousel*/
var currentPosition = 0,
    images = ["images/SchoolPic.jpg",
              "images/dogs.jpg",
              "images/cats.jpg",
              "images/forgiveyourself.jpg",
              "images/orangelillies.jpg",
              "images/fieldpurple.jpg",
              "images/MiniRose.jpg"
              "images/christmascactus.jpg",
              "images/vines.jpg",
              "images/Fieldpink.jpg",
              "images/NeonPink.jpg"];

function updateButtons() {
  if(currentPosition === images.length-1){
    $("#next").attr("disabled", true);
    $("#prev").attr("disabled", false);
  }else if(currentPosition === 0){
    $("#prev").attr("disabled", true);
    $("#next").attr("disabled", false);
  }else{
    $("#prev").attr("disabled", false);
    $("#next").attr("disabled", false);
  }

  $("#next").on("click", function(){
  currentPosition++;
  updateHtml();
  updateButtons();
});

$("#prev").on("click", function(){
  currentPosition--;
  updateHtml();
  updateButtons();
});