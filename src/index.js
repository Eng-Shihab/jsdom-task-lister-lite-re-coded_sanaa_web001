document.addEventListener("DOMContentLoaded", () => {
    // your code here
         event.preventDefault();
         document.getElementById("submit").addEventListener("click", function (event) {
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
