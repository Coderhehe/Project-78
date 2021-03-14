var names= [
    "Ashu","Aryan"
];
var images = [
    "ashu's photo.jpeg","3ba6bbc6-30aa-4a66-ba3b-64de75959882.jpg"
    ]; 
    var i=0;
    function nextone(){ document.getElementById("img").src=images[i]; document.getElementById("h4").innerHTML=names[i];
    i++;
    if(i==2){i=0;}}