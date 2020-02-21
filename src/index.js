document.addEventListener("DOMContentLoaded", () => {
  
  //Array that holds input
  let toDoList = []


  //"$()" is short hand for "document.getElementById"
  function $(x) {return document.getElementById(x);}


  //returns the last element pushed into the array
  function showListItem(listArray){
    return bulletList(listArray[listArray.length-1])
  }


  //Creates li nodes/adds interaction
  function bulletList(content){
    let li = document.createElement("li")
  
    $("tasks").appendChild(li)
    li.innerHTML = content + " <button class='delete'>Delete</button>"
    li.querySelector(".delete").addEventListener("click", e =>  
          li.remove()
        )//end of eventlistener
    
  }
  
  //Adds input to to-do array
  $("create-task-form").addEventListener('submit', function(event) {
    event.preventDefault()
    listItem = $("new-task-description").value
    toDoList.push(listItem)
    console.log(toDoList)
    
    return showListItem(toDoList)
  })
  
  function mkeButton(buttonType){
    let button = document.createElement("BUTTON")
    button.createTextNode(buttonType)

  }
    
  
}); //DOM event listener/ end of code
