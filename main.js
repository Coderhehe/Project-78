var images = [
    "ashu's photo.jpeg","3ba6bbc6-30aa-4a66-ba3b-64de75959882.jpg"
    ]; 
    var i=0;
    function nextone(){ document.getElementById("img").src=images[i];
    i++;
    if(i==9){i=0;}}