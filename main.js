// linking to variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//adding event, button now does something
//listen for event,wait for it to happen
myForm.addEventListener("submit", onSubmit);

//making the event
function onSubmit(e) {
  //dont know what that does, for now
  e.preventDefault();
  //making a error message
  //if true give error
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);

    //else create text node
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);
    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
  // console.log(nameInput.value); Kevin Smith if submit
}

//learned at Traversy Media

/*
https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4360s
timeSTAMPS:
Script Tags - 6:46
Console Output - 8:20
Variables - 11:15
Data Types - 14:18
Strings & String Methods - 18:38
Arrays - 23:53
Object Literals - 30:09
Arrays Of Objects & JSON - 34:20
Loops - 37:40
High Order Array Methods - 42:24
Conditionals - 46:30
Functions - 53:23
Arrow Functions - 56:22
Constructor Functions & Prototypes - 59:25
ES6 Classes - 1:07:21
Window Object & DOM - 1:10:30
DOM Selection - 1:14:50
Manipulating The DOM - 1:20:05
Events - 1:24:40
Form Script - 1:30:39
*/
