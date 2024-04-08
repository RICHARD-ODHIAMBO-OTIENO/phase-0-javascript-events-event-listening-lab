// This function adds an event listener to the button element with the ID 'button'
function addingEventListener() {
    // get the button element by its ID 
    let eventTarget = document.getElementById('button');
    eventTarget.addEventListener('click', function() {
        alert('You clicked the button!');
    });
}

addingEventListener();
