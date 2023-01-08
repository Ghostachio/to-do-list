var button = document.getElementById("enter");
var input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var Btn = document.createElement('button');
	var div = document.createElement('div');
		div.className = "wrapper";
		li.className = "item";
		Btn.className= "delete";
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	Btn.appendChild(document.createTextNode('delete'));
	div.appendChild(Btn);
	div.appendChild(document.createTextNode(''));
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(event){
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	  }
}

function deleteListElement(event) {
	if (event.target.className === "delete"){
		event.target.parentElement.remove();
	}
}


ul.addEventListener('click', toggleClass);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.addEventListener("click", deleteListElement);







