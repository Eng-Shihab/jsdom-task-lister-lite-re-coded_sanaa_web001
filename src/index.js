document.addEventListener("DOMContentLoaded", () => {
    // your code here

    document.getElementById("submit").addEventListener("click", function (event) {
	    event.preventDefault();
	    let task = document.getElementById("new-task-description").value;
		task.value = '';
	    let newElement = document.createElement('li');
        document.getElementById("tasks").appendChild(newElement);
        newElement.innerHTML = task + " <button class='btn'>X</button>";
        newElement.addEventListener('click', function () {
            this.parentNode.removeChild(this);
        });


    });
});
