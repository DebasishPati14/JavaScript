
function signUp(e){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var userObj = {
        "username" : name,
        "userpass" : pass,
        "useremail" : email
    }

    var userJson = JSON.stringify(userObj);
    localStorage.setItem(name,userJson);
    location.href ="LogIn.html";
}
function login(e){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;

    var user = localStorage.getItem(name);
    var details = JSON.parse(user);
    
    if(details == null){
        document.getElementById('result').innerHTML = "<h3 style='color: red;'>Sorry Wrong User Name</h3>" ;
    }
    else if(details.username == name && details.userpass == pass){
        document.getElementById('result').innerHTML = "<h3 style='color: red;'>Success</h3>" ;
        location.href = "landing.html";
    }
    else{
        document.getElementById('result').innerHTML = "<h3 style='color: red;'>Sorry Wrong Password</h3>" ;

    }
}