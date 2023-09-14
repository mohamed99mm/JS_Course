// to view object representation

// document.body.children[0]  --> to get <div id="divone"></div>

//document.body.children[0].nextElementSibling --> to get <div id="divtwo"></div>

//document.body.children[0].nextElementSibling.nextElementSibling --> to get <div id="divthree"></div>

// to get the element by id

// document.getElementById("divtwo")   --> to get <div id=​"divtwo">​</div>​

//to get the element by class

//document.getElementsByClassName("divs") --> to get all elements with class divs

// to get elemnts with the same tag name

//var elem = document.getElementsByTagName("div")

// there is a property called --> innerHTMl that that takes the html i want to display
// and show it to the output

// document.body.children[0].innerHTML = "<b> Div Element </b>"

///to ge the classname of the id divone

//document.getElementById("divone").className

//to add a class c2  to the id divone

//document.getElementById("divone").classList.add("c2")

//to remove clas from the id divone

//document.getElementById("divone").classList.remove("c1")

//<---------------------Create New Nodes ------------------------->

// Element node --> createElement()

// Attribute node --> createAttribute()

// Text node --> CreateText()

// Comment node -->createComment()

//Where you need to insert the node in the document?

// document.body.insertBefore(a,b)  //a ->the new node to be inserted

//b --> the location which i want to puth the node before

//b.appendChild(a) // b --> is the parent of new created node

//a--> the node i want to create
