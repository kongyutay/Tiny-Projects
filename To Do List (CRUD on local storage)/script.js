const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Assign add task function to the button
function addTask(){
	if(inputBox.value === ''){
		
		//If the textarea is kosong		
		alert("You must write something!");
	}
	else {
		
		//Create li and put content inside
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		
		//Create span and put the cross icon for delete purpose
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

//Delete task
listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);

//Save Data to local storage
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

//Show the data after refresh
function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();