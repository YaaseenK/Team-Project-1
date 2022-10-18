    let welcomMessageText = $('#welcomeUser');
    let introAnimation = $(`#loading`);
    var counter = 0;
    let counterText = $(`#counter`);
    let index=0;
    let img = document.querySelector('img');
    let memes;

    // initialize getInfofuntion
    getInfo();

    // get username from local storage && create welcome message
    function getInfo(){
        let userName = localStorage.getItem('username');
        let welcomeMessage = (`hello, ${userName}!`);
        welcomMessageText.text(welcomeMessage)
    }

    // function to updated the counter
    // takes in one num parameter holding counter value
    function updateCounter(currentcounter){

    // setting number callback to counter variable
        let counter = currentcounter;

    // places counter val to DOM
        counterText.text(counter);
    }
    function displayImg(){
        // add hidden class to loading animation
        introAnimation.addClass('hidden');
        // Removes hidden class list from img
        img.classList.remove('hidden');
    }

    // RELATABLE BUTTON ONCLICK FUNCTION!
    clickCatOne = () => {
        var clickOne = true;
        console.log(clickOne);
        localStorage.setItem('currentCat', clickOne);
    // initialize display displayIMG function
        displayImg();
    // +1 to counter each time it is clicked
        counter++;
    // initialize updateCounter function with counter callback
        updateCounter(counter);
    // fetch api from url:
    fetch('https://www.reddit.com/r/memes/.json')
    // Sends a JSON response composed of api data
        .then(res => res.json())
    //  Explicit JSON data request for data.children
        .then(res => res.data.children)
    //  W/ respones object with variables containing more explicit data
        .then(res => res.map(post => ({
            author : post.data.author,
            link : post.data.url,
            title : post.data.title
    })))

    //  calls render function provides res object created above
    // used to render view and sends the rendered HTML string to the client.
        .then(res => render(res))
        .catch(err => console.error(err));
        }

    // function is passed one argument
    function render(res){
        // asign the array to memes variable
            let memes = res
        // if index is less than array length
        if(index < memes.length){
            //  set img src a value from the index of memes array link
            img.setAttribute("src" , memes[index].link)
            // add link of current meme to local storage
            localStorage.setItem('currentMeme' , memes[index].link)
        }
        // ternary operator shortcut for if statement
        // if index is less than memes.length than add one to index
        // else log thats all
            index = index < memes.length ? ++index : console.log('Thats all');
    }

    // const generateMemeBtn = document.querySelector(".meme-generator .gen-btn");
    // const memeImg = document.querySelector(".meme-generator img");
    // const memeTitle = document.querySelector(".meme-generator .meme-title");
    // const author = document.querySelector("meme-generator .author");
    const updateDetails = (url, title, author)  => {
        img.setAttribute("src", url);
        // memeTitle.innerHTML = title;
        // memeAuthor.innerHTML =`Meme by: ${author}`;
    }
    
    clickCatTwo = () =>{
        // initialize display displayIMG function
            displayImg();
            var cat = false;
            console.log(cat, 'in the cat two function')
            localStorage.setItem('currentCat', cat);
        // +1 to counter each time it is clicked
            counter++;
        // initialize updateCounter function with counter callback
            updateCounter(counter);
        // fetch api from url:
        fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
        // Sends a JSON response composed of api data
        .then((response) => response.json())
        .then((data) => {
            console.log(data.title)
            updateDetails(data.url, data.title, data.author)
            localStorage.setItem('currentMeme' ,data.url)
            // .catch(err => console.error(err));
        });
}
    clickCatThree = () => {
        window.open("./profile.html", "_self")
    }

