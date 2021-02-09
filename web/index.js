function getRandomPokemanPic(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("pokeman").src = this.responseText;
        }
    }

    xhr.open("GET", "http://localhost:4000/dog/random")
    xhr.send();
}