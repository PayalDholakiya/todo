
// Create a new list item when clicking on the "Add" button
function todolist() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

//delete button
  var btn  = document.createElement("button");
  btn.innerHTML = '<i class="fas fa-trash"></i>';
  var txt = document.createTextNode("");
  btn.className = "close";
  btn.appendChild(txt);
  li.appendChild(btn);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      div.style.height = "40px";
    }
  }

  //check items

  li.className = 'list';
  var list = document.getElementsByClassName("list");
  for (i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        var listItem = this;
        listItem.style.textDecoration = "line-through";
        }
    }
  }
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");



