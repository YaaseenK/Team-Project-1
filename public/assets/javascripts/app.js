let hideClass = document.getElementById('alert-container');
//Coded By: Serhiy Zvedenyuk
//Loop through Array of Objects
var objPeople = [
    {
        username: "Heidi",
        password: "Heidih99"
    },
    {
        username: "Mayank",
        password: "Mayankm99"
    },
    {
        username: "Glen",
        password: "Gleng99"
    },
    {
        username: "Yaaseen_",
        password: "Yaaseen99"
    },
    {
        username: "Serhiy",
        password: "Serhiys99"
    },
]


function getInfo(capitalizeFirstLetter) {
    var username = document.getElementById('username').value;
    const capitalizedUser = username.charAt(0).toUpperCase() + username.slice(1);

    var password = document.getElementById('password').value;
    var ismatchFaund = false;


    for (var i = 0; i < objPeople.length; i++) {
        //check if user input matches usernames and passwords of a current index of the objPeople array
        if(capitalizedUser == objPeople[i].username && password == objPeople[i].password) { 
            ismatchFaund = true;
            window.open("./page/feed.html", "_self") /*opens the target page while username & password matches*/
            localStorage.setItem('username', capitalizedUser);
        } 
    }

    if ( !ismatchFaund ){
        hideClass.classList.remove('hidden');
        $("#alert-text").text("Username or Password incorrect");
        setTimeout(() => {
            hideClass.classList.add('hidden');
        }, 5000);

    }
    
}

