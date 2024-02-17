let add = document.getElementById('add');
add.addEventListener("click", () => {
    let formValue = document.getElementById('form').value;
    if (formValue === '') {
        alert("Please enter a task");
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<span>${formValue}</span> 
                        <button class="edit">Edit</button>
                        <button class="del">Delete</button>
                        <button class="complete">Complete</button>`;
        li.setAttribute('class', 'item');
        const list = document.getElementById('list');
        list.appendChild(li);
        document.getElementById('form').value = '';
        addEventListeners();
    }
});

function addEventListeners() {
    let editButtons = document.getElementsByClassName('edit');
    let delButtons = document.getElementsByClassName('del');
    let completeButtons = document.getElementsByClassName('complete');

    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', function () {
            let newText = prompt("Enter new text:");
            if (newText !== null) {
                this.parentElement.firstChild.innerText = newText;
            }
        });
    }

    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener('click', function () {
            this.parentElement.remove();
        });
    }

    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener('click', function () {
            this.parentElement.classList.toggle('completed');
        });
    }
}

addEventListeners();
