document.addEventListener("DOMContentLoaded", () => {
    // your code here
	     	let submit = document.getElementById('create-task-form');
        submit.addEventListener("click", function (event) {
	      event.preventDefault();
	      let task = document.getElementById("new-task-description").value;
		    document.getElementById("new-task-description").value = '';
	      let newElement = document.createElement('li');
        document.getElementById("tasks").appendChild(newElement);
        newElement.innerHTML = task + " <button class='btn'>X</button>";
        newElement.addEventListener('click', function () {
            this.parentNode.removeChild(this);
        });


    });
});