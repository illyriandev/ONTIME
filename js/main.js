var input = document.getElementById("itemInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("addItem").click();
  }
});


// User clicks on addItem button
// If there is any text in itemInput add that text to the list
document.getElementById('addItem').addEventListener('click', function() {
  var value = document.getElementById('itemInput').value;
  if (value) addItemTodo(value); 
});

function addItemTodo(itemInput) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.classList.add('item');
  var text = document.createElement('div');
  text.innerText = itemInput; 
  var buttons = document.createElement('div');
  buttons.classList.add('buttons')
  //var remove = document.createElement('button');
  //remove.classList.add('remove')
  //var complete = document.createElement('button');
  //complete.classList.add('complete');

  list.appendChild(item);
  item.appendChild(text);
  item.appendChild(buttons);
  buttons.appendChild(remove);
  buttons.appendChild(complete);



}

