console.log("Hello world");

// var, let, const

// const school = "Obafemi Awolowo"
// // console.log(school);

//  school = "Lagos state university";
// console.log(school);

// DOM MANIPULATION

// Get elementById()

// const titleTwo = document.getElementById("main-heading");
// console.log(titleTwo);

// Get elementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// GetElementsByTagName()

// const items = document.getElementsByTagName("li");
// console.log(items);

// querySelector
// const container = document.querySelector("div");
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log(container);

// const title = document.querySelector("#main-heading");
// console.log(title);

// const items = document.querySelectorAll(".list-items");
// console.log(items);

// var title = document.querySelector("#main-heading");
// title.style.backgroundColor = "teal";
// console.log(title);

// var listItems = document.querySelectorAll(".list-items");
// listItems.style.color = "red"

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "#ccc";
// }
// console.log(listItems);

// Create elements

// var ul = document.querySelector("ul");
// var li = document.querySelector("li");

// Adding elements

// ul.append(li);
// add li inside ul

// li.innerText = "Android development";

// examples to show difference btw innerText, textContent, innerHTML
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML)

// modifying Attributes and classes

// li.setAttribute("id", "main-head");
// li.removeAttribute('id')

// li.classList.add("list-item");
// li.classList.remove('list-item')

// li.remove();

// console.log(ul);

// Event Listener

// Element.addEventListener("click", function);

var btnTwo = document.querySelector(".btn-2");

btnTwo.addEventListener("click", alertBtn);

function alertBtn() {
  alert("I Love programming in Javascript :");
}

var btnThree = document.querySelector(".box-3");

btnThree.addEventListener("mouseover", function () {
  btnThree.style.backgroundColor = "Blue";
});

// btnThree.addEventListener("click", function () {
//   alert("I love programming!!!");
// });

// console.log(btnThree);

// console.log(btnTwo);
