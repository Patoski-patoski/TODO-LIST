// Add an 'x' to each list elements
var newList = document.getElementsByTagName('LI');

for (let i = 0; i < newList.length; i++) {
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');

    span.appendChild(txt)

    span.className = 'cancel';
    newList[i].appendChild(span)

}

// remove the toDo list by pressing the 'x' a.k.a cancel-class

var cancel = document.getElementsByClassName('cancel');

for (let i = 0; i < cancel.length; i++) {
    cancel[i].onclick = function () {
        var closeList = this.parentElement
        closeList.style.display = 'none'
    };
}

var ulList = document.querySelector('ul');

ulList.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
  }
}, false);


// function to create a new list by using the input value and appending to the ul

function addTodo() {
    var list = document.createElement('li');
    var inputValue = document.getElementById('text').value;

    var textNode = document.createTextNode(inputValue);

    list.appendChild(textNode);

    if (inputValue === '') {
        alert('you must todo something')

    } else {
        document.getElementById('ul').appendChild(list);
    }
    document.getElementById('text').value = '';


    // added the 'x' to the newly created list
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');

    span.className = 'cancel'
    span.appendChild(txt)
    list.appendChild(span)

    // remove the new toDo list by pressing the 'x'

    for (let i = 0; i < cancel.length; i++) {
        cancel[i].onclick = function () {
            var closeList = this.parentElement
            closeList.style.display = 'none'
        };

    }

}








