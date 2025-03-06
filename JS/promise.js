// fetch("https://dummyjson.com/products")
// .then(response=> response.json()
//                             .then(data=>console.log(data))
//                             .catch(error=>console.log(error)))
// .catch(error=>console.log(error))

fetch("https://api.github.com/users")
.then(response => response.json()
                                .then(users =>
                                {
                                    //console.log(users)
                                    for(let user of users)
                                    {
                                        console.log(user.login);    
                                    }
                                }))
                                .catch(error => console.log(error))
.catch(error => console.log(error))

console.log("this line is last line of my code");
