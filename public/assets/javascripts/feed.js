var username = 'oh boi';

function getUserName() {
    var testUN = localStorage.getItem('username');
    if(testUN == undefined || testUN == '' || testUN == null) {
        // Username does not exist.
    } else {
        username = testUN;
    }
    console.log(username);
    document.getElementById('welcomeUser').innerHTML = 'Greetings ' + username;
}


function setUserName() {
    var testUN = localStorage.setItem('username', 'Mayank');

}

getUserName();
var imageCounter = 0;

var tiktokImageUrl = 'https://myobt.files.wordpress.com/2020/06/dad.jpg';
catSelected = 'Category 1';

function getImageFromTTAndShow() {
    var elem = document.getElementById('imageIdPlaceholder');
    elem.setAttribute('src', tiktokImageUrl);

    imageCounter = imageCounter + 1;
    var cc = document.getElementById('counter');
    cc.innerHTML = imageCounter + '/5';

        if(imageCounter >= 5) {
            setTimeout(() => {
                document.getElementById('popupDialog').style.display = 'block';
                document.getElementById('Cont').style.display = 'none';
                document.getElementById('okOne').innerHTML = 'Thank you for watching '+  username  + '. You like category '+ catSelected + ' ! ';
        }, 1000);
        }
}

function newPage() {
    window.open('./feed.html', '_self');

}
function newPage1() {
    window.open('./index.html', '_self');
}

getImageFromTTAndShow();
function clickCatOne() {
    // Call TikTok API and replace it with this one.
    catSelected = 'Category 1';
    tiktokImageUrl = 'https://myobt.files.wordpress.com/2020/06/dad.jpg';
    getImageFromTTAndShow();
}


function clickCatTwo() {
    // Call TikTok API and replace it with this one.
    catSelected = 'Category 2';
    tiktokImageUrl = 'https://i.pinimg.com/736x/e4/b2/3a/e4b23a720f57df51934ae3ba2634d800.jpg';
    getImageFromTTAndShow();
    
}


function clickCatThree() {
    // Call TikTok API and replace it with this one.
    catSelected = 'Category 3';
    tiktokImageUrl = 'https://www.rd.com/wp-content/uploads/2021/01/175BadJokes-19.jpg?fit=700,700';
    getImageFromTTAndShow();
}

