// DOM MANIPULATION

// Selecting elements

// GetElementById()
// let title = document.getElementById("main-heading");
// console.log(title)

// GetElementByClassName()

// title = document.getElementsByClassName('list-items')
// console.log(title)

// getElementsByTagName()

// title = document.getElementsByTagName('li')
// console.log(title)

// querySelector()
// title = document.querySelector("div");
// console.log(title);

// querySelectorAll()

// title = document.querySelectorAll("div")
// console.log(title)

// Changing styles of elements

// let title = document.querySelector('#main-heading')
// title.style.color = 'red'

// // console.log(title)

// let listItems = document.querySelectorAll('.list-items')

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '4rem'
// }
// console.log(listItems)

// Creating elements

// let ul = document.querySelector("ul");
// const li = document.createElement("li");

// Adding elements

// ul.append(li);

// modifying the text

// let firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText)

// li.innerText = "C# Microsoft";

// Modifying Attributes & classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')

// let title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))

// li.classList.add("list-items");
// li.classList.remove("list-items");

// console.log(li.classList.contains("list-items"));

// remove Element
// li.remove();

// let ul = document.querySelector('ul')
// console.log(ul.parentElement.parentElement)
// console.log(ul.parentNode.parentNode)

// child node traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes)

// ul.childNodes[1].style.backgroundColor = 'blue'

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild)



// Event Listeners


// Event Listener

// Element.addEventListener("click", function);

// var btnTwo = document.querySelector(".btn-2");

// btnTwo.addEventListener("click", alertBtn);

// function alertBtn() {
//   alert("I Love programming in Javascript :");
// }

// var btnThree = document.querySelector(".box-3");

// btnThree.addEventListener("mouseover", function () {
//   btnThree.style.backgroundColor = "Blue";
// });

// btnThree.addEventListener("click", function () {
//   alert("I love programming!!!");
// });

// console.log(btnThree);

// console.log(btnTwo);