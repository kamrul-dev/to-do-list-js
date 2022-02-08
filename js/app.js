
let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-value').value;

    if (inputValue == "") {
        alert("please enter a value");
    }
    else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
        <button class="btn btn-danger del-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button>
        </td>
        `
        mainContainer.appendChild(tableContainer);

        const delButton = document.getElementsByClassName('del-btn');

        const doneButton = document.getElementsByClassName('done-btn');

        for(const button of delButton){
            button.addEventListener('click', function(e){
                e.target.parentNode.parentNode.style.display = 'none';
            });
        }
        for(const button of doneButton){
            button.addEventListener('click', function(e){
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            });
        }

    }
});