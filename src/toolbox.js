//This will look for things with the 'tool' element
const tool = document.querySelector('.tool')

// attach the dragstart event handler
tool.addEventListener('dragstart', dragStart);

function dragStart(element){

    //stores the id of the element
    element.dataTransfer.setData('text/plain', element.target.id);

    //makes it so its not invisible forever
    setTimeout(() => {
        element.target.classList.add('hide');
    }, 1);
}

const toolBox = document.querySelectorAll('.toolbox')

toolBox.forEach(toolBox => {
    toolBox.addEventListener('dragenter', dragEnter);
    toolBox.addEventListener('dragover', dragOver);
    toolBox.addEventListener('dragleave', dragLeave);
    toolBox.addEventListener('drop', drop);
});

/*Dragging Functions*/

function dragEnter(element){
    element.preventDefault();
    element.target.classList.add('drag-over');
}

function dragOver(element){
    element.preventDefault();
    element.target.classList.add('drag-over');
}

function dragLeave(element){
    element.target.classList.remove('drag-over');
}

function drop(element){
    element.target.classList.remove('drag-over');

    // gets the draggable element
    const id = element.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    //adds to the tool
    element.target.appendChild(draggable);

    //displays the tool
    draggable.classList.remove('hide');

}