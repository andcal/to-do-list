
window.onload = function() {

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var cleanDoneButton = document.getElementById('clean-done-button');
  cleanDoneButton.addEventListener('click', cleanDone, false);

  var cleanAllButton = document.getElementById('clean-all-button');
  cleanAllButton.addEventListener('click', cleanAll, false); 

  function addToDoItem() {

    event.preventDefault();

    var item = document.getElementById('input-bar');

    if(item.value != ""){

      var text = document.createTextNode(item.value);

      var newParagraph = document.createElement('p');
      newParagraph.style.marginTop = "-5px";
      newParagraph.style.marginLeft = "5px";
      newParagraph.appendChild(text);

      var newLi = document.createElement('li');
      newLi.style.display = "flex";
    
      var newCheckbox = document.createElement('input');
      newCheckbox.type = "checkbox";
      newCheckbox.value = 0;
      newCheckbox.addEventListener('click', markAsDone, false);

      newLi.appendChild(newCheckbox);
      newLi.appendChild(newParagraph);

      var ulParent = document.getElementById('element-list');
      ulParent.insertBefore(newLi, ulParent.children[0]);

      item.value = "";
      }
  }

  function markAsDone() {

    if(this.checked == true) {
      this.parentNode.classList.remove('undone');
      this.parentNode.classList.add('done');

    } else {
      this.parentNode.classList.remove('done');
      this.parentNode.classList.add('undone');
    }
  }

  function cleanDone() {

  	var doneElements = document.getElementsByClassName('done');
    
    for (var i = 0; doneElements.length>i; i++) {                         
      doneElements[i].setAttribute("hidden","");
    }
  }

  function cleanAll() {

    var elements = document.querySelectorAll('li')

    for (var i = 0; elements.length>i; i++) {
      elements[i].setAttribute("hidden", "");
    }
  }
}





