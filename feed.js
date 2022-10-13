let like = localStorage.getItem("totalLike");
let dislike = localStorage.getItem("totalDislike");

document.getElementById("like").onclick = function() {
    like ++;
    console.log(like);
    localStorage.setItem("totalLike", like);
}

document.getElementById("dislike").onclick = function() {
    dislike ++;
    console.log(dislike);
    localStorage.setItem("totalDislike", dislike);
}



