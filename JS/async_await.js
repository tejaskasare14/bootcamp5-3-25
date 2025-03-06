async function getUsers()
{
    console.log("inside getUsers function 1");
    
   let response = await fetch("https://api.github.com/users")
   let users = await response.json()
   for(let user of users)
    {
        console.log(user.login);    
    }
    console.log("inside getUsers function 2");
}

getUsers()
console.log("this is last line of code");


