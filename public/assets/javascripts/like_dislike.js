// Author: Heidi Chan

let numberOflikes = localStorage.getItem("totalLike");
let dislike = localStorage.getItem("totalDislike");
var like = $(`#likeBtn`)
localStorage.setItem('reposteMemes', JSON.stringify([]));
const reposteMemes = JSON.parse(localStorage.getItem('reposteMemes')) || [];




like.click(()=> {     
    let likedURL = localStorage.getItem('currentMeme');
    repostLink = {
        repostLink: likedURL,

        repostURL: this.repostLink 
    }
    reposteMemes.push(repostLink);
    console.log(reposteMemes)
    localStorage.setItem('reposteMemes' , JSON.stringify(reposteMemes))
    clickCatOne()
});



document.getElementById("dislike").onclick = function() {
    dislike ++;
    console.log(dislike);
    localStorage.setItem("totalDislike", dislike);
}

