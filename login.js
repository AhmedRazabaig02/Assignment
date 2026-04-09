function user(username,password){
    if (username==="Ahmed"){
        if (password===321){
            return `welcome To ${username}`
        }
        else{
            return"wrong password";
        }
    }
    else {
        return "username and password wrong"
    }
}
console.log(user("Ahmed",421)) 