// Author: Heidi Chan
let numberOflikes = localStorage.getItem("totalLike");
let dislike = localStorage.getItem("totalDislike");
var like = $(`#likeBtn`)

localStorage.setItem('reposteMemes', JSON.stringify([]));
const reposteMemes = JSON.parse(localStorage.getItem('reposteMemes')) || [];

like.on('click', () => {
    let cat = localStorage.getItem("currentCat");
    let likedURL = localStorage.getItem('currentMeme');
    console.log(cat)
    repostLink = {
        repostLink: likedURL,
        repostURL: this.repostLink
    }
    reposteMemes.push(repostLink);
    console.log(reposteMemes)
    localStorage.setItem('reposteMemes' , JSON.stringify(reposteMemes))
    console.log({cat}, cat!= false)
    if (cat != 'false'){  // true
        clickCatOne();
    }
    else { // false
        console.log(cat)
        clickCatTwo();
    }
});

document.getElementById("dislike").onclick = function() {
    dislike ++;
    console.log(dislike);
    localStorage.setItem("totalDislike", dislike);
}

