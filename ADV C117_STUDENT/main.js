function setup(){
canvas = createCanvas(400,400)
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);

synth = window.speechSynthesis;
}

function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
strokeWeight(12);
stroke("black");

if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY);                                      

}
}

function classifyCanvas(){
classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }

    console.log(results);
document.getElementById("label").innerHTML = "Your drawing is:" + results[0].label;
document.getElementById("confidence").innerHTML = "Your confidence is:" + Math.round (results[0].confidence * 100 ) + "%";
}

function clearCanvas(){
    background("white");

}