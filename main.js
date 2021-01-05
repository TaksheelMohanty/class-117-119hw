function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cXVyiscWX/', modelLoaded);
}

function modelLoaded(){
    console.log('Model loaded!');
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(results, error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementsByClassName("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}