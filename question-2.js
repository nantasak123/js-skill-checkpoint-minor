// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
function getDataFromServer(){
    return fetch("https://jsonplaceholder.typicode.com/users")
}
function handleResponse(response){
    return response.json()
  }
function onSuccess(data){
    let newUsers = data.map(getOnlyUsers)
    console.log(newUsers)  
    let longName = newUsers.filter(filter17LessCharacters)
    console.log(longName)
}
function getOnlyUsers(user){
    return user.name
  }
function filter17LessCharacters(array){
    return array.length > 17
}

  getDataFromServer().then(handleResponse).then(onSuccess)

