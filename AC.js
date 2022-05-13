Status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("AC.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}
function modelLoaded(){
    console.log("ModelLoaded!");
    Status = true;
    object_detector.detect(AC_image, gotResult);
}
function gotResult(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(AC_image,0,0,640,350);
}