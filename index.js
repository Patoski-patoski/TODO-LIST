var myList = document.getElementsByTagName('li');

for (let i = 0;  i < myList.length;  i++) {
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7')
    span.className = 'cancel';
    span.appendChild(txt);

    myList[i].appendChild(span);
    
}

var cancel = document.getElementsByClassName('cancel')

// for (let i = 0; i < cancel.length; i++) {
//     cancel[i].onclick = () =>{
//         var div = this.parentElement;
//         div.style.display = 'none'
//     };
    
// }


span.appendChild(cancel)
 
myList.appendChild(span)


function addTodo() {
    var list = document.createElement('li');
    list.setAttribute('id', 'newList')
    var inputValue = document.getElementById('text').value;

    var textNode = document.createTextNode(inputValue);

    list.appendChild(textNode);

    if (inputValue === '') {
        alert('you must todo something')
        
    }else{
      

    document.getElementById('ul').appendChild(list);
    document.getElementById('text').value = '';

    }

}



 