

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
        username: "Yaaseen",
        password: "Yaaseeny99"
    },
    {
        username: "Serhiy",
        password: "Serhiys99"
    },
]

function getInfo() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var ismatchFaund = false;


    for (var i = 0; i < objPeople.length; i++) {
        //check is user input matches usernames and passwords of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) { 
            ismatchFaund = true;
            window.open("./feed.html", "_self") /*opens the target page while username & password matches*/
            localStorage.setItem('username', username);
        } 
    }
    
    if ( !ismatchFaund )
    alert("Username or Password incorrect");
    
}

