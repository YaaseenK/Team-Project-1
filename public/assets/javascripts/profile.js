let username = localStorage.getItem('username');
$(`#profile-user-name`).text(username);
$(`#profile-real-name`).text(username);

let postCount = $(`#post-count`);
let gallery = $(`#gallery`);
let postURLs =  JSON.parse(localStorage.getItem("reposteMemes")) || [];
let repostLink = postURLs.repostURL

function rand(min, max ) {
    let randomNum = Math.random() * (max - min) + min;
    return(Math.floor(randomNum));
}


createGalleray()
function createGalleray(){
    var count = 0;
    var number = 0;
    for( i = 0; i < postURLs.length; i++ ){
        
        console.log(number)
    }
    
    postURLs.forEach(e => {
        randNumOne = rand(100,1000)
        rNumTwo = rand(50, 250);
        count++;
        console.log(count)
        const urls = e.repostLink;
            // create div for gallery-items and add properties
            $('<div>', {
                class: "gallery-item",
                id:`gallery-item${[count]}`,
                tabindex: "0"
            }).appendTo(gallery);
            $('<img>',{
                src: urls,
                class: "gallery-image",
                id: "gallery-img",
            }).appendTo(`#gallery-item${[count]}`)
            $('<div>',{
                class: 'gallery-item-info',
                id: `gallery-item-info${[count]}`
            }).appendTo(`#gallery-item${[count]}`)
            $('<ul>',{
                id: `ul${[count]}`
            }).appendTo(`#gallery-item-info${[count]}`)
            $('<li>' ,{
                class: "gallery-item-likes",
                id: `gallery-item-likes${[count]}`,
                text: randNumOne
            }).appendTo(`#ul${[count]}`)
            $(`<span>` , {
                class: "visually-hidden",
                id: "visually-hidden",
                text: "Likes:"
            }).appendTo(`#gallery-item-likes${[count]}`)
            $(`<i>` , {
                class: "fas fa-heart",
                ariahidden:("aria-hidden", "true")
            }).appendTo(`#gallery-item-likes${[count]}`)
            $(`<li>`,{
                class: "gallery-item-comments",
                id: `gallery-item-comments${[count]}`,
                text: rNumTwo
            }).appendTo(`#ul${[count]}`)
            $(`<span>`,{
                class: "visually-hidden",
                text: 'comments'
            }).appendTo(`#gallery-item-comments${[count]}`)
            $(`<i>`,{
                class: "fas fa-comment",
                ariahidden: "true"
            }).appendTo(`#gallery-item-comments${[count]}`)
        }); 

}

