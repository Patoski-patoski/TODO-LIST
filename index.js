
function addTodo() {
    var list = document.createElement('li');
    var inputValue = document.getElementById('text').value;

    var textNode = document.createTextNode(inputValue);

    list.appendChild(textNode);

    if (inputValue === '') {
        alert('you must do something')
        
    }else{
    document.getElementById('ul').appendChild(list);
    document.getElementById('text').value = '';
    


    }

}
 